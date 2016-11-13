import { FACETCHANGE } from '../actions/index';

const initialState = {
  selectedFacetId: 1,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACETCHANGE:
      return { selectedFacetId: action.value };
    default:
      return state;
  }
  
  return state;
};

export default uiReducer;
