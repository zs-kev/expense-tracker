const checkInputHandler = (event) => {
  if (!EXPENSE_NAME.value && !EXPENSE_DATE.value && !EXPENSE_AMOUNT.value) {
    EXPENSE_NAME.classList.add('noInput');
    EXPENSE_DATE.classList.add('noInput');
    EXPENSE_AMOUNT.classList.add('noInput');
  } else if (!EXPENSE_NAME.value && !EXPENSE_DATE.value) {
    EXPENSE_NAME.classList.add('noInput');
    EXPENSE_DATE.classList.add('noInput');
  } else if (!EXPENSE_NAME.value && !EXPENSE_AMOUNT.value) {
    EXPENSE_NAME.classList.add('noInput');
    EXPENSE_AMOUNT.classList.add('noInput');
  } else if (!EXPENSE_DATE.value && !EXPENSE_AMOUNT.value) {
    EXPENSE_DATE.classList.add('noInput');
    EXPENSE_AMOUNT.classList.add('noInput');
  } else if (!EXPENSE_NAME.value) {
    EXPENSE_NAME.classList.add('noInput');
  } else if (!EXPENSE_DATE.value) {
    EXPENSE_DATE.classList.add('noInput');
  } else if (!EXPENSE_AMOUNT.value) {
    EXPENSE_AMOUNT.classList.add('noInput');
  } else {
    EXPENSE_NAME.classList.remove('noInput');
    EXPENSE_DATE.classList.remove('noInput');
    EXPENSE_AMOUNT.classList.remove('noInput');
    addExpense(event);
  }
};
