import { GridActionsCellItem, GridColDef, GridRowId } from '@mui/x-data-grid';
import { GridPaginationModel } from '@mui/x-data-grid/models/gridPaginationProps';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import * as React from 'react';
import { GridSortItem } from '@mui/x-data-grid/models/gridSortModel';
import { DELETE_FAILURE_TYPE, GET_FAILURE_TYPES } from './_graphql';
import { Datatable } from '../../datatable';
import { Alert, Snackbar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import AddFailureTypeModal from './add-modal';
import DeleteModal from '../../delete-modal';
import { useMutation } from '@apollo/client';
import { IFailureType, IFailureVarieble, IResultData } from './_model';
import { useTranslation } from '../../../hooks/useTranslation';

function getLikeWhere(searchText: string): Record<string, any> {
  return {
    failureName: { _ilike: `%${searchText}%` }
  };
}

export default function FailureTypesPage() {
  const { t } = useTranslation();
  const [rows, setData] = React.useState<IFailureType[]>([]);
  const [totalCount, setTotalCount] = React.useState<number>(0);

  const [pagination, setPagination] = React.useState<GridPaginationModel>({
    pageSize: 10,
    page: 0
  });
  const [searchText, setSearchText] = React.useState<string>('');
  const [sort, setSort] = React.useState<GridSortItem | null>({
    field: 'id',
    sort: 'asc'
  });

  const [openState, setOpenState] = React.useState<boolean>(false);
  const [openDeleteDialogState, setOpenDeleteDialogState] =
    React.useState<boolean>(false);
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);
  const [alertSuccess, setAlertSuccess] = React.useState<boolean>(false);
  const [failureType, setFailureType] = React.useState<IFailureType | null>(
    null
  );
  const [selectedRowId, setSelectedRowId] = React.useState<number | null>(null);

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: t('failureTypes.id')
    },
    {
      field: 'failureName',
      headerName: t('failureTypes.failureName'),
      width: 200
    },
    {
      field: 'period',
      headerName: t('failureTypes.period'),
      type: 'number',
      width: 100
    },
    {
      field: 'soundAnomalyMultiplier',
      headerName: t('failureTypes.soundAnomalyMultiplier'),
      type: 'number',
      width: 200
    },
    {
      field: 'temperatureAnomalyMultiplier',
      headerName: t('failureTypes.temperatureAnomalyMultiplier'),
      type: 'number',
      width: 200
    },
    {
      field: 'vibrationAnomalyMultiplier',
      headerName: t('failureTypes.vibrationAnomalyMultiplier'),
      type: 'number',
      width: 200
    },
    {
      field: 'timeInterval',
      headerName: t('failureTypes.timeInterval'),
      type: 'number',
      width: 200
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      width: 150,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            key={'edit'}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={'delete'}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteClick(id)}
            color="inherit"
          />
        ];
      }
    }
  ];

  const handleEditClick = (id: GridRowId) => () => {
    const findData: IFailureType | undefined = rows.find(
      (data: IFailureType) => data.id === id
    );

    if (findData) {
      setFailureType({
        id: findData.id,
        failureName: findData.failureName,
        period: findData.period,
        timeInterval: findData.timeInterval,
        soundAnomalyMultiplier: findData.soundAnomalyMultiplier,
        vibrationAnomalyMultiplier: findData.vibrationAnomalyMultiplier,
        temperatureAnomalyMultiplier: findData.temperatureAnomalyMultiplier
      });
      setOpenState(true);
    }
  };

  const handleDeleteClick = (id: GridRowId) => {
    setSelectedRowId(id as number);
    setOpenDeleteDialogState(true);
  };

  const handleClick = () => {
    setAlertOpen(true);
  };

  const [deleteFailureType] = useMutation(DELETE_FAILURE_TYPE);

  const variables = React.useMemo(() => {
    let vars: IFailureVarieble = {
      offset: pagination.page * pagination.pageSize,
      limit: pagination.pageSize
    };
    if (searchText !== '') {
      vars = {
        ...vars,
        where: getLikeWhere(searchText)
      };
    }

    if (sort) {
      vars = {
        ...vars,
        order_by: [{ [sort?.field]: sort?.sort }]
      };
    }
    return vars;
  }, [pagination, searchText, sort]);

  const { data, error, refetch } = useSuspenseQuery<IResultData>(
    GET_FAILURE_TYPES,
    {
      variables
    }
  );

  const getFirstPage = () => {
    setPagination({
      page: 0,
      pageSize: pagination.pageSize
    });
  };

  const onDelete = () => {
    setOpenDeleteDialogState(false);

    deleteFailureType({
      variables: {
        id: selectedRowId
      }
    })
      .then((result) => {
        setAlertSuccess(true);
      })
      .catch((error) => {
        setAlertSuccess(false);
      })
      .finally(() => {
        getFirstPage();
        handleClick();
        setSelectedRowId(null);
        refetch({ variables });
      });
  };

  const handleAlertClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false);
  };

  React.useEffect(() => {
    if (!openState) {
      setFailureType(null);
    }
  }, [openState]);

  React.useEffect(() => {
    if (data) {
      setData(data.failure_types);
      setTotalCount(data.failure_types_aggregate.aggregate.count);
    } else if (error) {
    }
  }, [data, error]);

  return (
    <>
      <Datatable
        columns={columns}
        data={rows}
        totalDataCount={totalCount}
        isSearchable={true}
        onPaginationChange={(pagination: GridPaginationModel) => {
          setPagination(pagination);
        }}
        onSearchChange={(searchText: string) => {
          setSearchText(searchText);
        }}
        onSortChange={(sort: GridSortItem | null) => {
          setSort(sort);
        }}
        isAddButton={true}
        addButtonLabel={t('failureTypes.addFailureType')}
        onAddClick={() => {
          setOpenState(true);
        }}
      ></Datatable>
      <AddFailureTypeModal
        openState={openState}
        onClose={() => setOpenState(false)}
        saveResponse={(success: boolean) => {
          setAlertSuccess(success);
          handleClick();
          setOpenState(!success);
        }}
        failureType={failureType}
      ></AddFailureTypeModal>
      <DeleteModal
        openState={openDeleteDialogState}
        onClose={() => setOpenDeleteDialogState(false)}
        onDeleteClick={() => onDelete()}
        modalInfo={{
          title: t('failureTypes.deleteModal.title'),
          description: t('failureTypes.deleteModal.description')
        }}
      ></DeleteModal>
      <Snackbar
        open={alertOpen}
        autoHideDuration={2000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alertSuccess ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}
