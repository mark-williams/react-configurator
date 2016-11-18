import _ from 'lodash';
import { optionSelected } from '../actions/index';
import facetReducer, { getOptionDescription, getConfiguredPrice, getChosenColour } from './facet-reducer';

describe('facet-reducer', () => {
  let testFacets;
  beforeEach(() => {
    testFacets = [
      { id: 1, name: 'Facet 1', options: [{ val: 1, desc: 'Facet1Desc1' }, { val: 2, desc: 'Facet1Desc2' }, { val: 3, desc: 'Facet1Desc3', extraCost: 100 }], selectedOption: 0 },
      { id: 2, name: 'Facet 2', options: [{ val: 1, desc: 'Facet2Desc1' }, { val: 2, desc: 'Facet2Desc2', extraCost: 200 }, { val: 3, desc: 'Facet2Desc3' }], selectedOption: 0 },
      { id: 3, name: 'Facet 3', options: [{ val: 1, desc: 'Facet3Desc1', extraCost: 300 }, { val: 2, desc: 'Facet3Desc2' }, { val: 3, desc: 'Facet3Desc3' }], selectedOption: 0 },
    ];
  });

  describe('default behaviour', () => {
    it('when passed undefined state return a default state', () => {
      const newState = facetReducer(undefined, {});
      expect(newState.length).toBe(3);
    });

    it('when passed am unknown action return the passed in state', () => {
      const action = { type: 'UNKNOWN', value: {} };
      const testState = [{ facet: 1 }, { facet: 2 }, { facet: 3 }];
      const newState = facetReducer(testState, action);

      expect(newState).toEqual(testState);
    });
  });

  describe('update selection', () => {
    it('when passed a selected option it sets the appropriate facet as selected', () => {
      const facetIdToSelect = 2;
      const optionToSelect = 3;
      const action = optionSelected(facetIdToSelect, optionToSelect);
      const newState = facetReducer(testFacets, action);

      const selectedFacet = _.find(newState, facet => (
        facet.id === facetIdToSelect
      ));

      expect(selectedFacet.selectedOption).toBe(optionToSelect);
    });
  });

  describe('selectors', () => {
    it('returns default text if option not selected', () => {
      const result = getOptionDescription(testFacets, 2);
      expect(result).toBe('Not selected');
    });

    it('calculates correct description for a chosen option', () => {
      const testFacetId = 2;
      const testOption = 3;
      const facetIndex = _.findIndex(testFacets, facet => (facet.id === testFacetId));
      testFacets[facetIndex].selectedOption = testOption;
      const expectedOption =
        _.find(testFacets[facetIndex].options, opt => (opt.val === testOption));

      const result = getOptionDescription(testFacets, testFacetId);


      expect(result).toBe(expectedOption.desc);
    });

    it('calculates price where no extra cost elements are selected', () => {
      testFacets[1].selectedOption = 1;
      const result = getConfiguredPrice(testFacets);

      expect(result).toBe(999);
    });

    it('calculates price where extra cost elements are selected', () => {
      testFacets[1].selectedOption = 2;
      testFacets[2].selectedOption = 1;
      const result = getConfiguredPrice(testFacets);

      expect(result).toBe(1499);
    });

    it('returns the chosen colour', () => {
      testFacets[2].selectedOption = 3;
      const colour = getChosenColour(testFacets);

      expect(colour).toBe('Facet3Desc3'.toLowerCase());
    });

    it('returns "none" if colour not chosen', () => {
      testFacets[2].selectedOption = 0;
      const colour = getChosenColour(testFacets);

      expect(colour).toBe('none');
    });
  });
});
