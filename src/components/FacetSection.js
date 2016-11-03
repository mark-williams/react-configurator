import React from 'react';
import FacetBody from './FacetBody';

const FacetSection = props => (
  <div>
    <div onClick={() => props.onClick(props.id)} className="collapsible-header">
      <i className="material-icons">{props.sectionName}</i>{props.selection}
    </div>
    <FacetBody open={props.open} bodyText={props.bodyText} options={props.options} />
  </div>
);


export default FacetSection;
