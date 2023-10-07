import { useCallback, useMemo, useState } from 'react';
import { 
   Box,   
   Button,
   IconButton,
   Tooltip } from "@mui/material";
import { ICategory } from "../../Interfaces/ICategory";
import { MaterialReactTable } from 'material-react-table';
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { CreateNewCategoryModal } from "./createModal";
import httpModule from "../../crosscutting/api/client";

export default function CategoriesGrid( {data}: ICategory[]) {
   const [createModalOpen, setCreateModalOpen] = useState(false);
   const [tableData, setTableData] = useState<ICategory[]>(() => data);
   const [validationErrors, setValidationErrors] = useState({});
   
   const handleCreateNewRow = (values) => {
      tableData.push(values);
      setTableData([...tableData]);
    };

    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
      if (!Object.keys(validationErrors).length) {
        tableData[row.index] = values;        
        setTableData([...tableData]);
        exitEditingMode(); 
        window.location.reload();
      }
    };
  
    const handleCancelRowEdits = () => {
      setValidationErrors({});
    };

    const handleDeleteRow =  useCallback(
      (row) => {
        if (
          !confirm(`Tem certeza de que quer excluir ${row.getValue('nome')}?`)
        ) {
          return;
        }
        httpModule
        .delete("DeleteCategory/" + row.getValue('id'));
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
   );
}