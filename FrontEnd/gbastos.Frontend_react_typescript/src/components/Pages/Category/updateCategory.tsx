/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Box,
    CircularProgress,
    TextField,
    Typography,
  } from '@mui/material';
  import {
    FormProvider,
    SubmitHandler,
    useForm,
  } from 'react-hook-form';
  import { object, string, TypeOf } from 'zod';
  import { zodResolver } from '@hookform/resolvers/zod';
import { IUpdateCategoryProp } from '../interfaces/ICategory';
import { updateCategoryFn } from './categoryAPI';
import { pickBy } from 'lodash';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { LoadingButton } from '@mui/lab';

  const updateCategorySchema = object({
    Nome: string(),
  }).partial();
  
  type IUpdateCategory = TypeOf<typeof updateCategorySchema>;
  
  const UpdateCategory: React.FC<IUpdateCategoryProp> = ({ setOpenCategoryModal, category }) => {
    const queryClient = useQueryClient();
    const { isLoading, mutate: updateCategory } = useMutation(
      ({ id, formData }: { id: string; formData: FormData }) =>
        updateCategoryFn({ id, formData }),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['categories']);
          toast.success('Categoria atualizada');
          setOpenCategoryModal(false);
        },        
        onError: (error: any) => {
            setOpenCategoryModal(false);
          if (Array.isArray(error.response.data.error)) {
            error.data.error.forEach((el: any) =>
              toast.error(el.message, {
                position: 'top-right',
              })
            );
          } else {
            toast.error(error.response.data.message, {
              position: 'top-right',
            });
          }
        },
      }
    );
  
    const methods = useForm<IUpdateCategory>({
      resolver: zodResolver(updateCategorySchema),
    });
  
    const {
      formState: { isSubmitting },
    } = methods;
  
    useEffect(() => {
      if (isSubmitting) {
        methods.reset();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitting]);
  
    useEffect(() => {
      if (category) {
        methods.reset({
            Nome: category.Name,
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);
  
    const onSubmitHandler: SubmitHandler<IUpdateCategory> = (values) => {
      const formData = new FormData();
      const filteredFormData = pickBy(
        values,
        (value) => value !== '' && value !== undefined
      );
      const { image, ...otherFormData } = filteredFormData;
      if (image) {
        formData.append('image', image);
      }
      formData.append('data', JSON.stringify(otherFormData));
      updateCategory({ id: category?.Id, formData });
    };
  
    return (
      <Box>
        <Box display='flex' justifyContent='space-between' sx={{ mb: 3 }}>
          <Typography variant='h5' component='h1'>
            Edit Post
          </Typography>
          {isLoading && <CircularProgress size='1rem' color='primary' />}
        </Box>
        <FormProvider {...methods}>
          <Box
            component='form'
            noValidate
            autoComplete='off'
            onSubmit={methods.handleSubmit(onSubmitHandler)}>
            
            <TextField
              label='Nome'
              fullWidth
              sx={{ mb: '1rem' }}
              {...methods.register('Nome')}
            />
            <LoadingButton
              variant='contained'
              fullWidth
              sx={{ py: '0.8rem', mt: 4, backgroundColor: '#2363eb' }}
              type='submit'
              loading={isLoading}
            >
              Edit Post
            </LoadingButton>
          </Box>
        </FormProvider>
      </Box>
    );
  };
  
  export default UpdateCategory;
