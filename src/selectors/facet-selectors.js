import _ from 'lodash';
import { BASE_PRICE, FACETCOLOURKEY } from '../reducers/facet-reducer';

export const getOptionDescription = (facets, sectionId) => {
  let description = 'Not selected';
  const section = _.find(facets.data, s => (s.id === sectionId));
  if (section && section.selectedOption > 0) {
    const option = _.find(section.options, o => o.val === section.selectedOption);
    description = option.desc;
  }

  return description;
};

export const getChosenColour = (facets) => {
  let colour = 'none';
  const colourSection = facets.data[FACETCOLOURKEY];
  const selectedOption = facets.selections[FACETCOLOURKEY];
  if (selectedOption !== null) {
    const chosen = colourSection.options[selectedOption];

    colour = chosen.desc.toLowerCase();
  }

  return colour;
};

export const getConfiguredPrice = (facets) => {
  let configuredPrice = BASE_PRICE;
  const keys = Object.keys(facets.selections);

  keys.forEach((key) => {
    if (facets.selections[key] !== null) {
      const extraCost = facets.data[key].options[facets.selections[key]].extraCost;
      if (extraCost) {
        configuredPrice += extraCost;
      }
    }
  });

  return configuredPrice;
};
