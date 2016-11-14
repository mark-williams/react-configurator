import { createStore } from 'redux';
import combineReducers from '../reducers/index';

const store = createStore(combineReducers);

export default store;
