import client from "../api/client";
import { ICategory } from "../components/Pages/interfaces/ICategory";
/*
interface Props {
  Id: string;
  Nome: string;
}
*/
export const upDateCategory = async (Id: string): Promise<ICategory> => {
  const { data } = await client.put(`UpdateCategory/${Id}`);

  return data;
};
