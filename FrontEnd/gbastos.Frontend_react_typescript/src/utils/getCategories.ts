import { AxiosError } from "axios"
import { ICategory } from '../interfaces/ICategory';
import client from '../api/client';

export const getCategories = async (): Promise<ICategory[]> => {
    try {
        const { data } = await client.get('GetCategories')
        return data
    } catch (error) {
        const err = error as AxiosError
        console.log(err.message)
        console.log(err.name)
        return []
    }
}