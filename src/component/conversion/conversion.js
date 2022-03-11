import { useState } from "react";
import "./conversion.scss";

function Conversion() {
  const [convFrom, setConvFrom] = useState("un");
  const [convTo, setConvTo] = useState("un");
  const [number, setNumber] = useState(1);
  const [ansNumber, setAnsNumber] = useState(0);
  const [ing, setIng] = useState("sugar");
  const [errorMessage, setErrorMessage] = useState("");
  const [density, setdensity] = useState(0.7);
  const [info, setInfo] = useState(false);

  function calculate(e) {
    e.preventDefault();
    if (number === "") {
      setErrorMessage("colocar um número");
    } else if (convFrom === "un" || convTo === "un") {
      setErrorMessage("selecione unidades de: para:");
    } else {
      if (convFrom === convTo) {
        setAnsNumber(number);
        setErrorMessage("");
      } else if (convFrom === "gr" && convTo === "kg") {
        setAnsNumber(number * 0.001);
        setInfo(false);
        setErrorMessage("");
      } else if (convFrom === "gr" && convTo === "oz") {
        setAnsNumber((number * 0.0352739619).toFixed(2));
        setInfo(false);
        setErrorMessage("");
      } else if (convFrom === "gr" && convTo === "tbsp") {
        setAnsNumber((number / (14.786765 * density)).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "gr" && convTo === "tsp") {
        setAnsNumber((number / (4.928922 * density)).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "gr" && convTo === "cup") {
        setAnsNumber((number / (236.588236 * density)).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "kg" && convTo === "gr") {
        setAnsNumber(number * 1000);
        setInfo(false);
        setErrorMessage("");
      } else if (convFrom === "kg" && convTo === "oz") {
        setAnsNumber((number * 35.2739619).toFixed(2));
        setErrorMessage("");
        setInfo(false);
      } else if (convFrom === "kg" && convTo === "tbsp") {
        setAnsNumber(((number * 67.628045) / density).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "kg" && convTo === "tsp") {
        setAnsNumber(((number * 202.884136) / density).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "kg" && convTo === "cup") {
        setAnsNumber(((number * 4.226753) / density).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "oz" && convTo === "gr") {
        setAnsNumber((number * 28.3495231).toFixed(2));
        setInfo(false);
        setErrorMessage("");
      } else if (convFrom === "oz" && convTo === "kg") {
        setAnsNumber((number * 0.0283495231).toFixed(2));
        setInfo(false);
        setErrorMessage("");
      } else if (convFrom === "oz" && convTo === "tbsp") {
        setAnsNumber(((number * 1.917223) / density).toFixed(2));
        setInfo(true);
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "oz" && convTo === "tsp") {
        setAnsNumber(((number * 5.751669) / density).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "oz" && convTo === "cup") {
        setAnsNumber((number / 8).toFixed(2));
        setInfo(false);
        setErrorMessage("");
      } else if (convFrom === "tbsp" && convTo === "gr") {
        setAnsNumber((number * 14.786765 * density).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "tbsp" && convTo === "kg") {
        setAnsNumber(((number * density) / 67.628045).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "tbsp" && convTo === "oz") {
        setAnsNumber(((number * density) / 1.917223).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "tbsp" && convTo === "tsp") {
        setAnsNumber((number * 3).toFixed(2));
        setInfo(false);
        setErrorMessage("");
      } else if (convFrom === "tbsp" && convTo === "cup") {
        setAnsNumber((number / 16).toFixed(2));
        setInfo(false);
        setErrorMessage("");
      } else if (convFrom === "tsp" && convTo === "gr") {
        setAnsNumber((number * 4.92892 * density).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "tsp" && convTo === "kg") {
        setAnsNumber(((number * density) / 202.884136).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "tsp" && convTo === "oz") {
        setAnsNumber(((number * density) / 5.751669).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "tsp" && convTo === "tbsp") {
        setAnsNumber((number / 0.333333).toFixed(2));
        setInfo(false);
        setErrorMessage("");
      } else if (convFrom === "tsp" && convTo === "cup") {
        setAnsNumber((number / 48).toFixed(2));
        setInfo(false);
        setErrorMessage("");
      } else if (convFrom === "cup" && convTo === "gr") {
        setAnsNumber((number * 236.588236 * density).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "cup" && convTo === "kg") {
        setAnsNumber(((number * density) / 4.226753).toFixed(2));
        setInfo(true);
        setErrorMessage("");
      } else if (convFrom === "cup" && convTo === "oz") {
        setAnsNumber((number * 8).toFixed(2));
        setInfo(false);
        setErrorMessage("");
      } else if (convFrom === "cup" && convTo === "tbsp") {
        setAnsNumber((number * 16).toFixed(2));
        setInfo(false);
        setErrorMessage("");
      } else if (convFrom === "cup" && convTo === "tsp") {
        setAnsNumber((number * 48).toFixed(2));
        setInfo(false);
        setErrorMessage("");
      } else {
        setErrorMessage("ainda nao foi feito");
      }
    }
  }
  const ingredientChange = (e) => {
    setIng(e.target.value);
    if (ing === "water") {
      setdensity(1);
    } else if (ing === "flour") {
      setdensity(0.529);
    } else {
      setdensity(0.7);
    }
  };
  return (
    <div id="conversion" className="conversion">
      <form className="conversion__form">
        <label className="conversion__label" htmlFor="ingr">
          Ingrediente:
        </label>
        <select
          defaultValue={ing}
          className="conversion__ingr"
          name="ingr"
          id="ingr"
          onChange={ingredientChange}
        >
          <option value="sugar">Açucar</option>
          <option value="flour">Farinha</option>
          <option value="water">Água</option>
        </select>
        <label className="conversion__label" htmlFor="from">
          De:
        </label>
        <div className="conversion__value">
          <input
            className="conversion__input"
            type="number"
            id="from"
            min="0"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          <select
            defaultValue={convFrom}
            className="conversion__select"
            name="from"
            required
            onChange={(e) => setConvFrom(e.target.value)}
          >
            <option value="un" disabled>
              Unidade de medida
            </option>
            <option value="gr">Grama(gr)</option>
            <option value="kg">Quilograma(kg)</option>
            <option value="oz">Ounces (oz)</option>
            <option value="tbsp">Colher(es) de sopa (tbsp)</option>
            <option value="tsp">Colher(es) de chá (tsp)</option>
            <option value="cup">Copo(s) americano (cup)</option>
          </select>
        </div>
        <label className="conversion__label" htmlFor="to">
          Para:
        </label>
        <div className="conversion__value">
          <input
            className="conversion__input"
            type="number"
            id="to"
            readOnly
            value={ansNumber}
          ></input>
          <select
            defaultValue={convTo}
            className="conversion__select"
            name="to"
            onChange={(e) => setConvTo(e.target.value)}
            required
          >
            <option value="un" disabled>
              Unidade de medida
            </option>
            <option value="gr">Grama(gr)</option>
            <option value="kg">Quilograma(kg)</option>
            <option value="oz">Ounces (oz)</option>
            <option value="tbsp">Colher(es) de sopa (tbsp)</option>
            <option value="tsp">Colher(es) de chá (tsp)</option>
            <option value="cup">Copo(s) americano (cup)</option>
          </select>
        </div>
        <p className="conversion__error conversion__error--show">
          {errorMessage}
        </p>
        {info ? (
          <p className="conversion__info">
            Conversão pode variar conforme o ingrediente que for selecionado
          </p>
        ) : (
          <></>
        )}
        <input
          className="conversion__btn"
          type="submit"
          value="Calcular"
          onClick={calculate}
        />
      </form>
    </div>
  );
}

export default Conversion;
