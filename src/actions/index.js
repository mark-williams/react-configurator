export const FACETCHANGE = 'FACETCHANGE';
export const OPTIONSELECTED = 'OPTIONSELECTED';


export const changeSelectedFacet = facetId => (
  { type: FACETCHANGE, value: facetId }
);

export const optionSelected = (facetId, optionId) => (
  { type: OPTIONSELECTED, value: { facetId, optionId } }
);
