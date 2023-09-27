//import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategoriesList } from "./components/Pages/Category/categoriesList";
import { CreateCategory } from "./components/Pages/Category/createCategory";
import { UpdateCategory } from "./components/Pages/Category/updateCategory";
import { DeleteCategory } from "./components/Pages/Category/deleteCategory";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./global.scss";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/categoriesList" element={<CategoriesList />}></Route>
      <Route path="/createCategory" element={<CreateCategory />}></Route>
      <Route path="/updateCategory" element={<UpdateCategory />}></Route>
      <Route path="/deleteCategory" element={<DeleteCategory />}></Route>
    </Routes>
  </BrowserRouter>
);
