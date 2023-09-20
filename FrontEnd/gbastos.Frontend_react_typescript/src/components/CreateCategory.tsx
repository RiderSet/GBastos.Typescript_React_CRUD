import { useState } from 'react';
import { ICategory } from '../interfaces/ICategory';

export const CreateCategory = () => {

    const [categories] = useState<ICategory[]>([])

    const handleClick = async () => {}

    return (
        <div>
            <h1>Criar nova categoria 👇</h1>
            <button onClick={handleClick}>Adicionar Categoria</button>

            <div className='grid'>
                {
                    categories.map(category => (
                        <div key={category.Guid}>
                            <p>Nome: <span>{category.Name}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}