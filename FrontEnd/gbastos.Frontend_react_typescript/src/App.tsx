import { useContext, lazy, Suspense } from "react";
import Navbar from "./components/NavBar/navbar.components";
import { ThemeContext } from "./Context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import CustomLinearProgress from "./components/CustomLinear.progress/CustomLinear.components";

// Imports with Lazy loading
const Home = lazy(() => import("./Pages/Home/Home.Page"));
const Companies = lazy(() => import("./Pages/Categories/Categories"));
const AddCompany = lazy(() => import("./Pages/Categories/AddCategories"));

const App = () => {
   const { darkMode } = useContext(ThemeContext);

   const appStyles = darkMode ? "app dark" : "app";

   return (
      <div className={appStyles}>
         <Navbar />
         <div className="wrapper">
            <Suspense fallback={<CustomLinearProgress />}>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/companies">
                     <Route index element={<Companies />} />
                     <Route path="add" element={<AddCompany />} />
                  </Route>
               </Routes>
            </Suspense>
         </div>
      </div>
   );
};

export default App;