import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "../src/context/themeContext";
import { Routes, Route } from "react-router-dom";
import CustomLinearProgress from "../src/components/customLinearLoader/linearLoader";
import AddCategory from "./pages/categories/AddCategory";

const Home = lazy(() => import("../src/pages/home/homePage"));
const CategoriesList = lazy(() => import("./pages/categories/categoriesList"));

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
            <Route path="/add" element={<AddCategory />}  />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
