import React from "react";
import "./partners.scss";
import Button from "../button/Button";

const Partners = () => {
  return (
    <section className="partners section">
      <h3 className="sectionSubtitle partners__title">Имена партнеров</h3>
      <div className="partners__content">
        <form className="partners__form">
            <p className="partners__namePartner">Имя: Партнер 1</p>
            <p className="partners__namePartner">Имя: Партнер 2</p>
          {/* <input
            type="text"
            className="partners__input"
            placeholder="Партнер 1"
          />
          <input
            type="text"
            className="partners__input"
            placeholder="Партнер 2"
          /> */}
          
          {/* <button className="partners__btn">
            <p  className="partners__btn-text">Редактировать</p>
          </button> */}
          <Button addClass='partners__btnn'>Редактировать</Button>
          
        </form>
        <div className="partners__explan">
          <p className="mainText partners__text-explan">
            По дефолту имена: Партнер 1 и Партнер2. <br />
            Вы можете поменять их перед внесением чеков.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
