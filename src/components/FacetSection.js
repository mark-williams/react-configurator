import React from 'react';
import FacetBody from './FacetBody';

const FacetSection = props => (
  <div>
    <div onClick={() => props.onClick(props.facet.id)} className="collapsible-header">
      <i className="material-icons">{props.facet.facetName}</i>
      <span className={props.facet.selectedOption === 0 ? 'facet-section--notSelected' : ''}>{props.selection}</span>
    </div>
    <FacetBody
      open={props.open}
      bodyText={props.facet.bodyText}
      facetId={props.facet.id}
      options={props.facet.options}
      selectedOption={props.facet.selectedOption}
      onOptionChosen={props.onOptionChosen}
    />
  </div>
);


export default FacetSection;
