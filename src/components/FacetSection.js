import React from 'react';
import FacetBody from './SectionBody';

const FacetSection = props => (
  <div>
    <div id="size-accordion" className="collapsible-header">
      <i className="material-icons">{props.sectionName}</i>{props.selection}
    </div>
    <FacetBody open={props.open} bodyText={props.bodyText} />
  </div>
);


export default FacetSection;
