import _ from 'lodash';
import { optionSelected } from '../actions/index';
import facetReducer from './facet-reducer';
import { getOptionDescription, getConfiguredPrice, getChosenColour } from '../selectors/facet-selectors';
import facetsForTest from '../Utils/testUtils';

describe('facet-reducer', () => {
  let testFacets;
  beforeEach(() => {
    testFacets = facetsForTest;
  });

  describe('default behaviour', () => {
    it('when passed undefined state return a default state', () => {
      const newState = facetReducer(undefined, {});
      expect(newState.data).toBeDefined();
    });

    it('when passed an unknown action return the passed in state', () => {
      const action = { type: 'UNKNOWN', value: {} };
      const testState = { data: {} };
      const newState = facetReducer(testState, action);

      expect(newState).toEqual(testState);
    });
  });

  describe('update selection', () => {
    it('when passed a selected option it sets the appropriate option for the facet', () => {
      const facetIdToSelect = 2;
      const optionToSelect = 7;
      const action = optionSelected(facetIdToSelect, optionToSelect);
      const newState = facetReducer(testFacets, action);

      const expected = { ...testFacets.selections, [facetIdToSelect]: optionToSelect };
      expect(newState.selections).toEqual(expected);
    });
  });

  describe('selectors', () => {
    it('returns default text if option not selected', () => {
      const result = getOptionDescription(testFacets, 2);
      expect(result).toBe('Not selected');
    });

    // it.only('calculates correct description for a chosen option', () => {
    //   const testFacetId = 2;
    //   const testOption = 3;
    //   const facetIndex = _.findIndex(testFacets, facet => (facet.id === testFacetId));
    //   testFacets[facetIndex].selectedOption = testOption;
    //   const expectedOption =
    //     _.find(testFacets[facetIndex].options, opt => (opt.val === testOption));

    //   const result = getOptionDescription(testFacets, testFacetId);


    //   expect(result).toBe(expectedOption.desc);
    // });

    it('calculates price where no extra cost elements are selected', () => {
      testFacets.selections['1'] = 1;
      const result = getConfiguredPrice(testFacets);

      expect(result).toBe(999);
    });

    it('calculates price where extra cost elements are selected', () => {
      testFacets.selections['2'] = 1;
      testFacets.selections['3'] = 0;
      const result = getConfiguredPrice(testFacets);

      expect(result).toBe(1499);
    });

    it('returns the chosen colour', () => {
      testFacets.selections[3] = 2;
      const colour = getChosenColour(testFacets);

      expect(colour).toBe('Facet3Desc3'.toLowerCase());
    });

    it('returns "none" if colour not chosen', () => {
      testFacets.selections[3] = null;
      const colour = getChosenColour(testFacets);

      expect(colour).toBe('none');
    });
  });
});
