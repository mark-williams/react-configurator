import { FACETCHANGE } from '../actions/index';
import { FACETSIZEKEY } from './facet-reducer';

const initialState = {
  selectedFacetId: FACETSIZEKEY,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACETCHANGE:
      return { selectedFacetId: action.value };
    default:
      return state;
  }
};

export default uiReducer;
