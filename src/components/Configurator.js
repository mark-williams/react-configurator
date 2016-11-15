import React from 'react';
import { connect } from 'react-redux';
import FacetSection from './FacetSection';
import Price from './Price';
import { changeSelectedFacet, optionSelected } from '../actions/index';
import { getOptionDescription, getConfiguredPrice } from '../reducers/facet-reducer';

const Configurator = props => (
  <div>
    <h4>A configuration tool</h4>
    <div className="container">
      <div className="row">
        <div className="col s6">
          <h4>Configure your new bike</h4>
        </div>
      </div>
      <div className="row">
        <div className="col s6">
          <ul className="collapsible" data-collapsible="accordion">
            {
              props.facets.map(facet => (
                <li key={facet.id}>
                  <FacetSection
                    facet={facet}
                    open={facet.id === props.ui.selectedFacetId}
                    selection={props.getOptionDescription(facet.id)}
                    onClick={() => props.onSectionChange(facet.id)}
                    onOptionChosen={props.onOptionChosen}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col offset-s3 s3">
          <Price price={props.getConfiguredPrice()} />
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => (
  {
    facets: state.facets,
    ui: state.ui,
    getOptionDescription: facetId => (getOptionDescription(state.facets, facetId)),
    getConfiguredPrice: () => (getConfiguredPrice(state)),
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
