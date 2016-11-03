import React from 'react';
import FacetBody from './FacetBody';

const FacetSection = props => (
  <div>
    <div onClick={() => props.onClick(props.section.id)} className="collapsible-header">
      <i className="material-icons">{props.section.sectionName}</i>
    </div>
    <FacetBody
      open={props.open}
      bodyText={props.section.bodyText}
      sectionId={props.section.id}
      options={props.section.options}
      selectedOption={props.section.selectedOption}
      onOptionChosen={props.onOptionChosen}
    />
  </div>
);


export default FacetSection;
