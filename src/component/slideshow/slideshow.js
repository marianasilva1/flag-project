import { useState } from "react";
import dataSlider from "./dataSlider";
import "./slideshow.scss";

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };
  const moveDot = index => {
    setSlideIndex(index)
}
  return (
    <div className="slideshow">
      <div className="slideshow__wrapper">
        {dataSlider.map((obj) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === obj.id 
                  ? "slideshow__item slideshow__item--active"
                  : "slideshow__item"
              }
            >
              <a href={obj.path} className="slideshow__link">
                <img
                  className="slideshow__img"
                  src={process.env.PUBLIC_URL + `/img/img${obj.id}.jpg`}
                  alt={obj.alt}
                />
                <div className="slideshow__content">
                  <h2 className="slideshow__title container">{obj.title}</h2>
                </div>
              </a>
            </div>
          );
        })}
        <span
          className="material-icons-outlined slideshow__arrowleft"
          onClick={prevSlide}
        >
          navigate_before
        </span>
        <span
          className="material-icons-outlined slideshow__arrowright"
          onClick={nextSlide}
        >
          navigate_next
        </span>

        <ul className="slideshow__dots">
        {dataSlider.map((obj) => (
                    <li key={obj.id}
                    onClick={() => moveDot(obj.id )}
                    className={slideIndex === obj.id ? "slideshow__dot slideshow__dot--active" : "slideshow__dot "}
                    ></li>
                ))}  
        </ul>
      </div>
    </div>
  );
}

export default Slideshow;