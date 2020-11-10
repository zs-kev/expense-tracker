const addExpense = (event) => {
  const table = document.querySelector('.table-body');

  let tableRow = table.insertRow(0);
  let cellName = tableRow.insertCell(0);
  let cellDate = tableRow.insertCell(1);
  let cellAmount = tableRow.insertCell(2);

  cellName.innerHTML = EXPENSE_NAME.value;
  cellDate.innerHTML = EXPENSE_DATE.value;
  cellAmount.innerHTML = 'R' + EXPENSE_AMOUNT.value;

  EXPENSE_NAME.value = '';
  EXPENSE_DATE.value = '';
  EXPENSE_AMOUNT.value = '';
};
