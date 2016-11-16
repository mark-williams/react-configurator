import React from 'react';

const FacetBody = (props) => {
  const idPrefix = `section-${props.facetId}`;
  return (
    <div className="collapsible-body" style={{ display: props.isOpen ? 'block' : 'none' }}>
      <p>{props.bodyText}</p>
      <ul className="facet-options">
        { props.options.map((opt, i) => (
          <li key={opt.val} className="facet-options__body">
            <input
              name={`section-${props.facetId}`}
              type="radio"
              id={`${idPrefix}-${i}`}
              onChange={() => props.onOptionChosen(props.facetId, opt.val)}
              checked={opt.val === props.selectedOption}
            />
            <label htmlFor={`${idPrefix}-${i}`}>{opt.desc}{opt.extraCost ? ` (+£${opt.extraCost})` : ''}</label>
          </li>
        ))
      }
      </ul>
    </div>
  );
};

FacetBody.propTypes = {
  facetId: React.PropTypes.number,
  bodyText: React.PropTypes.string,
  options: React.PropTypes.array,
  selectedOption: React.PropTypes.number,
  isOpen: React.PropTypes.bool,
  onOptionChosen: React.PropTypes.func,
};

export default FacetBody;
