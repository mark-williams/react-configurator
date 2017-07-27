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
              props.facets.map(facet => (
                <li key={facet.id}>
                  <FacetSection
                    facet={facet}
                    isOpen={(facet.id === props.ui.selectedFacetId)}
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
        <div className="col offset-s7 s5">
          <Price price={props.getConfiguredPrice()} />
        </div>
      </div>
    </div>
  </div>
);

Configurator.propTypes = {
  facets: PropTypes.arrayOf(PropTypes.object),
  onOptionChosen: PropTypes.func,
  getConfiguredPrice: PropTypes.func,
};

export default Configurator;
