import React, { useState } from "react";
import "./modal.scss";
import Input from "../input/Input";
import Button from "../button/Button";
import { individualSpendings } from "../table/countFunctions";

const Modal = ({
  setIsFormOpened,
  partners,
  checks,
  setChecks,
  setCheckToEdit,
  defaultValue,
  handleSubmit,
}) => {
  const initialForm = {
    total: "0",
    payer: partners.partner1,
    spendingFirst: "0",
    spendingSecond: "0",
    others: "0",
  };
  const [form, setForm] = useState(defaultValue || initialForm);
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
  };
  function isItEmpty() {
    if (
      form.total.length > 0 &&
      form.spendingFirst.length > 0 &&
      form.spendingSecond.length > 0 &&
      form.others.length > 0
    ) {
      console.log("Не пустой");
      return false;
    } else {
      console.log("Пустой");
      return true;
    }
  }
  function isTotalStartsWithZero() {
    if (form.total[0] === "0") {
      console.log("TOTAL Начинается с нуля");
      return true;
    } else {
      console.log("TOTAL Не начинается с нуля");
      return false;
    }
  }
  function isItStartsWithZero() {
    if (
      (form.spendingFirst[0] === "0" && form.spendingFirst.length > 1) ||
      (form.spendingSecond[0] === "0" && form.spendingSecond.length > 1) ||
      (form.others[0] === "0" && form.others.length > 1)
    ) {
      console.log(
        "Для одного из инпутов или для нескольких: инпут начинается с нуля, хотя он не однозначный"
      );
      return true;
    } else {
      console.log("Все инпуты начинаются с норм цифры");
      return false;
    }
  }
  function isUnappropriateValue(empty, inputsStartsWithZero, totalStartsWithZero) {

    if (empty || inputsStartsWithZero || totalStartsWithZero) {
      return;
    }
    const total = Number(form.total);
    const partner1Spendings = individualSpendings(form.spendingFirst);
    const partner2Spendings = individualSpendings(form.spendingSecond);
    const othersSpendings = individualSpendings(form.others);

    if (total < partner1Spendings + partner2Spendings + othersSpendings) {
      console.log("ваши индивидуальные траты превышают итого в чеке");
      return true;
    } else {
      console.log("траты не превышают итого");
      return false;
    }
  }

  function validateForm() {
    let empty = isItEmpty();
    let inputsStartsWithZero = isItStartsWithZero();
    let totalStartsWithZero = isTotalStartsWithZero();
    let unappropriateValue = isUnappropriateValue(empty, inputsStartsWithZero, totalStartsWithZero);
    if (
      empty ||
      inputsStartsWithZero ||
      totalStartsWithZero ||
      unappropriateValue
    ) {
      return false;
    } else {
      return true;
    }
  }
  const handleAddCheck = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    let now = new Date().toString();
    handleSubmit(form, now);
    setForm(initialForm);
    setIsFormOpened(false);
    setCheckToEdit(null);
  };
  return (
    <div className="modal">
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
            labelDescr="Введите траты исключительно Партнера 1. Формат такой: числа отделяются запятой и пробелом. Нецелые числа пишутся через точку. Пример: 142, 77.2, 61"
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
            labelDescr="Возможно, вы покупали что-то другу по его просьбе, и он уже перевел вам деньги за покупку. Т.е. это что-то не общее для вашей пары, ни индивидуальное каждого партнера, а нечто чужое."
            name="others"
            value={form.others}
            onChange={(e) => handleChange(e)}
          />
          <Button addClass="button_left" onClick={(e) => handleAddCheck(e)}>
            Oкей
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

// правила валидации
// во-первых все поля не должны быть пусты ---V
// во-вторых, в них могут быть только символы-цифры, никаких букв и пр.
// число не может быть вида 0985 -- V, но мб просто 0
// дробные числа пишутся только через .
// допустимо два формата 0.25, 86, 900.987 и 81. Т.е. либо цифры через пробел + запятая, либо одно число
// траты одного из партнеров не могут превышать итого ---V
// траты обоих партнеров вместе не могут превышать итого ---V
