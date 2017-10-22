import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import Select from '../../Select';
import Button from '../../Button';
import currencies from '../../../helpers/available_currencies';

export default class Add extends Component {
  static propTypes = {
    addCurrency: PropTypes.func.isRequired
  }
  
  state = {
    currency: 'ETH',
    amount: null
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render () {
    const {currency, amount} = this.state;
    return (
      <div className="pa3 pa4-ns">
        <Select
          items={currencies}
          label="Currency:"
          description="Add a currency to your portfolio"
          handleChange={this.handleInput}
          defaultValue="ETH"
          fieldName="currency"
        />
        <Input
          label="Amount:"
          type="number"
          description="How much o you own for the currency?"
          handleChange={this.handleInput}
          defaultValue={0}
          fieldName="amount"
        />
        <Button
          text="Add to portfolio"
          handleClick={e => this.props.addCurrency(currency, amount)}
        />
      </div>
    );
  }

}
