export interface ICategory {
    Id: string;
    Name: string;
 }
 
 export interface ICategoryDTO {
   Nome: string;
}

 export interface ICategories {
    categories: ICategory[];
  }
 
 export interface ICategoriesResponse {
   status: string;
   data: {
     categories: ICategory[];
   };
 }

 export interface IUpdateCategoryProp {
  setOpenCategoryModal: (openCategoryModal: boolean) => void;
  category: ICategory;
}