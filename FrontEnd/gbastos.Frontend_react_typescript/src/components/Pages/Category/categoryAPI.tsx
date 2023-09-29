import httpModule from "../../../api/client";
import { ICategories, ICategory } from "../interfaces/ICategory";

export const getAllCategoriesFn = async () => {
  const response = await httpModule.get<ICategories>(`GetCategories`);
  return response.data;
};

export const getCategoryFn = async (id: string) => {
  const response = await httpModule.get<ICategory>(`GetByGuid/${id}`);
  return response.data;
};

export const createCategoryFn = async (formData: FormData) => {
  const response = await httpModule.post<ICategories>(`GetCategories`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateCategoryFn = async ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) => {
  const response = await httpModule.patch<ICategory>(`UpdateCategory/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const deleteCategoryFn = async (id: string) => {
  const response = await httpModule.delete<ICategory>(`DeleteCategory/${id}`);
  return response.data;
};