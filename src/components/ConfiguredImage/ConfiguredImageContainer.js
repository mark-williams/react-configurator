import { connect } from 'react-redux';
import { getChosenColour } from '../../selectors/facet-selectors';

import ConfiguredImage from './ConfiguredImage';

const mapStateToProps = state => (
  { chosenColour: getChosenColour(state.facets) }
);

const ConfiguredImageContainer = connect(
  mapStateToProps,
  () => ({})
  )(ConfiguredImage);

export default ConfiguredImageContainer;
