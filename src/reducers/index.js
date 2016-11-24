import { combineReducers } from 'redux';
import ui from './ui-reducer';
import facets from './facet-reducer';

export default combineReducers({
  ui,
  facets,
});
