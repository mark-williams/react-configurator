import React from 'react';

const Price = props => (
  <div className="card purple darken-4">
    <div className="card-content white-text">
      <span className="card-title right-align">Price £{props.price}</span>
      <p>
        Interest-free credit is available on this item
      </p>
    </div>
  </div>
);

Price.propTypes = {
  price: React.PropTypes.number,
};

export default Price;
