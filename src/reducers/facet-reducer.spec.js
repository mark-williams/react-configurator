import _ from 'lodash';
import { optionSelected } from '../actions/index';
import facetReducer from './facet-reducer';

describe('facet-reducer', () => {
  describe('default behaviour', () => {
    it('when passed undefined state return a default state', () => {
      const newState = facetReducer(undefined, {});
      expect(newState.facets).toBeDefined();
    });

    it('when passed am unknown action return the passed in state', () => {
      const action = { type: 'UNKNOWN', value: {} };
      const testState = { value: 'some value' };
      const newState = facetReducer(testState, action);

      expect(newState).toEqual(testState);
    });
  });

  describe('update selection', () => {
    let currentState;
    beforeEach(() => {
      currentState = {
        facets: [
          { id: 1, name: 'Facet 1', options: [{ val: 1 }, { val: 2 }, { val: 3 }] },
          { id: 2, name: 'Facet 2', options: [{ val: 1 }, { val: 2 }, { val: 3 }] },
          { id: 3, name: 'Facet 3', options: [{ val: 1 }, { val: 2 }, { val: 3 }] },
        ],
      };
    });

    it('when passed a selected option it sets the appropriate facet as selected', () => {
      const facetIdToSelect = 2;
      const optionToSelect = 3;
      const action = optionSelected(facetIdToSelect, optionToSelect);
      const newState = facetReducer(currentState, action);

      const selectedFacet = _.find(newState.facets, facet => (
        facet.id === facetIdToSelect
      ));

      expect(selectedFacet.selectedOption).toBe(optionToSelect);
    });
  });
});
