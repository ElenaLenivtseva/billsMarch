import React, { useState } from "react";
import "./partners.scss";
import Button from "../button/Button";
import { motion, AnimatePresence } from "framer-motion";
const variants = {
  hidden: {
    x: -100,
    opacity: 0,
    zIndex: 0,

    transitionEnd: {
      visibility: "hidden",
      height: 0,
    },
    transition: {
      duration: 0.6,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    zIndex: 2,
    transitionEnd: {
      height: "auto",
      visibility: "visible",
    },
    transition: {
      duration: 0.6,
    },
  },
};
const Partners = ({ partners, setPartners }) => {
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
          <AnimatePresence>
            {isEditing&&<motion.div
              className="partners__anim-block"
              key='inputs'
              variants={variants}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
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
              <Button addClass="partners__btn" onClick={(e) => handleClick(e)}>
                Сохранить
              </Button>
            </motion.div>}
            
            {!isEditing && (
              <motion.div
                className="partners__anim-block"
                variants={variants}
                key='names'
                initial='hidden'
                animate='visible'
                exit='hidden'
              >
                <p className="partners__namePartner">
                  Имя: {partners.partner1}
                </p>
                <p className="partners__namePartner">
                  Имя: {partners.partner2}
                </p>
                <Button
                  addClass="partners__btn"
                  onClick={(e) => handleClick(e)}
                >
                  Редактировать
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
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
