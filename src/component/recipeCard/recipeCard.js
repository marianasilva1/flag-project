import "./recipeCard.scss";
import { Link } from "react-router-dom";

function RecipeCard({ obj }) {
  return (
    <Link className="recipe-card__link" to={obj.path}>
      <img
        className="recipe-card__img"
        src={process.env.PUBLIC_URL + `/img/${obj.id}.jpg`}
        alt={obj.title}
      />
      <div className="recipe-card__text">
        <h3 className="recipe-card__title">{obj.title}</h3>
        <p className="recipe-card__time">
          <span className="material-icons-outlined">schedule</span>
          {obj.time}
        </p>
      </div>
    </Link>
  );
}

export default RecipeCard;
