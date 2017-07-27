import React from 'react';
import PropTypes from 'prop-types';

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
  facetId: PropTypes.number,
  bodyText: PropTypes.string,
  options: PropTypes.array,
  selectedOption: PropTypes.number,
  isOpen: PropTypes.bool,
};

export default FacetBody;
