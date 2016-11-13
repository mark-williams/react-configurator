import uiReducer from './ui-reducer';
import { FACETCHANGE } from '../actions/index';

describe('ui reducer', () => {
  it('when passed undefined state return the default state', () => {
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual({ selectedFacetId: 1 });
  });

  it('when passed facet change action sets the cutrently selected facet', () => {
    const action = { type: FACETCHANGE, value: 109 };
    const newState = uiReducer(undefined, action);
    expect(newState.selectedFacetId).toEqual(action.value);
  });
});
