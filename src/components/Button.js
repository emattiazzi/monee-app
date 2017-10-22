import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    onClick={props.handleClick}
    className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
  >
    {props.text}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
