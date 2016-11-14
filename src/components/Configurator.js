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

    this.state = {
      ui: { selectedFacetId: 1 },
      pricing: { basePrice: 999, configuredPrice: 999 },
      facets: [
        { id: 1, facetName: 'Size', bodyText: 'Please choose your size (have you seen our size guide?)', options: [{ val: 50, desc: '50cm' }, { val: 54, desc: '54cm' }, { val: 57, desc: '57cm' }, { val: 60, desc: '60cm' }], selectedOption: 0 },
        { id: 2, facetName: 'Groupset', bodyText: 'Please select your groupset', options: [{ val: 1, desc: 'Shimano Tiagra' }, { val: 2, desc: 'Shimano Ultegra', extraCost: 200 }], selectedOption: 0 },
        { id: 3, facetName: 'Colour', bodyText: 'What colour do you want?', options: [{ val: 1, desc: 'Blue' }, { val: 2, desc: 'Red' }, { val: 3, desc: 'Chrome', extraCost: 100 }], selectedOption: 0 },
      ],
    };
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

  getPrice(updatedFacets) {
    let configuredPrice = this.state.pricing.basePrice;

    updatedFacets.forEach((section) => {
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
            <Price price={this.state.pricing.configuredPrice} />
          </div>
        </div>
      </div>
    );
  }
}

export default Configurator;
