import React from 'react';
import PropTypes from 'prop-types';

const FacetBody = (props) => {
  const idPrefix = `section-${props.facetKey}`;
  return (
    <div className="collapsible-body" style={{ display: props.isOpen ? 'block' : 'none' }}>
      <p>{props.bodyText}</p>
      <ul className="facet-options">
        { props.options.map((opt, i) => (
          <li key={opt.val} className="facet-options__body">
            <input
              name={`section-${props.facetKey}`}
              type="radio"
              id={`${idPrefix}-${i}`}
              onChange={() => props.onOptionChosen(props.facetKey, opt.val)}
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

// Looks like a bug with eslint or plugin for unused props and stateless components
/* eslint-disable react/no-unused-prop-types */
FacetBody.propTypes = {
  facetKey: PropTypes.string,
  bodyText: PropTypes.string,
  options: PropTypes.array,
  selectedOption: PropTypes.number,
  isOpen: PropTypes.bool,
  onOptionChosen: PropTypes.func,
};
/* eslint-enable */

export default FacetBody;
