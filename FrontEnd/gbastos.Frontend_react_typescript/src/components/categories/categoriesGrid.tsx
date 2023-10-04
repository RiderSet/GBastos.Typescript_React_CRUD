import { Box } from "@mui/material";
import { DataGrid, GridColDef  } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { ICategoriesGridProps, } from "../../Interfaces/ICategory";

export default function CategoriesGrid({ data }: ICategoriesGridProps) {
   const columns: GridColDef[] = [
      { field: "id", headerName: "Guid", width: 700 },
      { field: "nome", headerName: "Nome", width: 300 },
      {
         field: "editUrl",
         headerName: "Edit",
         width: 90,
         renderCell: () => (
            <Link to="/edit" state={data} >
               <EditIcon />
            </Link>
         ),
      },
      {
         field: "deleteUrl",
         headerName: "delete",
         width: 90,
         renderCell: () => (
            <Link to="/delete" state={data} >
               <DeleteIcon />
            </Link>
         ),
      },
   ];
 
   return (
      <Box sx={{ width: "100%", height: 420 }} className="categories-grid">
         <DataGrid rows={data} columns={columns} getRowId={(row) => row.id} rowHeight={50} />
      </Box>
   );

}