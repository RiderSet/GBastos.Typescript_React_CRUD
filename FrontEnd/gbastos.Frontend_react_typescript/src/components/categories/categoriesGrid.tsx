import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from "react-router-dom";
import { ICategory } from "../../Interfaces/ICategory";
import { useState } from "react";

export default function CategoriesGrid( {data}: ICategory[]) {
   const [categories, setCategories] = useState<ICategory[]>(data)
   const state = {
      rows: [data]
    };

   const redirect = useNavigate();
   const columns: GridColDef[] = [
      { field: "guid", headerName: "Guid", width: 700 },
      { field: "nome", headerName: "Nome", width: 300 },
      {
         field: "actionsEdit",
         headerName: "Edit",
         width: 90,
         renderCell: () => (
            <Link to="/edit" ><EditIcon /></Link>
         ),
      },
      {
         field: "actionsDelete",
         headerName: "delete",
         width: 90,         
         renderCell: (params) => <Button onClick={() => handleClick(params.row.value)} ><DeleteIcon /></Button>
      }
   ];
   
   const handleClick = (categoria: ICategory) => {
      setCategories(state.rows.filter(i => i.Guid !== categoria.Guid));
      redirect("/list")
  };

   return (
      <Box sx={{ width: "100%", height: 420 }} className="categories-grid">
         <DataGrid rows={categories} columns={columns} getRowId={(row) => row.id} rowHeight={50}  />
      </Box>
   );
}