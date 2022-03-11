import { useContext, useEffect, useState } from "react";
import { useScroll } from "../../hook/MenuScrollHook";
import EdamRecipeCard from "../../component/edamecipeCard/edamRecipeCard";
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import "./mainMeal.scss";
import { SearchBarContext } from "../../App";
import SearchBar from "../../component/searchBar/search";
import Loader from "../../component/loader/loader";

function MainMealPage() {
  const { searchTerm } = useContext(SearchBarContext);
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { scroll } = useScroll();
  const [error, setError] = useState(false);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=all&app_id=${process.env.REACT_APP_ID}&app_key=%20${process.env.REACT_APP_KEY}&mealType=Lunch&dishType=Main%20course`;

  useEffect(() => {
    setIsLoading(true);
    async function fetchRecipe() {
      const response = await fetch(url);
      const result = await response.json();
      setRecipeInfo(result.hits);
      // console.log(result.hits);
      setIsLoading(false);
    }
    fetchRecipe();
  }, [url]);
  //when all the array is false return true and displays a message
  useEffect(() => {
    if (searchTerm !== "") {
      const search = recipeInfo.map((obj) =>
        obj["recipe"].label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (search.every((f) => f === false)) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }, [searchTerm, recipeInfo]);
  return (
    <>
      <Header showMenu={scroll} />
      <main className="main">
        <div className="container">
          <SearchBar />
          <div className="recipe-tile">
            <h2 className="recipe-tile__title">Pratos Principais</h2>
            {error ? (
              <p>Não foi encontrada nenhuma receita para sua pesquisa.</p>
            ) : null}
            {isLoading ? (
              <Loader />
            ) : (
              <div className="recipe-tile__grid">
                {recipeInfo
                  .filter((obj) => {
                    if (searchTerm === "") {
                      return obj;
                    } else {
                      return obj["recipe"].label
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase());
                    }
                  })
                  .map((obj) => (
                    <EdamRecipeCard key={obj["recipe"].label} obj={obj} />
                  ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MainMealPage;
