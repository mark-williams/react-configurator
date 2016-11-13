export const FACETCHANGE = 'FACETCHANGE';

export const changeSelectedFacet = facetId => (
  { type: FACETCHANGE, value: facetId }
);
