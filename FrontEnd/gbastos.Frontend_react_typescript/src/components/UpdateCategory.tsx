import { useState, useEffect } from 'react';
import { ICategory } from '../interfaces/ICategory';
import { upDateCategory } from '../utils/upDateCategory';
import { CreateCategory } from './CreateCategory';


export const UpdateCategory = () => {

    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(() => {
        CreateCategory().then(data => setCategories(data))
    }, [])

    const handleUpdate = async (guid: string) => {

        const Guid = `adsf4a65sd4f65a4`
        const Nome = `Title updated`

        const postUpdated = await upDateCategory({ Guid, Nome })

        setCategories(prev => ([
            postUpdated,
            ...prev.filter(post => post.Guid !== guid),
        ]))
    }

    return (
        <div>
            <h1>Atualizar Categoria 👇</h1><br />
            <h2>Clique!</h2>
            <div className='grid'>
                {
                    categories.map(post => (
                        <div className='card' key={post.Guid} onClick={() => handleUpdate(post.Guid)}>
                            <p>Nome: <span>{post.Name}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}