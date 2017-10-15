const testFacets = {
  data: [
    { id: 1, name: 'Facet 1', options: [{ val: 1, desc: 'Facet1Desc1' }, { val: 2, desc: 'Facet1Desc2' }, { val: 3, desc: 'Facet1Desc3', extraCost: 100 }], selectedOption: 0 },
    { id: 2, name: 'Facet 2', options: [{ val: 1, desc: 'Facet2Desc1' }, { val: 2, desc: 'Facet2Desc2', extraCost: 200 }, { val: 3, desc: 'Facet2Desc3' }], selectedOption: 0 },
    { id: 3, name: 'Facet 3', options: [{ val: 1, desc: 'Facet3Desc1', extraCost: 300 }, { val: 2, desc: 'Facet3Desc2' }, { val: 3, desc: 'Facet3Desc3' }], selectedOption: 0 },
  ],
  selections: [0, 0, 0],
};

export default testFacets;
