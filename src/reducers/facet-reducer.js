import { OPTIONSELECTED } from '../actions/index';

export const BASE_PRICE = 999;
export const FACETSIZEKEY = 'size';
const FACETGROUPSETKEY = 'groupset';
export const FACETCOLOURKEY = 'colour';

const initialState = {
  data: {
    [FACETSIZEKEY]: { facetName: 'Size', bodyText: 'Please choose your size (have you seen our size guide?)', options: [{ val: 50, desc: '50cm' }, { val: 54, desc: '54cm' }, { val: 57, desc: '57cm' }, { val: 60, desc: '60cm' }], selectedOption: 0 },
    [FACETGROUPSETKEY]: { facetName: 'Groupset', bodyText: 'Please select your groupset', options: [{ val: 1, desc: 'Shimano Tiagra' }, { val: 2, desc: 'Shimano Ultegra', extraCost: 200 }], selectedOption: 0 },
    [FACETCOLOURKEY]: { facetName: 'Colour', bodyText: 'What colour do you want?', options: [{ val: 1, desc: 'Red' }, { val: 2, desc: 'Blue' }, { val: 3, desc: 'Titanium', extraCost: 400 }], selectedOption: 0 },
  },
  selections: {
    [FACETSIZEKEY]: 0,
    [FACETGROUPSETKEY]: 0,
    [FACETCOLOURKEY]: 0,
  },
};

const getUpdatedFacets = (state, action) => {
  const newSelections =
    Object.assign({}, state.selections, { [action.value.facetId]: action.value.optionId });
  return { data: state.data, selections: newSelections };
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

