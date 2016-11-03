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

    this.state = {
      selectedSection: 1,
      sections: [
        { id: 1, sectionName: 'Size', bodyText: `Please choose your size (have you seen our size guide?)` },
        { id: 2, sectionName: 'Groupset', bodyText: 'Please select your groupset?' },
        { id: 3, sectionName: 'Colour', bodyText: 'What colour do you want?' },
      ],
    };
  }

  getSelectionClass(section) {
    if (section === this.state.selectedSection) {
      return 'collapsible-header active';
    }

    return 'collapsible-header';
  }

  onSectionClick(sectionId) {
    if (sectionId !== this.state.selectedSection) {
      this.setState({ selectedSection: sectionId });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s5">
            <h4>Here you can configure your new bike!</h4>
          </div>
        </div>
        <div className="row">
          <div className="col s5">
            <ul className="collapsible" data-collapsible="accordion">
              { 
                this.state.sections.map(section => (
                  <li key={section.id}>
                    <FacetSection {...section} open={section.id === this.state.selectedSection} onClick={this.onSectionClick.bind(this)} />
                  </li>
                )) 
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Configurator;
