import React, { useState } from "react";
import "./table.scss";
import Button from "../button/Button";
import TableTitles from "./TableTitles";
import {
  individualSpendings,
  countDebtOfTheCheck,
  totalDebt,
} from "./countFunctions";
import { useEffect } from "react";
import TableContent from "./TableContent";

const Table = ({
  partners,
  checks,
  setChecks,
  handleEditCheck,
  handleDeleteCheck,
  handleReset,
}) => {
  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    let size = window.innerWidth;
    setWindowWidth(size);
  }, []);
  let allDebts = 0;

  return (
    <div className="table">
      <Button addClass="table__reset" onClick={(e) => handleReset(e)}>
        Очистить таблицу
      </Button>
      <div className="table__main">
        {windowWidth >= 600 && <TableTitles partners={partners} />}

        <>
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

            return (
              <div className="table__check" key={check.id}>
                {windowWidth <= 600 ? (
                  <>
                    <TableTitles partners={partners} />
                    <div className="table__checkWrap">
                      <TableContent
                        handleDeleteCheck={handleDeleteCheck}
                        idx={idx}
                        handleEditCheck={handleEditCheck}
                        check={check}
                        partner1Spendings={partner1Spendings}
                        partner2Spendings={partner2Spendings}
                        othersSpendings={othersSpendings}
                        debtOfParther1={debtOfParther1}
                        debtOfParther2={debtOfParther2}
                      />
                    </div>
                  </>
                ) : (
                  <TableContent
                    handleDeleteCheck={handleDeleteCheck}
                    idx={idx}
                    handleEditCheck={handleEditCheck}
                    check={check}
                    partner1Spendings={partner1Spendings}
                    partner2Spendings={partner2Spendings}
                    othersSpendings={othersSpendings}
                    debtOfParther1={debtOfParther1}
                    debtOfParther2={debtOfParther2}
                  />
                )}
              </div>
            );
          })}
        </>
      </div>
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
  );
};

export default Table;
