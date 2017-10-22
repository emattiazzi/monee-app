const initialState = {
  portfolio: [],
  fetching: false,
  error: null
}

const requestStart = (state, action) => ({
  ...state,
  fetching: action.fetching
});

const requestError = (state, action) => ({
  ...state,
  fetching: action.fetching,
  error: action.error.message
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_START': {
      return requestStart(state, action);
    }
    case 'FETCH_CURRENCIES_SUCCESS': {
      return {
        ...state,
        currencies: action.currencies
      };
    }
    case 'FETCH_CURRENCIES_ERROR': {
      return requestError(state, action);
    }
    case 'GET_PORTFOLIO': {
      return {
        ...state,
        portfolio: action.currencies || state.portfolio
      }
    }
    case 'ADD_TO_PORTFOLIO': {
      return {
        ...state,
        portfolio: state.portfolio.concat(action.currency)
      }
    }
    default: return state;
  }
}
