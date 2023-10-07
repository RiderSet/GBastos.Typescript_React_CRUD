import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";
import { useState } from "react";
import httpModule from "../../crosscutting/api/client";
import { ICreateCategoryDto } from "../../Interfaces/ICategory";

export const CreateNewCategoryModal = ({ open, columns, onClose, onSubmit }) => {
    const [category, setCategory] = useState<ICreateCategoryDto>();
    const [values, setValues] = useState(() =>
      columns.reduce((acc, column) => {
        acc[column.accessorKey ?? ''] = '';
        return acc;
      }, {}),
    );

    const handleSubmit = () => {
      httpModule
      .post("AddCategory", category)
      onSubmit(values);
      window.location.reload();
      onClose();
    };

    return (
      <Dialog open={open}>
        <DialogTitle textAlign="center">NOVA CATEGORIA</DialogTitle>
        <DialogContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <Stack
              sx={{
                width: '100%',
                minWidth: { xs: '300px', sm: '360px', md: '400px' },
                gap: '1.5rem',
              }}
            >
              {columns.map((column) => (
                <TextField
                  key={column.accessorKey}
                  label={column.header}
                  name={column.accessorKey}
                  onChange={(e) =>
                    setCategory({ ...values, [e.target.name]: e.target.value })
                  }
                />
              ))}
            </Stack>
          </form>
        </DialogContent>
        <DialogActions sx={{ p: '1.25rem' }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button color="secondary"  onClick={handleSubmit} variant="contained">CRIAR</Button>
        </DialogActions>
      </Dialog>
    );
  };