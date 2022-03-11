import "./edamRecipeCard.scss";

function EdamRecipeCard({ obj }) {
  return (
    <a
      className="recipe-card__link"
      target="_blank"
      rel="noreferrer"
      href={obj["recipe"].url}
    >
      <img
        className="recipe-card__img"
        src={obj["recipe"].image}
        alt="imagem do produto indicado no título"
      />
      <div className="recipe-card__text">
        <h3 className="recipe-card__title">{obj["recipe"].label}</h3>
        <p className="recipe-card__time">
          <span className="material-icons-outlined">schedule</span>
          {obj["recipe"].totalTime} min
        </p>
      </div>
    </a>
  );
}

export default EdamRecipeCard;
