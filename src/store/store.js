import { createStore } from 'redux';
import uiReducer from '../reducers/ui-reducer';

const store = createStore(uiReducer);

export default store;
