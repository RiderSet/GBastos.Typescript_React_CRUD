//import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategoriesList } from "../src/components/Pages/Category/categoriesList";
import { DeleteCategory } from "../src/components/Pages/Category/deleteCategory";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./global.scss";
import "./index.css";
import CategorieAdd from "./components/Pages/Category/CategorieAdd";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/categoriesList" element={<CategoriesList />}></Route>
      <Route path="/createCategory" element={<CategorieAdd />}></Route>
      
      <Route path="/deleteCategory" element={<DeleteCategory />}></Route>
    </Routes>
  </BrowserRouter>
);
