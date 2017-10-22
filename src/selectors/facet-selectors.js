import _ from 'lodash';
import { BASE_PRICE, FACETCOLOURKEY } from '../reducers/constants';

export const getOptionDescription = (facets, sectionKey) => {
  let description = 'Not selected';
  const section = facets.data[sectionKey];
  if (section && facets.selections[sectionKey] > 0) {
    const option = section.options.find(o => o.val === facets.selections[sectionKey]);
    description = option.desc;
  }

  return description;
};

export const getChosenColour = (facets) => {
  let colour = 'none';
  const colourSection = facets.data[FACETCOLOURKEY];
  const selectedOption = facets.selections[FACETCOLOURKEY];
  if (selectedOption !== null) {
    const chosen = colourSection.options.find(opt => opt.val === selectedOption);
    if (chosen) {
      colour = chosen.desc.toLowerCase();
    }
  }

  return colour;
};

export const getConfiguredPrice = (facets) => {
  let configuredPrice = BASE_PRICE;
  const keys = Object.keys(facets.selections);

  keys.forEach((key) => {
    if (facets.selections[key] !== null) {
      const selectedOption =
        facets.data[key].options.find(opt => opt.val === facets.selections[key]);
      const extraCost = selectedOption && selectedOption.extraCost;
      if (extraCost) {
        configuredPrice += extraCost;
      }
    }
  });

  return configuredPrice;
};
