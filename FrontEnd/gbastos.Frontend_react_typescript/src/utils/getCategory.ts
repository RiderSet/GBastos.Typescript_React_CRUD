import { ICategory } from "../interfaces/ICategory"
import client from "../api/client"

export const getPosts = async (guid: string): Promise<ICategory> => {

    const { data } = await client.get<ICategory>('GetByGuid?' + guid)
    return data
}