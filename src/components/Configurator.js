import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import FacetSection from './FacetSection';
import Price from './Price';
import { changeSelectedFacet, optionSelected } from '../actions/index';

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
          <Price price="999" />
        </div>
      </div>
    </div>
  </div>
);

const getOptDesc = (facets, sectionId) => {
  let description = 'Not selected';
  const section = _.find(facets, s => (s.id === sectionId));
  if (section && section.selectedOption > 0) {
    const option = _.find(section.options, o => o.val === section.selectedOption);
    description = option.desc;
  }

  return description;
};

const mapStateToProps = state => (
  {
    facets: state.facets,
    ui: state.ui,
    getOptionDescription: facetId => (getOptDesc(state.facets, facetId)),
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
