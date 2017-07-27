import React from 'react';
import PropTypes from 'prop-types';
import redBike from '../../images/red-bike.png';
import blueBike from '../../images/blue-bike.png';
import titaniumBike from '../../images/titanium-bike.png';


const getImage = (colour) => {
  const defaultImage = redBike;
  switch (colour) {
    case 'red':
      return redBike;
    case 'blue':
      return blueBike;
    case 'titanium':
      return titaniumBike;

    default:
      return defaultImage;
  }
};

const ConfiguredImage = props => (
  <div className="card card--selected-image">
    <img alt="Configured bike" className="configured-image responsive-img" src={getImage(props.chosenColour)} />
  </div>
);

ConfiguredImage.propTypes = {
  chosenColour: PropTypes.string,
};

export default ConfiguredImage;
