import React, { useState } from "react";
import "./partners.scss";
import Button from "../button/Button";

const Partners = ({partners, setPartners}) => {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsEditing(!isEditing);
  }
  return (
    <section className="partners section">
      <h3 className="sectionSubtitle partners__title">Имена партнеров</h3>
      <div className="partners__content">
        <form className="partners__form">
          {isEditing ? (
            <>
              <input
                type="text"
                className="partners__input"
                placeholder="Партнер 1"
                value={partners.partner1}
                onChange={(e) =>
                  setPartners({ ...partners, partner1: e.target.value })
                }
              />
              <input
                type="text"
                className="partners__input"
                placeholder="Партнер 2"
                value={partners.partner2}
                onChange={(e) =>
                  setPartners({ ...partners, partner2: e.target.value })
                }
              />
            </>
          ) : (
            <>
              <p className="partners__namePartner">Имя: {partners.partner1}</p>
              <p className="partners__namePartner">Имя: {partners.partner2}</p>
            </>
          )}
          <Button addClass="partners__btn" onClick={(e) => handleClick(e)}>
            {isEditing ? "Сохранить" : "Редактировать"}
          </Button>
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
