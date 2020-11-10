const EXPENSE_SUBMIT = document.querySelector('#expenseSubmit');
const EXPENSE_NAME = document.querySelector('#expenseName');
const EXPENSE_DATE = document.querySelector('#expenseDate');
const EXPENSE_AMOUNT = document.querySelector('#expenseAmount');

EXPENSE_SUBMIT.addEventListener('click', checkInputHandler);