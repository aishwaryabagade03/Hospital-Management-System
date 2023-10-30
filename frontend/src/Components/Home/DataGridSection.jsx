import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'fullName',
    headerName: 'Doctors',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'age',
    headerName: 'Patients',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'work',
    headerName: 'Speciality',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'money',
    headerName: 'Revenue',
    width: 150,
    editable: true,
  },
  {
    field: 'salary',
    headerName: 'Salary',
    width: 150,
    editable: true,
  },
  {
    field: 'achievement',
    headerName: 'Achievements',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, work:'Pharmacist',email:'Snow@xyv.com', money:'$33 K',salary:'7 k', achievement:'80%' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, work:'Homopathy',email:'Cersei@ulmo.com', money:'$54 K',salary:'8 k', achievement:'45%' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, work:'Plastic Surgery',email:'Lannister@abc.com',money:'$20 K',salary:'7.3 k', achievement:'50%' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, work: 'Dentist',email:'Stark@hgg.com',money:'$47 K',salary:'12 k', achievement:'77%' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 32, work:'Cardiology',email:'Targay@jdhs.com',money:'$66 K',salary:'10 k', achievement:'65%' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, work:'Ophthalmology',email:'Xy@gsjdh.com',money:'$23.8 K',salary:'15 k', achievement:'40%' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , work:'Pathologist',email:'ford@jhg.com',money:'$20 K',salary:'20 k', achievement:'78%'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, work:'Operation',email:'roosw@dyu.com',money:'$68 K',salary:'28 k', achievement:'80%' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, work:'Dentist',email:'eyg@myz.com',money:'$48 K',salary:'10 k', achievement:'80%' },
];

export default function DataGridDemo() {
  return (
    <Box sx={{  height: 400, width: '100%', marginTop:'15px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
