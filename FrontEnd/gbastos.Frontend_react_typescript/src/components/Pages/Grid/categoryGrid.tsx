import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models";
import { ICategory } from '../interfaces/ICategory';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './categoryGrid.scss';
import { Link } from "react-router-dom";

const column: GridColDef[] = [
   { field: "id", headerName: "Guid", width: 350 },
   { field: "nome", headerName: "Nome", width: 400 },
   {
      field: "editUrl",
      headerName: "Download",
      width: 90,
      renderCell: () => (
         <Link to="/updateCategory" >
                <EditIcon />
         </Link>
      ),
   },
   {
      field: "deleteUrl",
      headerName: "Download",
      width: 90,
      renderCell: () => (
         <Link to="/deleteCategory" >
                <DeleteIcon />
         </Link>
      ),
   },
];

interface ICategoriesGridProps {
   data: ICategory[];
}

const CandidatesGrid = ({ data }: ICategoriesGridProps) => {
   return (
      <Box sx={{ width: "100%", height: 450 }} className="jobs-grid">
         <DataGrid rows={data} columns={column} getRowId={(row) => row.id} rowHeight={50} />
      </Box>
   );
};

export default CandidatesGrid;