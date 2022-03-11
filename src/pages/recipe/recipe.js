import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./recipe.scss";

function RecipePage({ obj }) {
  const [clearAll, setClearAll] = useState(false);
  const title = obj.title;
  const recipe = JSON.parse(localStorage.getItem(title)) || [];
  //??? quando usar const function
  function updateStorage() {
    localStorage.setItem(title, JSON.stringify(recipe));
  }
  function addElement(event) {
    const index = recipe.find((e) => e.id === event.id);
    if (index) {
      index.isActive = event.checked;
    } else {
      recipe.push({
        id: event.id,
        isActive: event.checked,
      });
    }
  }
  const handleClick = (event) => {
    const ingredient = document.getElementById(`${event.target.id}`);
    addElement(event.target);
    if (event.target.checked) {
      ingredient.setAttribute("checked", "");
    } else {
      ingredient.removeAttribute("checked");
    }
    setClearAll(true);
    updateStorage();
  };
  const clearAllButton = () => {
    const input = document.querySelectorAll("input");
    const ingredient = document.querySelectorAll(`[id^="ingredient"]`);
    ingredient.forEach((item) => addElement(item));
    //clear/select all action
    if (clearAll) {
      recipe.map((item) => (item.isActive = false));
      input.forEach((item) => item.removeAttribute("checked"));
      setClearAll(false);
    } else {
      recipe.map((item) => (item.isActive = true));
      input.forEach((item) => item.setAttribute("checked", ""));
      setClearAll(true);
    }

    updateStorage();
  };
  useEffect(() => {
    for (let item of recipe) {
      const ingredient = document.getElementById(`${item.id}`);
      if (item.isActive) {
        ingredient.setAttribute("checked", "");
        //if soeme element is checked show button clear all
        setClearAll(true);
      }
    }
  }, []);
  return (
    <>
      <div className="recipe">
        <div className="recipe__content">
          <div className="recipe__text">
            <h1 className="recipe__title">{obj.title}</h1>
            <div className="recipe__actions">
              <p className="recipe__time">
                <span className="material-icons-outlined">timer</span>
                {obj.time}
              </p>
              <p className="recipe__people">
                <span className="material-icons-outlined">groups</span>8 pessoas
              </p>
            </div>

            <h3 className="recipe__subtitle">Ingredientes</h3>
            <button className="recipe__clear link" onClick={clearAllButton}>
              {clearAll ? "Desmarcar tudo" : "Selecionar Tudo"}
            </button>
            <ul className="recipe__list">
              {obj.ingredientLines.map((elem, index) => {
                return (
                  <li key={index} className="recipe__item">
                    <label htmlFor={"ingredient" + index}>
                      <input
                        type="checkbox"
                        id={"ingredient" + index}
                        onClick={handleClick}
                      />
                      <span className="checkmark"></span>
                      <span className="ingredient">{elem}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
            <h3 className="recipe__subtitle">Modo Preparo</h3>
            <ul className="recipe__steps">
              {obj.stepsLines.map((elem, index) => {
                return (
                  <li key={index} className="recipe__step">
                    <span>{index + 1}</span> {elem}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="recipe__sideimg">
          <div className="recipe__sticky">
            <img
              className="recipe__img"
              src={process.env.PUBLIC_URL + `/img/${obj.id}.jpg`}
              alt="tarte banoffe"
            />
            <Link to="/">
              <span className="material-icons-outlined">cancel</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipePage;
