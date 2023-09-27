import client from "../api/client"

export const deleteCategory = async (guid: string): Promise<boolean> => {
    const { status } = await client.delete(`DeleteCategory/${guid}`);
    return status === 200
}