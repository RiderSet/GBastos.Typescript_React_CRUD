import { useCallback, useMemo, useState } from 'react';
import { 
   Box,   
   Button,
   IconButton,
   Tooltip } from "@mui/material";
import { ICategory, ICreateCategoryDto } from "../../Interfaces/ICategory";
import { MaterialReactTable } from 'material-react-table';
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { CreateNewCategoryModal } from "./createModal";
import { useNavigate } from "react-router-dom";
import httpModule from "../../crosscutting/api/client";

export default function CategoriesGrid( {data}: ICategory[]) {
   const redirect = useNavigate();
   const [createModalOpen, setCreateModalOpen] = useState(false);
   const [tableData, setTableData] = useState<ICategory[]>(() => data);
   const [validationErrors, setValidationErrors] = useState({});
   
   const handleCreateNewRow = (values) => {
      tableData.push(values);
      setTableData([...tableData]);
    };
  
    const handleCancelRowEdits = () => {
      setValidationErrors({});
    };
    
    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
      const data: Partial<ICreateCategoryDto> = {
         Nome: row.getValue('nome'),
      };
      if (!Object.keys(validationErrors).length) {
        tableData[row.index] = values;        
        setTableData([...tableData]);
        httpModule
           .put("UpdateCategory/" + row.getValue('id'), data)
           .then((response) => redirect("/list", { state: { message: "Categoria Atualizada." } }))
           .catch((error) => alert("Error de novo " + row.getValue('id')));
        exitEditingMode();
      }
    };

    const handleDeleteRow =  useCallback(
      (row) => {
        if (
          !confirm(`Tem certeza de que quer excluir ${row.getValue('nome')}?`)
        ) {
          return;
        }
        httpModule
        .delete("DeleteCategory/" + row.getValue('id'))
        .then((resposne) => redirect("/list", { state: { message: "Categoria Deletada!" } }))
        .catch((error) => alert("Error"));
        tableData.splice(row, 1);
        setTableData([...tableData]);
        window.location.reload();
      },
      [tableData],
    );

   const columns = useMemo(
      () => [
      { accessorKey: "id", header: "Guid", size: 400 },
      { accessorKey: "nome", header: "Nome", size: 500 },
      {
         accessorKey: "actionsEdit",
         header: "Edit",
         size: 90,
      },
      {
         accessorKey: "actionsDelete",
         header: "delete",
         size: 90,
      },
 ],
 [],
);

const columns2 = useMemo(
   () => [
   { accessorKey: "nome", header: "Descrição", size: 500 },
],
[],
);

   return (
      <>
      <MaterialReactTable
        columns={columns}
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        data={tableData}
        editingMode="modal" //default
        enableColumnOrdering
        enableRowSelection
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
                  <IconButton color="error" onClick={() => handleDeleteRow(row)} >
                    <Delete />
                  </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            NOVA CATEGORIA
          </Button>
        )}
      />
      <CreateNewCategoryModal
        columns={columns2}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
   )      
}