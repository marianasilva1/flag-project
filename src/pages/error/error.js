import Header from "../../component/header/header";
import { useScroll } from "../../hook/MenuScrollHook";
import errorSvg from "../../svg/404Error.svg";

import "./error.scss";

function ErrorPage() {
  const { scroll } = useScroll();

  return (
    <>
      <Header showMenu={scroll} />
      <main className="main error">
        <img
          className="error__svg"
          alt="página não encontrada"
          src={errorSvg}
        ></img>
        <a
          className="storyset__link link"
          target="_blank"
          rel="noreferrer"
          href="https://storyset.com/people"
        >
          People illustrations by Storyset
        </a>
      </main>
    </>
  );
}

export default ErrorPage;
