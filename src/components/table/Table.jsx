import React from "react";
import "./table.scss";
import Button from "../button/Button";

const Table = () => {
  return (
    <div className="table">
      <Button addClass="table__reset">Очистить таблицу</Button>
      <div className="table__main">
        <div className="table__titles">
          <div className="table__title table__titleNum">№ чека</div>
          <div className="table__title">итого</div>
          <div className="table__title">кто платил</div>
          <div className="table__title">
            траты <br />
            Партнера 1
          </div>
          <div className="table__title">
            траты <br />
            Партнера 2
          </div>
          <div className="table__title">другое</div>
          <div className="table__title">
            долг <br />
            Партнера 1
          </div>
          <div className="table__title">
            долг <br />
            Партнера 2
          </div>
        </div>
        <div className="table__check">
          <div className="table__checkTitle">
            <div className="table__checkActions">
              <button className="table__btn table__checkRemove">удалить</button>
              <button className="table__btn table__checkEdit">отред.</button>
            </div>
            <p className="table__checkNumber">Чек 1</p>
          </div>
          <div className="table__checkTotal">
            <p className="table__checkInfo">1000</p>
          </div>
          <div className="table__checkPayer">
            <p className="table__checkInfo">Партнер 1</p>
          </div>
          <div className="table__checkSpendFirst">
            <p className="table__checkInfo">200</p>
          </div>
          <div className="table__checkSpendSecond">
            <p className="table__checkInfo">300</p>
          </div>
          <div className="table__checkSpendOther">
            <p className="table__checkInfo">0</p>
          </div>
          <div className="table__checkDebtFirst">
            <p className="table__checkInfo">не должен</p>
          </div>
          <div className="table__checkDebtSecond">
            <p className="table__checkInfo">550</p>
          </div>
        </div>
        <div className="table__check">
          <div className="table__checkTitle">
            <div className="table__checkActions">
              <button className="table__btn table__checkRemove">удалить</button>
              <button className="table__btn table__checkEdit">отред.</button>
            </div>
            <p className="table__checkNumber">Чек 1</p>
          </div>
          <div className="table__checkTotal">
            <p className="table__checkInfo">1000</p>
          </div>
          <div className="table__checkPayer">
            <p className="table__checkInfo">Партнер 1</p>
          </div>
          <div className="table__checkSpendFirst">
            <p className="table__checkInfo">200</p>
          </div>
          <div className="table__checkSpendSecond">
            <p className="table__checkInfo">300</p>
          </div>
          <div className="table__checkSpendOther">
            <p className="table__checkInfo">0</p>
          </div>
          <div className="table__checkDebtFirst">
            <p className="table__checkInfo">не должен</p>
          </div>
          <div className="table__checkDebtSecond">
            <p className="table__checkInfo">550</p>
          </div>
        </div>

        <div className="table__total">
          <p className="table__total-text">
            Долг <span className="table__total-bold">Партнера 2</span>{" "}
            составляет: <span className="table__total-bold">1750</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Table;
