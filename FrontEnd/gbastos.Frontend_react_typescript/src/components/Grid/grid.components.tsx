import React from 'react'
import './grid.scss';
// import { ICategory } from '../../Types/global.types';
import { Box } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid/models';
import { DataGrid } from '@mui/x-data-grid';

const column: GridColDef[] = [
    { field: "Id", headerName: "ID", width: 40},
    { field: "Name", headerName: "NAME", width: 60},
]

const CategoryGrid = (data: any) => {
  return (
        <Box sx={{width:"100%", height: 450}} className="grid-components">
            <DataGrid rows={data} columns={column} getRowId={(row) => row.id} rowHeight={50} />
        </Box>
  );
}

export default CategoryGrid