import { ICategory } from '../interfaces/ICategory';
import client from '../api/client';

export const createCategory = async (nome: string): Promise<ICategory> => {
    const { data } = await client.post('AddCategory', { nome })
    return data
}