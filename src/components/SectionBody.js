import React from 'react';

const FacetBody = props => (
  <div className="collapsible-body" style={{ display: props.open ? 'block': 'none' }}>
    <p>{props.bodyText}</p>
  </div>
);


export default FacetBody;