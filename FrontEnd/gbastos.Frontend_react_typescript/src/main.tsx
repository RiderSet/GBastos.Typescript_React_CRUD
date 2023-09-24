
//import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CategoriesList from "./categoriesList";
import CategoryRead from "./categoryRead";
import UpdateCategory from "./updateCategory";
import CategoryDel from "./categoryDel";
import "bootstrap/dist/css/bootstrap.min.css";
import AddCategory from "./AddCategory";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} ></Route>
      <Route path='/categoriesList' element={<CategoriesList />} ></Route>
      <Route path='/categoryRead' element={<CategoryRead />} ></Route>
      <Route path='/create' element={<AddCategory />} ></Route>
      <Route path='/updateCategory' element={<UpdateCategory />} ></Route>
      <Route path='/deleteCategory' element={<CategoryDel />} ></Route>
    </Routes>
  </BrowserRouter>
);