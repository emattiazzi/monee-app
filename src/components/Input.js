import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <div>
    <label htmlFor={props.fieldName} className="f6 b db mb2">
      {props.label}
    </label>
    <input
      type={props.type}
      name={props.fieldName}
      defaultValue={props.defaultValue}
      onChange={e => props.handleChange(e)}
      className="input-reset ba b--black-20 pa2 mb2 db w-100"
    />
    <small className="f6 black-60 db mb2">{props.description}</small>
  </div>
);

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number']),
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  handleChange: PropTypes.func.isRequired
}

export default Input;
