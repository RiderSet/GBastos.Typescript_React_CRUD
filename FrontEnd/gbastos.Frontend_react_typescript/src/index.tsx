import ReactDOM from "react-dom/client";
import ThemeContextProvider from "./context/themeContext.tsx";
import App from "./App.tsx";
import "./global.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
  </ThemeContextProvider>
);
