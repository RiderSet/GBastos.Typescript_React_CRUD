import { Box } from "@mui/material";
import { DataGrid, GridColDef  } from "@mui/x-data-grid";
import { ICategoriesGridProps, } from "../../Interfaces/ICategory";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const column: GridColDef[] = [
    { field: "id", headerName: "Guid", width: 700 },
    { field: "nome", headerName: "Nome", width: 300 },
    {
       field: "editUrl",
       headerName: "Edit",
       width: 90,
       renderCell: () => (
          <Link to="/edit" >
             <EditIcon />
          </Link>
       ),
    },
    {
       field: "deleteUrl",
       headerName: "delete",
       width: 90,
       renderCell: () => (
          <Link to="/DeleteCategory"  >
             <DeleteIcon />
          </Link>
       ),
    },
 ];
 
 const CategoriesGrid = ({ data }: ICategoriesGridProps) => {
    return (
       <Box sx={{ width: "100%", height: 450 }} className="categories-grid">
          <DataGrid rows={data} columns={column} getRowId={(row) => row.id} rowHeight={50} />
       </Box>
    );
 };
 
 export default CategoriesGrid;