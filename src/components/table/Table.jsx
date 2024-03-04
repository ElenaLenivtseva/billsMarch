import React, { useState } from "react";
import "./table.scss";
import Button from "../button/Button";
const initialChecks = [
  {
    id: "1",
    total: "500",
    payer: "Партнер 1",
    spendingFirst: "20",
    spendingSecond: "80",
    debtFirst: "не должен",
    debtSecond: "280",
    others: 0,
  },
  {
    id: "2",
    total: "500",
    payer: "Партнер 1",
    spendingFirst: "20",
    spendingSecond: "80",
    debtFirst: "не должен",
    debtSecond: "280",
    others: 0,
  },
  {
    id: "3",
    total: "500",
    payer: "Партнер 1",
    spendingFirst: "20",
    spendingSecond: "80",
    debtFirst: "не должен",
    debtSecond: "280",
    others: 0,
  },
  {
    id: "4",
    total: "500",
    payer: "Партнер 1",
    spendingFirst: "20",
    spendingSecond: "80",
    debtFirst: "не должен",
    debtSecond: "280",
    others: 0,
  },
  {
    id: "5",
    total: "500",
    payer: "Партнер 1",
    spendingFirst: "20",
    spendingSecond: "80",
    debtFirst: "не должен",
    debtSecond: "280",
    others: 0,
  },
];
const Table = ({partners}) => {
  const [checks, setChecks] = useState(initialChecks);
  const handleDeleteCheck = (targetIndex) => {
    setChecks(checks.filter((_, idx) => idx !== targetIndex));
  };
  const handleReset = (e) => {
    e.preventDefault();
    setChecks([]);
  };
  return (
    <div className="table">
      <Button addClass="table__reset" onClick={(e) => handleReset(e)}>
        Очистить таблицу
      </Button>
      <div className="table__main">
        <div className="table__titles">
          <div className="table__title table__titleNum">№ чека</div>
          <div className="table__title">итого</div>
          <div className="table__title">кто платил</div>
          <div className="table__title">
            траты <br />
            {partners.partner1}
          </div>
          <div className="table__title">
            траты <br />
            {partners.partner2}
          </div>
          <div className="table__title">другое</div>
          <div className="table__title">
            долг <br />
            {partners.partner1}
          </div>
          <div className="table__title">
            долг <br />
            {partners.partner2}
          </div>
        </div>
        {checks.map((check, idx) => {
          return (
            <div className="table__check" key={check.id}>
              <div className="table__checkTitle">
                <div className="table__checkActions">
                  <button
                    className="table__btn table__checkRemove"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("что происходит");
                      handleDeleteCheck(idx);
                    }}
                  >
                    удалить
                  </button>
                  <button className="table__btn table__checkEdit">
                    отред.
                  </button>
                </div>
                <p className="table__checkNumber">Чек {check.id}</p>
              </div>
              <div className="table__checkTotal">
                <p className="table__checkInfo">{check.total}</p>
              </div>
              <div className="table__checkPayer">
                <p className="table__checkInfo">{check.payer}</p>
              </div>
              <div className="table__checkSpendFirst">
                <p className="table__checkInfo">{check.spendingFirst}</p>
              </div>
              <div className="table__checkSpendSecond">
                <p className="table__checkInfo">{check.spendingSecond}</p>
              </div>
              <div className="table__checkSpendOther">
                <p className="table__checkInfo">{check.others}</p>
              </div>
              <div className="table__checkDebtFirst">
                <p className="table__checkInfo">{check.debtFirst}</p>
              </div>
              <div className="table__checkDebtSecond">
                <p className="table__checkInfo">{check.debtSecond}</p>
              </div>
            </div>
          );
        })}

        <div className="table__total">
          {checks.length > 0 ? (
            <p className="table__total-text">
              Долг <span className="table__total-bold">{partners.partner1} </span>
              составляет: <span className="table__total-bold">1750</span>{" "}
            </p>
          ) : (
            <p className="table__total-text">
              Добавьте чеки, чтобы увидеть сумму долга
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
