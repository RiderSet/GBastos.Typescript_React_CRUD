import httpModule from "../api/client";
import { ICategory } from "../components/Pages/interfaces/ICategory";

const getAll = () => {
  return httpModule.get("GetCategories");
};

const get = (id: string) => {
  return httpModule.get(`GetByGuid/${id}`);
};

const create = (data: ICategory) => {
  return httpModule.post("AddCategory", data);
};

const update = (id: string, data: ICategory) => {
  return httpModule.put(`UpdateCategory/${id}`, data);
};

const remove = (id: string) => {
  return httpModule.delete(`DeleteCategory/${id}`);
};

const findByName = (nome: string)  => {
  return httpModule.get(`GetCategoryByName/${nome}`);
};

const CategoryService = {
  getAll,
  get,
  create,
  update,
  remove,
  findByName
};

export default CategoryService;