import _ from 'lodash';
import React, { Component } from 'react';
import FacetSection from './FacetSection';
import Price from './Price';
import store from '../store/store';
import { changeSelectedFacet, optionSelected } from '../actions/index';

class Configurator extends Component {

  constructor() {
    super();

    store.subscribe(this.onStoreUpdate.bind(this));

    this.onSectionClick = this.onSectionClick.bind(this);
    this.onOptionChosen = this.onOptionChosen.bind(this);

    this.state = store.getState();
  }

  onStoreUpdate() {
    this.setState(store.getState());
  }

  onSectionClick(sectionId) {
    store.dispatch(changeSelectedFacet(sectionId));
  }

  onOptionChosen(facetId, optionId) {
    store.dispatch(optionSelected(facetId, optionId));
  }

  getConfiguredPrice() {
    let configuredPrice = 999;
    this.state.facets.forEach((section) => {
      if (section.selectedOption !== 0) {
        const option = _.find(section.options, o => o.val === section.selectedOption);
        if (option.extraCost) {
          configuredPrice += option.extraCost;
        }
      }
    });

    return configuredPrice;
  }

  getOptionDescription(sectionId) {
    let description = 'Not selected';
    const section = _.find(this.state.facets, s => (s.id === sectionId));
    if (section && section.selectedOption > 0) {
      const option = _.find(section.options, o => o.val === section.selectedOption);
      description = option.desc;
    }

    return description;
  }

  render() {
    return (
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
                this.state.facets.map(facet => (
                  <li key={facet.id}>
                    <FacetSection
                      facet={facet}
                      open={facet.id === this.state.ui.selectedFacetId}
                      selection={this.getOptionDescription(facet.id)}
                      onClick={this.onSectionClick}
                      onOptionChosen={this.onOptionChosen}
                    />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col offset-s3 s3">
            <Price price={this.getConfiguredPrice()} />
          </div>
        </div>
      </div>
    );
  }
}

export default Configurator;
