export interface ICategory {
    Id: string;
    Name: string;
 }
 
 export interface ICategoryDTO {
   Name: string;
}

 export interface ICategories {
    categories: ICategory[];
  }