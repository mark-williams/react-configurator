import { connect } from 'react-redux';
import { getChosenColour } from '../reducers/facet-reducer';
import ConfiguredImage from './ConfiguredImage';

const mapStateToProps = state => (
  { chosenColour: getChosenColour(state.facets) }
);

const ConfiguredImageContainer = connect(
  mapStateToProps,
  () => ({})
  )(ConfiguredImage);

export default ConfiguredImageContainer;
