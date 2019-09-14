export const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  }
}

export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  }
}
export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  }
}

export const setStartDate = date => ({ type: 'SET_START_DATE', startDate: date })
export const setEndDate = date => ({ type: 'SET_END_DATE', endDate: date })