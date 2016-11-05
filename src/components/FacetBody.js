import React from 'react';

const FacetBody = (props) => {
  const idPrefix = `section-${props.sectionId}`;
  return (
    <div className="collapsible-body" style={{ display: props.open ? 'block' : 'none' }}>
      <p>{props.bodyText}</p>
      <ul className="facet-options">
        { props.options.map((opt, i) => (
          <li key={opt.val} className="facet-options__body">
            <input
              name={`section-${props.sectionId}`}
              type="radio"
              id={`${idPrefix}-${i}`}
              onChange={() => props.onOptionChosen(props.sectionId, opt.val)}
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


export default FacetBody;

