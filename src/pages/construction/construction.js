import Header from "../../component/header/header";
import { useScroll } from "../../hook/MenuScrollHook";
import constrSvg from "../../svg/construction.svg";

import "./construction.scss";

function ConstructionPage() {
  const { scroll } = useScroll();

  return (
    <>
      <Header showMenu={scroll} />
      <main className="main construction">
        <h2 className="construction__title">Em construção!</h2>
        <img
          className="construction__svg"
          src={constrSvg}
          alt="A constriuir está página"
        ></img>
        <a
          className="storyset__link link"
          target="_blank"
          href="https://storyset.com/people"
          rel="noreferrer"
        >
          People illustrations by Storyset
        </a>
      </main>
    </>
  );
}

export default ConstructionPage;
