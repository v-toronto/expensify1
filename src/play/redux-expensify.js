import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

const addExpense = (
  { description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})


const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined
};

//Expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id != action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
        else {
          return expense;
        }
      });
    default: return state;
  }
};

const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  }
}

const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  }
}
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  }
}

const setStarDate = date => ({ type: 'SET_START_DATE', startDate: date })
const setEndDate = date => ({ type: 'SET_END_DATE', endDate: date })

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text }
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' }
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate }
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate }
    default: {
      return state
    }
  }
}

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filter: filtersReducer
})
)

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

  const expensesOut = expenses.filter((expense) => {
    //const textMatch = expense.description.indexOf(text) > -1;
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return textMatch && startDateMatch && endDateMatch
  }).sort((a, b) => {
    console.log('sortBy:', sortBy)
    if (sortBy === "date") {
      return a.createdAt < b.createStore ? 1 : -1;
    }
    if (sortBy === "amount") {
      return a.amount < b.amount ? 1 : -1;
    }
  })

  return expensesOut
}

store.subscribe(() => {
  const state = store.getState();
  // console.log('all states:', state)
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  console.log('visibleExpenses:', visibleExpenses);
})
store.dispatch(sortByAmount());
const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 101, createdAt: 1000 }));
const expense2 = store.dispatch(addExpense({ description: 'coffee', amount: 230, createdAt: -1000 }));


// store.dispatch(setStarDate(-200));
// store.dispatch(setEndDate(2000));
// store.dispatch(setTextFilter('re'));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('renta'));

// const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 230 }));
// const expenseThree = store.dispatch(addExpense({ description: 'cold water', amount: 50 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 599 }))



// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate())
// store.dispatch({ type: 'SORT_BY_AMOUNT' })
// store.dispatch(setStarDate(125))
// store.dispatch({ type: 'SET_START_DATE', startDate: 126 })
// store.dispatch(setStarDate())
// store.dispatch(setEndDate(1250))
// store.dispatch({ type: 'SET_END_DATE', endDate: 1251 })





// const demoState = {
//   expenses: [{
//     id: 'poijasdfhwer',
//     description: 'January Rent',
//     note: 'This was the final payment for that address',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };

