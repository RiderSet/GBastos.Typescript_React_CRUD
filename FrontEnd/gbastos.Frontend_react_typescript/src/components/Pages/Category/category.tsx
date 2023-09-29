import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Service from "../../../utils/categoryService";
import { ICategory } from "../interfaces/ICategory";

const Category = () => {

  const { id }= useParams();
  const navigate = useNavigate();
  const initialCategoryState = {
    Id: "",
    Name: ""
  };
  const [currentCategory, setCurrentCategory] = useState<ICategory>(initialCategoryState);
  const [message, setMessage] = useState("");


  const getCategory = (id: string) => {
    Service.get('GetByGuid/' + id)
      .then(response => {
        setCurrentCategory(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getCategory(id);
  }, [id]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentCategory({ ...currentCategory, [name]: value });
  };

  const updateCategory = () => {
    Service.update(currentCategory.Id, currentCategory)
      .then(response => {
        console.log(response.data);
        setMessage("Category updated!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    Service.remove(currentCategory.Id)
      .then(response => {
        console.log(response.data);
        navigate("/categoriesList");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentCategory ? (
        <div className="edit-form">
          <h4>Categoria</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Nome</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentCategory.Name}
                onChange={handleInputChange} 
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
            Excluir
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateCategory}
          >
            Atualizar
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Clique e uma categoria</p>
        </div>
      )}
    </div>
  );
};

export default Category;