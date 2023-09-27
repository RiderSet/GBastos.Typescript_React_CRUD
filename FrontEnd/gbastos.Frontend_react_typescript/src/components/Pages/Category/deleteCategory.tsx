import { useEffect, useState } from "react";
import { ICategory } from "../interfaces/ICategory";
import { getCategories } from "../../../utils/getCategories";
import { deleteCategory } from "../../../utils/deleteCategory";

export const DeleteCategory = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  const handleDelete = async (guid: string) => {
    const isSuccess = await deleteCategory(guid);
    if (isSuccess)
      setCategories((prev) =>
        prev.filter((category) => category.Guid !== guid)
      );
  };

  return (
    <>
      <h1>Excluir Categoria 👇</h1> <br />
      <h2>Clique!</h2>
      <div className="grid">
        {categories.map((category) => (
          <div
            className="card"
            key={category.Guid}
            onClick={() => handleDelete(category.Guid)}
          >
            <p>
              Guid: <span>{category.Guid}</span>
            </p>
            <p>
              Name: <span>{category.Name}</span>
            </p>
          <div>
              <input type="button" value="Delete" />
          </div>  
          </div>
        ))}
      </div>
    </>
  );
};
