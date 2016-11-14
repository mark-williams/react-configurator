import { combineReducers } from 'redux';
import uiReducer from './ui-reducer';
import facetReducer from './facet-reducer';

export default combineReducers({
  ui: uiReducer,
  facets: facetReducer,
});
