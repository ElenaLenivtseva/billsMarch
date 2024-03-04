import React, { useState } from "react";
import "./modal.scss";
import Input from "../input/Input";
import Button from "../button/Button";

const Modal = () => {
  const initialForm = {
    total: "0",
    payer: "Partner1",
    spendingFirst: "0",
    spendingSecond: "0",
    others: "0",
  }
  const [form, setForm] = useState(initialForm);
  const handleChange =(e)=> {
    const name = e.target.name;
    setForm({
      ...form,
      [name]: e.target.value,
    })
  }
  const resetForm=(e)=>{
    e.preventDefault()
    setForm(initialForm)
  }
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__actions">
          <p className="modal__icon modal__reset" onClick={(e)=>resetForm(e)}>↺</p>
          <p className="modal__icon modal__close">🗙</p>
        </div>
        <form className="modal__form">
          <Input
            placeholder="0"
            labelTitle="ИТОГО"
            labelDescr="Введите “Итого” с чека"
            name="total"
            value={form.total}
            onChange = {(e)=>handleChange(e)}
          />
          <Input
            placeholder="0"
            labelTitle="КТО ПЛАТИЛ"
            labelDescr="Можете проверить это по номеру карты на чеке."
            name="payer"
            value={form.payer}
            onChange = {(e)=>handleChange(e)}
          />
          <Input
            placeholder="0"
            labelTitle="ТРАТЫ ПАРТНЕРА 1"
            labelDescr="Введите траты исключительно Партнера 1. Формат такой: числа отделяются запятой и пробелом. Нецелые числа пишутся через точку. Пример: 142, 77.2, 61"
            name="spendingFirst"
            value={form.spendingFirst}
            onChange = {(e)=>handleChange(e)}
          />
          <Input
            placeholder="0"
            labelTitle="ТРАТЫ ПАРТНЕРА 2"
            labelDescr="То же самое, только для Партнера 2."
            name="spendingSecond"
            value={form.spendingSecond}
            onChange = {(e)=>handleChange(e)}
          />
          <Input
            placeholder="0"
            labelTitle="ДРУГОЕ"
            labelDescr="Возможно, вы покупали что-то другу по его просьбе, и он уже перевел вам деньги за покупку. Т.е. это что-то не общее для вашей пары, ни индивидуальное каждого партнера, а нечто чужое."
            name="others"
            value={form.others}
            onChange = {(e)=>handleChange(e)}
          />
          <Button addClass="button_left">Oкей</Button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
