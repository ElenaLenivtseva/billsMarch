import React, { useState } from "react";
import "./table.scss";
import Button from "../button/Button";
import {
  individualSpendings,
  countDebtOfTheCheck,
  totalDebt,
} from "./countFunctions";

const Table = ({ partners, checks, setChecks }) => {
  const handleDeleteCheck = (targetIndex) => {
    setChecks(checks.filter((_, idx) => idx !== targetIndex));
  };
  const handleReset = (e) => {
    e.preventDefault();
    setChecks([]);
  };

  let allDebts = 0;
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
          // Individual spendings
          const partner1Spendings = individualSpendings(check.spendingFirst);
          const partner2Spendings = individualSpendings(check.spendingSecond);
          const othersSpendings = individualSpendings(check.others);

          // debt of check
          const [debtOfParther1, debtOfParther2] = countDebtOfTheCheck(
            check.total,
            othersSpendings,
            partner1Spendings,
            partner2Spendings,
            check.payer,
            partners.partner1
          );
          allDebts = totalDebt(allDebts, debtOfParther1, debtOfParther2);
          console.log(allDebts);

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
                <p className="table__checkNumber">Чек {idx}</p>
              </div>
              <div className="table__checkTotal">
                <p className="table__checkInfo">{check.total}</p>
              </div>
              <div className="table__checkPayer">
                <p className="table__checkInfo">{check.payer}</p>
              </div>
              <div className="table__checkSpendFirst">
                <p className="table__checkInfo">{partner1Spendings}</p>
              </div>
              <div className="table__checkSpendSecond">
                <p className="table__checkInfo">{partner2Spendings}</p>
              </div>
              <div className="table__checkSpendOther">
                <p className="table__checkInfo">{othersSpendings}</p>
              </div>
              <div className="table__checkDebtFirst">
                <p className="table__checkInfo">{debtOfParther1}</p>
              </div>
              <div className="table__checkDebtSecond">
                <p className="table__checkInfo">{debtOfParther2}</p>
              </div>
            </div>
          );
        })}

        <div className="table__total">
          {checks.length > 0 ? (
            <p className="table__total-text">
              Долг{" "}
              <span className="table__total-bold">
                {allDebts < 0 ? partners.partner2 : partners.partner1}{" "}
              </span>{" "}
              составляет:{" "}
              <span className="table__total-bold">{Math.abs(allDebts)}</span>
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
