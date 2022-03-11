import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <h2 className="footer__title">
          <a
            href="https://www.instagram.com/cake.a.moment/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </h2>
        <div className="footer__grid">
          <a
            href="https://www.instagram.com/p/CMjkAfYlc40/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__insta"
              src={process.env.PUBLIC_URL + `/img/bolachas.jpg`}
              alt="Bolachas aveia"
            />
          </a>

          <a
            href="https://www.instagram.com/p/CLZx3qJlTsv/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__insta"
              src={process.env.PUBLIC_URL + `/img/banoffe.jpg`}
              alt="Banoffe"
            />
          </a>

          <a
            href="https://www.instagram.com/p/CK1qRtRFMUZ/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__insta"
              src={process.env.PUBLIC_URL + `/img/cookies.jpg`}
              alt="Cookie com recheio de Nutella ou de Kinder Bueno"
            />
          </a>

          <a
            href="https://www.instagram.com/p/CKjojrbFvMA/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__insta"
              src={process.env.PUBLIC_URL + `/img/genoise.jpg`}
              alt="Torta de morangos"
            />
          </a>

          <a
            href="https://www.instagram.com/p/CKRFvZ_lA0_/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__insta"
              src={process.env.PUBLIC_URL + `/img/brownie.jpg`}
              alt="Brownie chocolate"
            />
          </a>

          <a
            href="https://www.instagram.com/p/CJ_sJXBFzNh/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__insta"
              src={process.env.PUBLIC_URL + `/img/tartemaça.jpg`}
              alt="Crumble de maça"
            />
          </a>
        </div>
      </div>
      <div className="container footer__copyright">
        <p className="footer__copy">
          Copyright 2021 &copy; All rights Reserved. Design by{" "}
          <a
            href="https://www.linkedin.com/in/fmariana-silva/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Mariana Silva
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
