import _ from 'lodash';
import { OPTIONSELECTED } from '../actions/index';

export const BASE_PRICE = 999;
export const FACETSIZEID = 1;
export const FACETGROUPSETID = 2;
export const FACETCOLOURID = 3;

const initialState = {
  data: [
    { id: FACETSIZEID, facetName: 'Size', bodyText: 'Please choose your size (have you seen our size guide?)', options: [{ val: 50, desc: '50cm' }, { val: 54, desc: '54cm' }, { val: 57, desc: '57cm' }, { val: 60, desc: '60cm' }], selectedOption: 0 },
    { id: FACETGROUPSETID, facetName: 'Groupset', bodyText: 'Please select your groupset', options: [{ val: 1, desc: 'Shimano Tiagra' }, { val: 2, desc: 'Shimano Ultegra', extraCost: 200 }], selectedOption: 0 },
    { id: FACETCOLOURID, facetName: 'Colour', bodyText: 'What colour do you want?', options: [{ val: 1, desc: 'Red' }, { val: 2, desc: 'Blue' }, { val: 3, desc: 'Titanium', extraCost: 400 }], selectedOption: 0 },
  ],
  selections: [0, 0, 0],
};


const getUpdatedFacets = (state, action) => {
  const newSelections = state.selections.map((s, index) => (index === action.value.facetId - 1) ? action.value.optionId : s);
  return { date: state.data, selections: newSelections };
};

const facetReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPTIONSELECTED:
      return getUpdatedFacets(state, action);

    default:
      return state;
  }
};

export default facetReducer;

