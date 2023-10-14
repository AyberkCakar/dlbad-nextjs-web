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
import AddFailureTypeModal from './add-modal/_template';
import DeleteModal from '../../delete-modal/_template';
import { useMutation } from '@apollo/client';

function getLikeWhere(searchText: string): Record<string, any> {
  return {
    failureName: { _ilike: `%${searchText}%` }
  };
}

export default function FailureTypesPage() {
  const [rows, setData] = React.useState<any>([]);
  const [totalCount, setTotalCount] = React.useState<number>(0);

  const [pagination, setPagination] = React.useState<GridPaginationModel>({
    pageSize: 10,
    page: 0
  });
  const [searchText, setSearchText] = React.useState<string>('');
  const [sort, setSort] = React.useState<GridSortItem>({
    field: 'id',
    sort: 'asc'
  });

  const [openState, setOpenState] = React.useState(false);
  const [openDeleteDialogState, setOpenDeleteDialogState] =
    React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertSuccess, setAlertSuccess] = React.useState(false);
  const [failureType, setFailureType] = React.useState<any>(null);
  const [selectedRowId, setSelectedRowId] = React.useState<number | null>(null);

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID'
    },
    {
      field: 'failureName',
      headerName: 'Failure Name',
      width: 200
    },
    {
      field: 'period',
      headerName: 'Period',
      type: 'number',
      width: 100
    },
    {
      field: 'soundAnomalyMultiplier',
      headerName: 'Sound Anomaly multiplier',
      type: 'number',
      width: 200
    },
    {
      field: 'temperatureAnomalyMultiplier',
      headerName: 'Temperature Anomaly multiplier',
      type: 'number',
      width: 200
    },
    {
      field: 'vibrationAnomalyMultiplier',
      headerName: 'Vibration Anomaly multiplier',
      type: 'number',
      width: 200
    },
    {
      field: 'timeInterval',
      headerName: 'Time Interval',
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
    const findData = rows.find((data: any) => data.id === id);
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
    let vars = {
      offset: pagination.page * pagination.pageSize,
      limit: pagination.pageSize
    };
    if (searchText !== '') {
      vars = {
        ...vars,
        where: getLikeWhere(searchText)
      };
    }

    if (sort && sort.length !== 0) {
      vars = {
        ...vars,
        order_by: [{ [sort?.field]: sort?.sort }]
      };
    }
    return vars;
  }, [pagination, searchText, sort]);

  const { data, error, refetch } = useSuspenseQuery<any>(GET_FAILURE_TYPES, {
    variables
  });

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
      setData(data['failure_types']);
      setTotalCount(data['failure_types_aggregate']?.aggregate?.count);
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
        addButtonLabel={'Add Failure Type'}
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
          title: 'Delete',
          description: 'Delete'
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
