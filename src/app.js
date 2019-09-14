import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './stores/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getSortedExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

const expense1 = store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 1000 }));
const expense2 = store.dispatch(addExpense({ description: 'Gaz bill', amount: 1025, createdAt: 4000 }));
const expense3 = store.dispatch(addExpense({ description: 'rent', amount: 109500, createdAt: 3000 }));
//store.dispatch(setTextFilter('gaz'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('water'))
// }, 5000)

const state = store.getState();
const visibleExpenses = getSortedExpenses(state.expenses, state.filters);
console.log('store.getState:', store.getState());
console.log('visibleExpenses', visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))


// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi, my name is ${this.name}`
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());
// //------------
// class NewSyntax {
//   name = 'Victor'
//   getGreeting = () => {
//     return `Hi, my name is ${this.name}`
//   }
// }
// const newSyntax = new NewSyntax()
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting())
