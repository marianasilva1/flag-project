import { useState } from "react";
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import { useScroll } from "../../hook/MenuScrollHook";
import "./about.scss";

function AboutPage() {
  const [nameValid, setNameValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [subjectValid, setSubjectValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [popUp, setPopUp] = useState(false);
  const { scroll } = useScroll();

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkName = event.target.name.value.trim().length >= 1;
    const checkPhone =
      /^\(?([9]{1})\)?[-. ]?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(
        event.target.phone.value
      );
    const chekEmail = /\S+@\S+\.\S+/.test(event.target.email.value);
    const checkSubj = event.target.ass.value.trim().length >= 1;
    const checkMsg = event.target.msg.value.trim().length >= 1;
    setNameValid(checkName);
    setPhoneValid(checkPhone);
    setEmailValid(chekEmail);
    setSubjectValid(checkSubj);
    setMessageValid(checkMsg);

    if (checkName && checkPhone && chekEmail && checkSubj && checkMsg) {
      setPopUp(true);
      event.target.name.value = "";
      event.target.phone.value = "";
      event.target.email.value = "";
      event.target.ass.value = "";
      event.target.msg.value = "";
    }
  };
  return (
    <>
      <Header showMenu={scroll} />
      <main className="main">
        <div className={`pop-up ${popUp ? "pop-up--show" : ""}`}>
          <div className="pop-up__box">
            <p>Email Enviado</p>
            <span
              className="pop-up__close material-icons-outlined"
              onClick={() => setPopUp(false)}
            >
              close
            </span>
          </div>
        </div>
        <div className="container">
          <div className="about">
            <h2>Sobre</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo
              esse enim, numquam voluptatibus nihil animi voluptas maiores
              mollitia dolor corporis distinctio soluta alias nostrum sint
              temporibus laudantium explicabo minus.
            </p>
            <div className="chronology">
              <div className="chronology__item chronology__item--right chronology__item--entry1">
                <p className="chronology__year chronology__year--right">1993</p>
                <p className="chronology__text">
                  Nascia eu em Vila Nova de Gaia
                </p>
              </div>

              <div className="chronology__item chronology__item--left chronology__item--entry2">
                <p className="chronology__year chronology__year--left">2010</p>
                <p className="chronology__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis expedita et, est nisi illo eos esse rerum vitae
                  incidunt ipsa quo vero deleniti hic nam atque architecto
                  voluptatum! Asperiores, reprehenderit.
                </p>
              </div>
              <div className="chronology__item chronology__item--right chronology__item--entry3">
                <p className="chronology__year chronology__year--right">2011</p>
                <p className="chronology__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi aliquid odio, autem a dolore ea deleniti asperiores
                  magni error optio aperiam, harum atque ex dolorum labore ab
                  placeat? Amet, sunt?
                </p>
                <p className="chronology__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet amet praesentium iure doloribus voluptatibus quo
                  explicabo veritatis cumque blanditiis incidunt recusandae
                  deleniti, quam aliquam nemo fuga esse earum quia! Unde.
                </p>
              </div>
              <div className="chronology__item chronology__item--left chronology__item--entry4">
                <p className="chronology__year chronology__year--left">2015</p>
                <p className="chronology__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="chronology__item chronology__item--right chronology__item--entry5">
                <p className="chronology__year chronology__year--right">2018</p>
                <p className="chronology__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis.
                </p>
              </div>
              <div className="chronology__item chronology__item--left chronology__item--entry6">
                <p className="chronology__year chronology__year--left">2018</p>
                <p className="chronology__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Similique perspiciatis eligendi velit ipsam corporis
                  aspernatur optio suscipit aut neque maiores cumque, architecto
                  at asperiores officiis illum illo. Accusantium, dolores id.
                </p>
              </div>
              <div className="chronology__item chronology__item--right chronology__item--entry7">
                <p className="chronology__year chronology__year--right">2019</p>
                <p className="chronology__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis.
                </p>
              </div>
              <div className="chronology__item chronology__item--left chronology__item--entry8">
                <p className="chronology__year chronology__year--left">2021</p>
                <p className="chronology__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis.
                </p>
              </div>
            </div>
          </div>
          <div className="contact">
            <h2 className="contact__title">Contacto</h2>
            <div className="contact__side">
              <div className="contact__bubble">
                <p className="contact__text">
                  Quer entrar em contacto ? Preencha o seguinte formulário ou
                  envie e-mail para:
                  <a href="mailto:f.marianasilva@gmail.com" className="link">
                    f.marianasilva@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <form className="contact__form" action="" onSubmit={handleSubmit}>
              <div className="contact__container">
                <input
                  type="text"
                  className={`contact__input ${
                    nameValid ? "" : "contact__input--error"
                  }`}
                  id="name"
                  placeholder=" "
                />
                <label htmlFor="name" className="contact__label">
                  Nome
                </label>
                <p className="contact__requirement">
                  *campo não pode estar vazio
                </p>
              </div>
              <div className="contact__container">
                <input
                  type="tel"
                  className={`contact__input ${
                    phoneValid ? "" : "contact__input--error"
                  }`}
                  id="phone"
                  placeholder=" "
                />
                <label htmlFor="phone" className="contact__label">
                  Telefone
                </label>
                <p className="contact__requirement">
                  *número inválido deve começar por 9 e ter 9 digitos
                </p>
              </div>
              <div className="contact__container">
                <input
                  type="text"
                  className={`contact__input ${
                    emailValid ? "" : "contact__input--error"
                  }`}
                  id="email"
                  placeholder=" "
                />
                <label htmlFor="email" className="contact__label">
                  Email
                </label>
                <p className="contact__requirement">*e-mail inválido</p>
              </div>
              <div className="contact__container">
                <input
                  type="text"
                  className={`contact__input ${
                    subjectValid ? "" : "contact__input--error"
                  }`}
                  id="ass"
                  placeholder=" "
                />
                <label htmlFor="ass" className="contact__label">
                  Assunto
                </label>
                <p className="contact__requirement">
                  *campo não pode estar vazio
                </p>
              </div>
              <div className="contact__mensagem contact__container">
                <textarea
                  className={`contact__msgarea contact__input ${
                    messageValid ? "" : "contact__msgarea--error"
                  }  `}
                  name=""
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder=" "
                ></textarea>
                <label htmlFor="msg" className="contact__label">
                  Mensagem
                </label>
                <p className="contact__requirement">
                  *campo não pode estar vazio
                </p>
              </div>
              <input className="contact__submit" type="submit" value="Enviar" />
            </form>
          </div>
          <iframe
            title="Localização"
            className="contact__maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1502.1442884759238!2d-8.613849341754928!3d41.15005401449594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA5JzAwLjIiTiA4wrAzNic0NS45Ilc!5e0!3m2!1spt-PT!2spt!4v1634730432244!5m2!1spt-PT!2spt"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;
