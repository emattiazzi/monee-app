import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const Home = ({ currencies, portfolio}) => {
  const getTotal = (value, amount) => {
    return (parseFloat(value) * parseFloat(amount)).toFixed(2);
  };

  return (
    <div className="pa4-ns tc">
      {portfolio && currencies && portfolio.map((entry, index) => (
        <Card
          key={`${entry}-${index}`}
          name={entry.currency}
          amount={entry.amount}
          image={entry.image}
          value={
            getTotal(currencies[entry.currency].EUR, entry.amount)
          }
        >
        </Card>
      ))}
    </div>
  );
};

Home.propTypes = {
  portfolio: PropTypes.array.isRequired,
  currencies: PropTypes.object
};

export default Home;
