import axios from 'axios';

function fetchCurrenciesStarted() {
  return {
      type: 'FETCH_CURRENCIES',
      fetching: true
  };
}

function fetchCurrenciesSuccess(payload) {
  return {
      type: 'FETCH_CURRENCIES_SUCCESS',
      fetching: false,
      currencies: payload
  };
}

function fetchCurrenciesError(error) {
  return {
      type: 'FETCH_CURRENCIES_ERROR',
      fetching: false,
      error
  };
}

export const fetchCurrencies = (portfolioCurrencies, convertingCurrencies) => (dispatch) => {
  const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${portfolioCurrencies.join(',')}&tsyms=${convertingCurrencies.join(',')}`;
  dispatch(fetchCurrenciesStarted());
  axios.get(url)
      .then(result => dispatch(fetchCurrenciesSuccess(result.data)))
      .catch(error => dispatch(fetchCurrenciesError(error)));
};

export const getPortfolio = () => {
  return {
    type: 'GET_PORTFOLIO',
    currencies: JSON.parse(localStorage.getItem('MONEE_PORTFOLIO')) || []
  }
}

export const addToPortfolio = (currency) => {
  return {
    type: 'ADD_TO_PORTFOLIO',
    currency
  }
}
