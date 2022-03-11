import "./home.scss";

import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import Slideshow from "../../component/slideshow/slideshow";
import RecipeCard from "../../component/recipeCard/recipeCard";
import recipesData from "../../services/recipesData";
import cuateSvg from "../../svg/Baker-cuate.svg";
import healtySvg from "../../svg/Healthy.svg";
import gingerSvg from "../../svg/Gingerbread.svg";
import { Link } from "react-router-dom";
import { useScroll } from "../../hook/MenuScrollHook";

function HomePage() {
  const { scroll } = useScroll();
  return (
    <>
      <Header showMenu={scroll} />
      <main className="main">
        <Slideshow />
        <div className="container">
          <div className="recipe-tile">
            <h2 className="recipe-tile__title">Mais Recentes</h2>
            <div className="recipe-tile__grid">
              {/* ?? sem o slice(0) nao funciona pensamento fazer isto o id maior vai ser a mais recente nao tinha que estar sempre mudar id */}
              {recipesData
                .slice(0)
                .reverse()
                .slice(0, 3)
                .map((obj) => {
                  return <RecipeCard key={obj.id} obj={obj} />;
                })}
            </div>
          </div>
          <h2 className="recipe-tile__title">Sugestões</h2>
          <div className="suggestions">
            <Link to="/emfamilia" className="suggestions__link">
              <img src={gingerSvg} alt="família a fazer bolos" />
              <p className="suggestions__name">Em Família</p>
            </Link>
            <Link to="/sobremesas" className="suggestions__link">
              <img src={cuateSvg} alt="mulher na pastelaria" />
              <p className="suggestions__name">Doces</p>
            </Link>
            <Link to="/pratoprincipal" className="suggestions__link">
              <img src={healtySvg} alt="mulher a pensar" />
              <p className="suggestions__name">Almoço</p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
