import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/pages/Home';
import AddContainer from './components/pages/Add/AddContainer';

import NotFound from './components/NotFound';
import Nav from './components/Nav';

import { fetchCurrencies, getPortfolio } from './actions/actions';

class App extends Component {
  fetchData = (portfolio = []) => {
    const { dispatchFetchCurrencies } = this.props;
    const currenciesInPortfolio = portfolio.map(entry => entry.currency);
    currenciesInPortfolio.length && dispatchFetchCurrencies(currenciesInPortfolio, ['USD', 'EUR']);
  };

  componentDidMount() {
    this.props.dispatchGetPortfolio();
    this.fetchData();
  }

  componentWillReceiveProps(nextProps) {
      if (JSON.stringify(nextProps.portfolio) !== JSON.stringify(this.props.portfolio)) {
        this.fetchData(nextProps.portfolio);        
      }
  }

  render() {
    const { currencies, portfolio } = this.props;
    return (
      <BrowserRouter>
        <div className="w-100 sans-serif bg-white">
          <Nav />
          <Switch>
            <Route
              path="/"
              exact
              render={props => <Home currencies={currencies} portfolio={portfolio} />}
            />
            <Route
              path="/add"
              exact
              component={AddContainer}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currencies: state.currencies,
  portfolio: state.portfolio,
  fetching: state.fetching
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchCurrencies: (portfolioCurrencies, convertingCurrencies) =>
    dispatch(fetchCurrencies(portfolioCurrencies, convertingCurrencies)),
  dispatchGetPortfolio: () => dispatch(getPortfolio())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
