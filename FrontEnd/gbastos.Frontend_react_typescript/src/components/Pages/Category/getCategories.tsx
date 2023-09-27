import { useState, useEffect } from 'react';
//import { getCategories } from '../utils/getCategories';
import axios from 'axios';
import { ICategory } from '../interfaces/ICategory';

export const GetCategories = () => {
    const [categories, setCategories] = useState<ICategory[]>([])

    /*
    useEffect(() => {
        getCategories().then((data) => setCategories(data));
      }, []);
    */
    
      useEffect(() => {
        axios.get("http://localhost:5238/api/GetCategories")
          .then((res) => {
            const { data } = res.data
            setCategories(data)
          })
      }, []);

      return (
        <>
      <div>
        <div>
            <h3>Categories Management</h3>
            <p><code>Isto é uma avaliação</code></p>
        </div>
      <table>
          <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Ações</th>
          </tr>
          {
         categories.map(function(item)  
            {
               return (

                   <tr>
                       <td>{item.Guid}</td> 
                       <td>{item.Name}</td>
                       <td>{}
                        
                       </td>
                   </tr>

               )
            }
         )}
      </table>
  </div>
  </>
    )
}