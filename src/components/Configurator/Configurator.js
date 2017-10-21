import React from 'react';
import PropTypes from 'prop-types';
import FacetSection from '../FacetSection';
import Price from '../Price';

const Configurator = props => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col s12">
          <ul className="collapsible" data-collapsible="accordion">
            {
              Object.keys(props.facets).map(facetKey => (
                <li key={facetKey}>
                  <FacetSection
                    facet={props.facets[facetKey]}
                    facetKey={facetKey}
                    isOpen={(facetKey === props.ui.selectedFacetId)}
                    selection={props.getOptionDescription(facetKey)}
                    onClick={() => props.onSectionChange(facetKey)}
                    onOptionChosen={props.onOptionChosen}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col offset-s7 s5">
          <Price price={props.getConfiguredPrice()} />
        </div>
      </div>
    </div>
  </div>
);

Configurator.propTypes = {
  facets: PropTypes.object,
  onOptionChosen: PropTypes.func,
  getConfiguredPrice: PropTypes.func,
};

export default Configurator;
