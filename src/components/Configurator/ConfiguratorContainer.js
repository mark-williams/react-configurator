import { connect } from 'react-redux';
import { changeSelectedFacet, optionSelected } from '../../actions/index';
import { getOptionDescription, getConfiguredPrice } from '../../reducers/facet-selectors';
import Configurator from './Configurator';

const mapStateToProps = state => (
  {
    facets: state.facets.data,
    selections: state.facets.selections,
    ui: state.ui,
    getOptionDescription: facetId => (getOptionDescription(state.facets, facetId)),
    getConfiguredPrice: () => (getConfiguredPrice(state.facets)),
  }
);

const mapDispatchToProps = dispatch => (
  {
    onSectionChange: facetId => dispatch(changeSelectedFacet(facetId)),
    onOptionChosen: (facetId, optionId) => dispatch(optionSelected(facetId, optionId)),
  }
);

const ConfiguratorContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(Configurator);

export default ConfiguratorContainer;
