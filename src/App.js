import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about/about";
import DessertsPage from "./pages/desserts/dessert";
import ErrorPage from "./pages/error/error";
import HomePage from "./pages/home/home";
import RecipePage from "./pages/recipe/recipe";
import TipsPage from "./pages/tips/tips";
import recipesData from "./services/recipesData";
import StartersPage from "./pages/starters/starters";
import MainMealPage from "./pages/mainMeal/mainMeal";
import ScrollToTop from "./hook/ScrollToTop";
import { createContext, useState } from "react";
import ConstructionPage from "./pages/construction/construction";

export const SearchBarContext = createContext("");

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SearchBarContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/sobremesas" element={<DessertsPage />} />
          <Route path="/dicas" element={<TipsPage />} />
          <Route path="/entradas" element={<StartersPage />} />
          <Route path="/pratoprincipal" element={<MainMealPage />} />
          <Route path="/construction" element={<ConstructionPage />} />
          {recipesData.map((obj) => {
            return (
              <Route
                key={obj.id}
                path={obj.path}
                element={<RecipePage obj={obj} />}
              />
            );
          })}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </SearchBarContext.Provider>
    </BrowserRouter>
  );
}

export default App;
