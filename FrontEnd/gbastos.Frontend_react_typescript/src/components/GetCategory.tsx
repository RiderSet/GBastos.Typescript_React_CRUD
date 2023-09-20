import { useState, useEffect } from 'react';
import { ICategory } from '../interfaces/ICategory';
import { getCategories } from '../utils/getCategories';

export const GetCategory = () => {

    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(() => {
        getCategories().then(data => setCategories(data))
    }, [])

    return (
        <>
            <h1>Busca de Categorias 👇</h1><br />
            <h2>Categorias</h2>

            <div className='grid'>
                {
                    categories.map(categoria => (
                        <div key={categoria.Guid}>
                            <p>Title: <span>{categoria.Name}</span></p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}