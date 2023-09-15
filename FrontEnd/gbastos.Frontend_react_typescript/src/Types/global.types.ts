export interface ICategory {
    Id: string;
    Name: string;
 }
 export interface ICreateCategoryDto {
    id: string;
    name: string;
 }
 export interface IJob {
    id: string;
    name: string;
    categoryId: string;
    categoryName: string;
 }
 export interface ICreateJobDto {
    name: string;
    categoryId: string;
 }