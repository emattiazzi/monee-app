import React from 'react';
import PropTypes from 'prop-types';

import currencies from '../../../helpers/available_currencies';
import Add from './Add';
import { connect } from 'react-redux';
import { addToPortfolio } from '../../../actions/actions';

class AddContainer extends React.Component {
  static propTypes = {
    dispatchAddToPortfolio: PropTypes.func.isRequired,
    portfolio: PropTypes.array.isRequired
  }

  addCurrency = (currency, amount) => {
    const currencySetup = currencies.find((entry) => entry.value === currency);
    const image = currencySetup ? currencySetup.image : null;

    const newCurrency = {
      currency,
      amount,
      image
    }
    localStorage.setItem('MONEE_PORTFOLIO', JSON.stringify(this.props.portfolio.concat(newCurrency)));
    this.props.dispatchAddToPortfolio(newCurrency);
  }

  render() {
    return <Add addCurrency={this.addCurrency} />
  }
}
const mapDispatchToProps = dispatch => ({
  dispatchAddToPortfolio: (currency) => dispatch(addToPortfolio(currency))
});

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContainer);
