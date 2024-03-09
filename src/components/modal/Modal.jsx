import React, { useState } from "react";
import "./modal.scss";
import Input from "../input/Input";
import Button from "../button/Button";

import { validateForm } from "./validateFunctions";
import {motion} from 'framer-motion'

const Modal = ({
  setIsFormOpened,
  isFormOpened,
  partners,
  setCheckToEdit,
  defaultValue,
  handleSubmit,
  variants
}) => {
  const initialForm = {
    total: "0",
    payer: partners.partner1,
    spendingFirst: "0",
    spendingSecond: "0",
    others: "0",
  };
  const [form, setForm] = useState(defaultValue || initialForm);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const name = e.target.name;
    setForm({
      ...form,
      [name]: e.target.value,
    });
  };
  const handleCloseForm = (e) => {
    e.preventDefault();
    setCheckToEdit(null);
    setIsFormOpened(false);

    setForm(initialForm);
  };
  const resetForm = (e) => {
    e.preventDefault();
    setForm(initialForm);
    setError("");
  };

  const handleAddCheck = (e) => {
    e.preventDefault();
    const [resultOfValidation, message] = validateForm(form);
    if (!resultOfValidation) {
      setError(message);
      return;
    }
    let now = new Date().toString();
    handleSubmit(form, now);
    setForm(initialForm);
    setIsFormOpened(false);
    setCheckToEdit(null);
    setError("");
  };
  return (
    <motion.div
      className="modal"
      variants={variants}
      initial={isFormOpened ? "hidden" : "visible"}
      animate={isFormOpened ? "visible" : "hidden"}
    >
      <div className="modal__content">
        <div className="modal__actions">
          <p className="modal__icon modal__reset" onClick={(e) => resetForm(e)}>
            ↺
          </p>
          <p
            className="modal__icon modal__close"
            onClick={(e, form) => handleCloseForm(e, form)}
          >
            🗙
          </p>
        </div>
        <form className="modal__form">
          <Input
            placeholder="0"
            labelTitle="ИТОГО"
            labelDescr="Введите “Итого” с чека"
            name="total"
            value={form.total}
            onChange={(e) => handleChange(e)}
          />
          <Input
            placeholder="0"
            labelTitle="КТО ПЛАТИЛ"
            labelDescr="Можете проверить это по номеру карты на чеке."
            name="payer"
            value={form.payer}
            onChange={(e) => handleChange(e)}
            partners={partners}
          />
          <Input
            placeholder="0"
            labelTitle="ТРАТЫ ПАРТНЕРА 1"
            labelDescr="Введите траты исключительно Партнера 1. Формат такой: числа отделяются пробелом. Нецелые числа пишутся через точку или запятую. Пример: 142 77.2 61"
            name="spendingFirst"
            value={form.spendingFirst}
            onChange={(e) => handleChange(e)}
          />
          <Input
            placeholder="0"
            labelTitle="ТРАТЫ ПАРТНЕРА 2"
            labelDescr="То же самое, только для Партнера 2."
            name="spendingSecond"
            value={form.spendingSecond}
            onChange={(e) => handleChange(e)}
          />
          <Input
            placeholder="0"
            labelTitle="ДРУГОЕ"
            labelDescr="Возможно, вы покупали что-то другу по его просьбе, и он уже перевел вам деньги за покупку. Т.е. это что-то не общее для вашей пары, ни индивидуальное каждого партнера, а нечто чужое. Формат тот же."
            name="others"
            value={form.others}
            onChange={(e) => handleChange(e)}
          />
          <Button addClass='button_left' onClick={(e) => handleAddCheck(e)} error={error}>
            Oкей
          </Button>
          {/* <button onClick={(e) => handleAddCheck(e)} className={error?'error':''}>ok</button> */}
        </form>
        <p className="modal__error">{error}</p>
      </div>
    </motion.div>
  );
};

export default Modal;

// правила валидации
// во-первых все поля не должны быть пусты ---V
// во-вторых, в них могут быть только символы-цифры, никаких букв ---V
// число не может быть вида 0985 -- V, но мб просто 0 ---V
// дробные числа пишутся через .или через , ---V

// допустимо два формата 0.25, 86, 900.987 и 81. Т.е. либо цифры через пробел, либо одно число---V
// траты одного из партнеров не могут превышать итого ---V
// траты обоих партнеров вместе не могут превышать итого ---V

// есть проблема - 0.9 в начале писать нельзя. Но думаю, что с нынешними ценами это баг, который никогда не сработает
