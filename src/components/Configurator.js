import React from 'react';
import FacetSection from './FacetSection';
import Price from './Price';

const Configurator = props => (
  <div>
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

export default Configurator;