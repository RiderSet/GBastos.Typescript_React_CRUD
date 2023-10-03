import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "../src/context/themeContext";
import { Routes, Route } from "react-router-dom";
import CustomLinearProgress from "../src/components/customLinearLoader/linearLoader";
import AddCategory from "./pages/categories/AddCategory";
import EditCategory from "./pages/categories/EditCategory";
import DeleteCategory from "./pages/categories/deleteCategory";

const Home = lazy(() => import("../src/pages/home/homePage"));
const CategoriesList = lazy(() => import("./pages/categories/categories"));

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  const appStyles = darkMode ? "app dark" : "app";

  return (
    <div className={appStyles}>
      <div className="wrapper">
        <Suspense fallback={<CustomLinearProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<CategoriesList />} />
            <Route path="/add" element={<AddCategory />} />
            <Route path="/edit" element={<EditCategory />} />
            <Route path="/delete" element={<DeleteCategory />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
