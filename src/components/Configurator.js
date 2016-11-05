import _ from 'lodash';
import React, { Component } from 'react';
import FacetSection from './FacetSection';


class Configurator extends Component {

  static renderBody() {
    return (
      <div className="collapsible-body" style={{ display: 'block' }}>
        <p>Lorem ipsum dolor sit amet. ++++</p>
      </div>
    );
  }

  constructor() {
    super();

    this.onSectionClick = this.onSectionClick.bind(this);
    this.onOptionChosen = this.onOptionChosen.bind(this);

    this.state = {
      selectedSection: 1,
      basePrice: 999,
      configuredPrice: 999,
      sections: [
        { id: 1, sectionName: 'Size', bodyText: 'Please choose your size (have you seen our size guide?)', options: [{ val: 50, desc: '50cm' }, { val: 54, desc: '54cm' }, { val: 57, desc: '57cm' }, { val: 60, desc: '60cm' }], selectedOption: 0 },
        { id: 2, sectionName: 'Groupset', bodyText: 'Please select your groupset', options: [{ val: 1, desc: 'Shimano Tiagra' }, { val: 2, desc: 'Shimano Ultegra', extraCost: 200 }], selectedOption: 0 },
        { id: 3, sectionName: 'Colour', bodyText: 'What colour do you want?', options: [{ val: 1, desc: 'Blue' }, { val: 2, desc: 'Red' }, { val: 3, desc: 'Chrome', extraCost: 100 }], selectedOption: 0 },
      ],
    };
  }

  onSectionClick(sectionId) {
    if (sectionId !== this.state.selectedSection) {
      this.setState({ selectedSection: sectionId });
    }
  }

  onOptionChosen(sectionId, optionId) {
    const index = _.findIndex(this.state.sections, s => (s.id === sectionId));
    const updatedSection = Object.assign({},
      this.state.sections[index],
      { selectedOption: optionId });
    const sections = [
      ...this.state.sections.slice(0, index),
      updatedSection,
      ...this.state.sections.slice(index + 1),
    ];

    const configuredPrice = this.getPrice(sections);

    this.setState({ sections, configuredPrice });
  }

  getPrice(updatedSections) {
    let configuredPrice = this.state.basePrice;

    updatedSections.forEach((section) => {
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
    const section = _.find(this.state.sections, s => (s.id === sectionId));
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
                this.state.sections.map(section => (
                  <li key={section.id}>
                    <FacetSection
                      section={section}
                      open={section.id === this.state.selectedSection}
                      selection={this.getOptionDescription(section.id)}
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
            <h4 className="right-align">Price £{this.state.configuredPrice}</h4>
          </div>  
        </div>
      </div>
    );
  }
}

export default Configurator;
