import React from 'react';
import { connect } from 'react-redux';
import { getChosenColour } from '../reducers/facet-reducer';
import redBike from '../images/red-bike.png';
import blueBike from '../images/blue-bike.png';
import titaniumBike from '../images/titanium-bike.png';


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

export default ConfiguredImage;

const mapStateToProps = state => (
  { chosenColour: getChosenColour(state.facets) }
);

const ConfiguredImageContainer = connect(
  mapStateToProps,
  () => ({})
  )(ConfiguredImage);

export { ConfiguredImageContainer };
