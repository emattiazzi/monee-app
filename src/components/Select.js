import React from 'react';
import PropTypes from 'prop-types';

const Select = props => (
  <div className="mb4">
    <label htmlFor={props.fieldName} className="f6 b db mb2">
      {props.label}
    </label>
    <select
      name="currency"
      onChange={e => props.handleChange(e)}
      className="input-reset ba b--black-20 pa2 mb2 db w-100"
      defaultValue={props.defaultValue}
    >
      {props.items.map((item, index) => (
        <option key={`${item.value}-${index}`} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
    <small className="f6 black-60 db mb2">{props.description}</small>
  </div>
);

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,    
    text: PropTypes.string.isRequired
  })).isRequired,
  fieldName: PropTypes.string.isRequired
}

export default Select
