import client from "../api/client";
import { ICategory } from "../components/Pages/interfaces/ICategory";

interface Props {
  Guid: string;
  Nome: string;
}

export const upDateCategory = async ({ Nome }: Props): Promise<ICategory> => {
  const { data } = await client.put(`GetCategoryByName/${Nome}`);

  return data;
};
