import { useContext, useEffect, useState } from "react";
import { SearchBarContext } from "../../App";
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import RecipeCard from "../../component/recipeCard/recipeCard";
import SearchBar from "../../component/searchBar/search";

import { useScroll } from "../../hook/MenuScrollHook";
import recipesData from "../../services/recipesData";
import "./dessert.scss";

function DessertsPage() {
  const { scroll } = useScroll();
  const { searchTerm } = useContext(SearchBarContext);
  const [error, setError] = useState(false);
  const search = recipesData.map((obj) =>
    obj.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //when all the array is false return true and display a message

  useEffect(() => {
    if (search.every((f) => f === false)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [search]);

  return (
    <>
      <Header showMenu={scroll} />
      <main className="main">
        <div className="container">
          <SearchBar />
          <div className="recipe-tile">
            <h2 className="recipe-tile__title">Sobremesas</h2>
            {error ? (
              <p>Não foi encontrada nenhuma receita para sua pesquisa.</p>
            ) : null}
            <div className="recipe-tile__grid">
              {recipesData
                .slice(0)
                .reverse()
                .filter((obj) => {
                  if (searchTerm === "") {
                    return obj;
                  } else {
                    return obj.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase());
                  }
                })
                .map((obj) => {
                  return <RecipeCard key={obj.id} obj={obj} />;
                })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DessertsPage;
