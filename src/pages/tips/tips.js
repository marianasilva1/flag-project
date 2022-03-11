import Conversion from "../../component/conversion/conversion";
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import { useScroll } from "../../hook/MenuScrollHook";
import utenSvg from "../../svg/Baker-uten.svg";

import "./tips.scss";

function TipsPage() {
  const { scroll } = useScroll();

  return (
    <>
      <Header showMenu={scroll} />
      <main className="main">
        <div className="container">
          <h3 id="flour">Tipos de Farinha</h3>
          <div className="table__flour">
            <table>
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Aspecto</th>
                  <th>Aplicação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>45</td>
                  <td>Farinha flor mais branca e refinada</td>
                  <td>Massas de Padaria</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Farinha super fina</td>
                  <td>Bolos e tartes</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Farinha fina</td>
                  <td>Pão branco e pastelaria</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Farinha semi-integral</td>
                  <td>Panificação</td>
                </tr>
                <tr>
                  <td>110</td>
                  <td>Farinha semi-integral</td>
                  <td>Panificação</td>
                </tr>
                <tr>
                  <td>150</td>
                  <td>Farinha integral</td>
                  <td>Panificação</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 id="musthave">6 Essenciais na cozinha</h3>
          <div className="musthave">
            <div className="musthave__img">
              <img src={utenSvg} alt="alguns utensílios de cozinha" />
              <a
                className="storyset__link link"
                target="_blank"
                rel="noreferrer"
                href="https://storyset.com/people"
              >
                People illustrations by Storyset
              </a>
            </div>
            <ol className="musthave__items">
              <li className="musthave__item">Medidores de Cup</li>
              <li className="musthave__item">Medidores de colher</li>
              <li className="musthave__item">
                Utensílios (espátulas, pinça, salazar)
              </li>
              <li className="musthave__item">Mandolina</li>
              <li className="musthave__item">Taças de vidro</li>
              <li className="musthave__item">Coadores de Rede</li>
            </ol>
          </div>
          <h3>Conversor</h3>
          <Conversion />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TipsPage;
