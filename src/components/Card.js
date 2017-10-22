import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <article className="mw5 ma4-ns dib center bg-white br3 pa3 pa4-ns ph4-ns mv3 ba b--black-10">
    <div className="tc">
      {props.image && <img
        src={props.image}
        className="br-100 pa1 ba b--black-10 h3 w3"
        alt="avatar"
      />}
      <h1 className="f4">{props.name}</h1>
      <hr className="mw3 bb bw1 b--black-10" />
    </div>
    <p className="lh-copy mb2 measure center f6 black-70">
      {props.amount && <span>Owned:<br />{props.amount}</span>}
    </p>
    <p className="lh-copy mb2 measure center f6 black-70">
      {props.value && <span>Value:<br />{props.value}€</span>}
    </p>
  </article>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.string,
  value: PropTypes.string,
  image: PropTypes.string
};

export default Card;
