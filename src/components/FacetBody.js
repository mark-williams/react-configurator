import React from 'react';

const FacetBody = props => (
  <div className="collapsible-body" style={{ display: props.open ? 'block': 'none' }}>
    <p>{props.bodyText}</p>
   	<ul className="facet-options">
   		{ props.options.map(opt => (
    			<li key={opt.val} className="facet-body--option">
    				<input name="Group" type="radio" id={opt.val} />
      			<label htmlFor={opt.val}>{opt.desc}</label>
      		</li>	
    		))
    	}
   	</ul>
  </div>
);


export default FacetBody;

