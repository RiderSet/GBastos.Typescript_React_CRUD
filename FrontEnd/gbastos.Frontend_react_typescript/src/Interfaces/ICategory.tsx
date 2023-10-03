export interface ICategory {
    Guid: string;
    Name: string;
 }

 export interface ICategories {
    categories: ICategory[];
  }

  export interface ICreateCategoryDto {
     Name: string;
  }

  export interface ICategoriesGridProps {
     data: ICategory[];
  }
