import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup remove expense action object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('Should setup edit expense action object', () => {
  const action = editExpense('123abc', { amount: 9999, note: "updated note" });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: { amount: 9999, note: "updated note" }
  })
})

test('Should setup add expense action object with proveided value', () => {
  const action = addExpense({ description: 'car', amount: 9999, createdAt: 1000, note: "updated note" });
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: 'car',
      amount: 9999,
      createdAt: 1000,
      note: "updated note"
    }
  })
})

test('Should setup add expense action object with default value', () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})