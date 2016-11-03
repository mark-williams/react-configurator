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
      selectedSection: 'size-accordion',
      sections: {
        size: ['50cm', '54cm', '57cm', '60cm'],
        groupset: ['Shimano Tiagra', 'Shimano Ultegra'],
        colour: ['Blue', 'Grey', 'Red'],
      },
    };
  }

  getSelectionClass(section) {
    if (section === this.state.selectedSection) {
      return 'collapsible-header active';
    }

    return 'collapsible-header';
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
              <li>
                <FacetSection sectionName="Size" selection="Not selected" open={true} bodyText="Please choose a size" />
              </li>
              <li>
                <FacetSection sectionName="Groupset" selection="Not selected" open={false} className="collapsible-header" bodyText="Please choose a size" />
              </li>
              <li>
                <FacetSection sectionName="Colour" selection="Not selected" open={false}  bodyText="Please choose a size" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Configurator;
