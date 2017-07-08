import React from 'react';
import FacetBody from './FacetBody';


const FacetSection = props => (
  <div>
    <div onClick={() => props.onClick(props.facet.id)} className="collapsible-header" role="button">
      <i className="material-icons">{props.facet.facetName}</i>
      <span className={props.facet.selectedOption === 0 ? 'facet-section--notSelected' : ''}>{props.selection}</span>
    </div>
    <FacetBody
      isOpen={props.isOpen}
      bodyText={props.facet.bodyText}
      facetId={props.facet.id}
      options={props.facet.options}
      selectedOption={props.facet.selectedOption}
      onOptionChosen={props.onOptionChosen}
    />
  </div>
);

FacetSection.propTypes = {
  facet: React.PropTypes.object,
  selection: React.PropTypes.string,
  isOpen: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  onOptionChosen: React.PropTypes.func,
};

export default FacetSection;
