export interface ICategory {
    Guid: string;
    Nome: string;
 }

 export interface ICategories {
    categories: ICategory[];
  }

  export interface ICreateCategoryDto {
     Nome: string;
  }

  export interface ICategoriesGridProps {
     data: ICategory[];
  }
