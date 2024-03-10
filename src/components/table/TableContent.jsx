import React from "react";

const TableContent = ({
  handleDeleteCheck,
  idx,
  handleEditCheck,
  check,
  partner1Spendings,
  partner2Spendings,
  othersSpendings,
  debtOfParther1,
  debtOfParther2
}) => {
  return (
    <>
      <div className="table__checkTitle">
        <div className="table__checkActions">
          <button
            className="table__btn table__checkRemove"
            onClick={(e) => {
              e.preventDefault();
              handleDeleteCheck(idx);
            }}
          >
            удалить
          </button>
          <button
            className="table__btn table__checkEdit"
            onClick={() => handleEditCheck(idx)}
          >
            отред.
          </button>
        </div>
        <p className="table__checkNumber">Чек {idx + 1}</p>
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
    </>
  );
};

export default TableContent;
