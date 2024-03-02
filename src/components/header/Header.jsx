import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <section className="header section">
      <h1 className="header__title">Калькулятор раздельного бюджета</h1>
      <h2 className="header__subtitle">
        Не порть отношения вопросом, кто будет считать чеки. <br/>Пусть ими займется
        программа.
      </h2>
    </section>
  );
};

export default Header;
