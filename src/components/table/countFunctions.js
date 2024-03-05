export function individualSpendings(partnerSpend) {
  const initialValue = 0;
  const onlyPartnerArray = partnerSpend.split(", ");

  onlyPartnerArray.forEach((element) => {
    return Number(element);
  });

  const onlyPartnerCount = onlyPartnerArray.reduce(
    (accumulator, currentValue) => accumulator + +currentValue,
    initialValue
  );
  return onlyPartnerCount;
}
export function countDebtOfTheCheck(
  total,
  others,
  onlyPartner1,
  onlyPartner2,
  payer,
  partner1Name
) {
  const common = (total - others - onlyPartner1 - onlyPartner2) / 2;
  let partner1Debt;
  let partner2Debt;
  console.log(payer, partner1Name);
  if (payer === partner1Name) {
    partner1Debt = "не должен";
    partner2Debt = common + onlyPartner2;
  } else {
    partner1Debt = common + onlyPartner1;
    partner2Debt = "не должен";
  }
  return [partner1Debt, partner2Debt];
}

export function totalDebt(allDebts, partner1Debt, partner2Debt) {
  let allDebtsCount = allDebts;
  if (partner1Debt === "не должен") {
    allDebtsCount = allDebtsCount - partner2Debt;
  } else {
    allDebtsCount = allDebtsCount + partner1Debt;
  }
  console.log(allDebtsCount);
  return allDebtsCount;
}
