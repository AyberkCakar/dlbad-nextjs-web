'use client';

import { GridColDef } from '@mui/x-data-grid';
import { GridPaginationModel } from '@mui/x-data-grid/models/gridPaginationProps';
import { Datatable } from '../../datatable';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID'
  },
  {
    field: 'firstName',
    headerName: 'First name'
  },
  { field: 'lastName', headerName: 'Last name' },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number'
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];

export default function SimulatorPage() {
  return (
    <Datatable
      columns={columns}
      data={rows}
      totalDataCount={10}
      isSearchable={true}
      onPaginationChange={(pagination: GridPaginationModel) => {
        console.log(pagination);
      }}
      onSearchChange={(searchText: string) => {
        console.log('searchText', searchText);
      }}
      isAddButton={true}
      addButtonLabel={'Add Simulator'}
      onAddClick={() => {
        console.log('Add Simulator');
      }}
    ></Datatable>
  );
}
