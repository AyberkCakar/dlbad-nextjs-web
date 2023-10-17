import {
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridSortItem
} from '@mui/x-data-grid';
import { GridPaginationModel } from '@mui/x-data-grid/models/gridPaginationProps';
import { Datatable } from '../../datatable';
import { Button } from '@mui/material';
import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useMutation, useSuspenseQuery } from '@apollo/client';
import DeleteModal from '../../delete-modal';
import { AlertMessage } from '../../alert';
import { DELETE_SIMULATOR, GET_SIMULATORS } from './_graphql';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { PageContainer } from './_styles';
import { useRouter } from 'next/router';
import { ISimulator, ISimulatorResult } from './_types';
import { IVariable } from '../../../models/variable';

function getLikeWhere(searchText: string): Record<string, any> {
  return {
    simulatorName: { _ilike: `%${searchText}%` }
  };
}

export default function SimulatorPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [rows, setData] = React.useState<ISimulator[]>([]);
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

  const [openDeleteDialogState, setOpenDeleteDialogState] =
    React.useState<boolean>(false);
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);
  const [alertSuccess, setAlertSuccess] = React.useState<boolean>(false);
  const [selectedRowId, setSelectedRowId] = React.useState<number | null>(null);
  const [deleteSimulator] = useMutation(DELETE_SIMULATOR);

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: t('general.id')
    },
    {
      field: 'simulatorName',
      headerName: t('simulator.simulatorName'),
      width: 200
    },
    {
      field: 'parameters',
      type: 'actions',
      headerName: t('simulator.parameters'),
      width: 200,
      cellClassName: 'actions',
      renderCell: ({ id, field }) => (
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => onClickActionButton(id, field)}
        >
          {t('simulator.showParameters')}
        </Button>
      )
    },
    {
      field: 'result',
      type: 'actions',
      headerName: t('simulator.result'),
      width: 200,
      cellClassName: 'actions',
      renderCell: ({ id, field }) => (
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => onClickActionButton(id, field)}
        >
          {t('simulator.showResult')}
        </Button>
      )
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: t('general.actions'),
      width: 150,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            key={'edit'}
            icon={<EditIcon />}
            label={t('general.edit')}
            className="textPrimary"
            onClick={() => onEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={'delete'}
            icon={<DeleteIcon />}
            label={t('general.delete')}
            onClick={() => onDeleteClick(id)}
            color="inherit"
          />
        ];
      }
    }
  ];

  const onDeleteClick = (id: GridRowId) => {
    setSelectedRowId(id as number);
    setOpenDeleteDialogState(true);
  };

  const onEditClick = (id: GridRowId) => {
    router.push('/simulator/' + id);
  };

  const onClickActionButton = (id: GridRowId, field: string) => {
    console.log(field, id);
  };

  const variables = React.useMemo(() => {
    let vars: IVariable = {
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

  const { data, error, refetch } = useSuspenseQuery<ISimulatorResult>(
    GET_SIMULATORS,
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

    deleteSimulator({
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
        setAlertOpen(true);
        setSelectedRowId(null);
        refetch({ variables });
      });
  };

  React.useEffect(() => {
    if (data) {
      setData(data.simulators);
      setTotalCount(data.simulators_aggregate.aggregate.count);
    } else if (error) {
    }
  }, [data, error]);

  return (
    <PageContainer>
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
        isAddButton={false}
      ></Datatable>
      <DeleteModal
        openState={openDeleteDialogState}
        onClose={() => setOpenDeleteDialogState(false)}
        onDeleteClick={() => onDelete()}
        modalInfo={{
          title: t('simulator.deleteModalTitle'),
          description: t('simulator.deleteModalDescription')
        }}
      ></DeleteModal>
      <AlertMessage
        openState={alertOpen}
        description={
          alertSuccess
            ? t('simulator.deleteSuccessMessage')
            : t('simulator.deleteErrorMessage')
        }
        alertSuccess={alertSuccess}
        onClose={() => setAlertOpen(false)}
      ></AlertMessage>
    </PageContainer>
  );
}
