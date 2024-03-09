import { individualSpendings } from "../table/countFunctions";


function isItEmpty(form) {
  if (
    form.total.length > 0 &&
    form.spendingFirst.length > 0 &&
    form.spendingSecond.length > 0 &&
    form.others.length > 0
  ) {
    return false;
  } else {
    return true;
  }
}

function isTotalStartsWithZero(form) {
  if (form.total[0] === "0") {
    return true;
  } else {
    return false;
  }
}

function isItStartsWithZero(form) {
  if (
    (form.spendingFirst[0] === "0" && form.spendingFirst.length > 1) ||
    (form.spendingSecond[0] === "0" && form.spendingSecond.length > 1) ||
    (form.others[0] === "0" && form.others.length > 1)
  ) {
    return true;
  } else {
    return false;
  }
}

function isTotalLessThanSpends(
  form,
  empty,
  inputsStartsWithZero,
  totalStartsWithZero
) {
  if (empty || inputsStartsWithZero || totalStartsWithZero) {
    return;
  }
  const total = Number(form.total);
  const partner1Spendings = individualSpendings(form.spendingFirst);
  const partner2Spendings = individualSpendings(form.spendingSecond);
  const othersSpendings = individualSpendings(form.others);

  if (total < partner1Spendings + partner2Spendings + othersSpendings) {
    return true;
  } else {
    return false;
  }
}

function isWrongFormat(form) {
  const regExp1 = /^([0-9]+[.,]?[0-9]+[\s]*)+$/gi;
  // рег выражение, которое не пропускает .98,н-р, а также буквы.
  // Проверяет сразу всю строку

  // регулярное выражение, которое допускает строку всего из одного числа, даже если это число 0
  const regExp2 = /^[0-9]+$/gi;

  let arrayWithNeededProps = [];
  

  Object.entries(form).forEach(function ([key, value]) {
    if (key === "payer") {
      return;
    } else arrayWithNeededProps.push(value);
  });

  let result = [];
  for (let i = 0; i < arrayWithNeededProps.length; i++) {
    const element = arrayWithNeededProps[i];
    if (element.match(regExp1) || element.match(regExp2)) {
      result.push(false);
    } else {
      result.push(true);
    }
  }
  if (result.includes(true)) {
    return true;
  } else {
    return false;
  }
}

export function validateForm(form) {
  const empty = isItEmpty(form);
  const inputsStartsWithZero = isItStartsWithZero(form);
  const totalStartsWithZero = isTotalStartsWithZero(form);
  const wrongFormat = isWrongFormat(form);
  const totalLessThanSpends = isTotalLessThanSpends(
    form,
    empty,
    inputsStartsWithZero,
    totalStartsWithZero
  );
  let textError = [];
  if (empty) {
    textError.push('Поля не заполнены. ')
  }
  if (inputsStartsWithZero) {
    textError.push('Многозначное число с нулем в качестве первой цифры. ')
  }
  if (totalStartsWithZero) {
    textError.push('Итого начинается с нуля. ')
  }
  if (wrongFormat) {
    textError.push('Поля не соответствуют формату. ')
  }
  if (totalLessThanSpends) {
    textError.push('Итого меньше, чем траты. ')
  }
  if (
    empty ||
    inputsStartsWithZero ||
    totalStartsWithZero ||
    totalLessThanSpends ||
    wrongFormat
  ) {
    return [false, textError.join('')];
  } else {
    return [true, ''];
  }
}
