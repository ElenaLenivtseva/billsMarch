import React from "react";
import "./tableDescr.scss";
import Button from "../button/Button";
import Modal from "../modal/Modal";

const TableDescr = ({
  setIsFormOpened,
  isFormOpened,
  partners,
  setCheckToEdit,
  checkToEdit,
  checks,
  handleSubmit,
}) => {
  const handleOpenForm = (e) => {
    e.preventDefault();
    setIsFormOpened(true);
  };

  return (
    <section className="tableDescr section">
      <h3 className="sectionSubtitle">Таблица подсчетов</h3>
      {isFormOpened ? (
        <Modal
          setIsFormOpened={setIsFormOpened}
          isFormOpened={isFormOpened}
          partners={partners}
          setCheckToEdit={setCheckToEdit}
          defaultValue={checkToEdit !== null && checks[checkToEdit]}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className="tableDescr__content">
          <div className="tableDescr__top">
            <Button onClick={(e) => handleOpenForm(e)}>Добавить чек</Button>
            <p className="mainText tableDescr__explan">
              После того, как вы введете информацию с чека, <br />
              все данные, в т.ч. кто кому и сколько должен, <br />
              отобразятся в таблице ниже.
            </p>
          </div>
          <div className="tablrDescr__bottom">
            <ul className="tableDescr__list">
              <li className="tableDescr__item">ИТОГО: “итого” из чека</li>
              <li className="tableDescr__item">
                КТО ПЛАТИЛ: имя того партнера, кто оплачивал покупки.
              </li>
              <li className="tableDescr__item">
                ТРАТЫ ПАРТНЕРА: сумма покупок только этого партнера.
              </li>
              <li className="tableDescr__item">
                ДРУГОЕ: возможно, покупали кому-то другому. Ничье.
              </li>
              <li className="tableDescr__item">
                ДОЛГ ПАРТНЕРА: сумма долга перед другим партнером.
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default TableDescr;
