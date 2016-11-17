import React from 'react';
import redBike from '../images/red-bike.png';

const ConfiguredImage = () => (
  <div className="card card--selected-image">
    <img alt="Bike image" className="configured-image responsive-img" src={redBike} />
  </div>
);

export default ConfiguredImage;
