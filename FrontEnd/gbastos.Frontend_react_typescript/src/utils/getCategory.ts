import { ICategory } from "../components/Pages/interfaces/ICategory";
import client from "../api/client";

export const getCategory = async (guid: string): Promise<ICategory> => {
  const { data } = await client.get<ICategory>("GetByGuid?" + guid);
  return data;
};
