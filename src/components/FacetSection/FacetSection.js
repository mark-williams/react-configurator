import React from 'react';
import PropTypes from 'prop-types';
import FacetBody from '../FacetBody';


const FacetSection = props => (
  <div>
    <div onClick={() => props.onClick(props.facet.id)} className="collapsible-header" role="presentation">
      <i className="material-icons">{props.facet.facetName}</i>
      <span className={props.facet.selectedOption === 0 ? 'facet-section--notSelected' : ''}>{props.selection}</span>
    </div>
    <FacetBody
      isOpen={props.isOpen}
      bodyText={props.facet.bodyText}
      facetKey={props.facetKey}
      options={props.facet.options}
      selectedOption={props.selectedOption}
      onOptionChosen={props.onOptionChosen}
    />
  </div>
);

FacetSection.propTypes = {
  facet: PropTypes.object,
  facetKey: PropTypes.string,
  selectedOption: PropTypes.string,
  selection: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  onOptionChosen: PropTypes.func,
};

export default FacetSection;
