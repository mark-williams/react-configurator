import uiReducer from './ui-reducer';
import { FACETCHANGE, changeSelectedFacet } from '../actions/index';

describe('ui reducer', () => {
  it('when passed undefined state return the default state', () => {
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual({ selectedFacetId: 'size' });
  });

  it('when passed facet change action sets the cutrently selected facet', () => {
    const action = { type: FACETCHANGE, value: 109 };
    const newState = uiReducer(undefined, action);
    expect(newState.selectedFacetId).toEqual(action.value);
  });

  it('accepts actions created with action creator', () => {
    const actionValue = 199;
    const newState = uiReducer(undefined, changeSelectedFacet(actionValue));
    expect(newState.selectedFacetId).toEqual(actionValue);
  });
});
