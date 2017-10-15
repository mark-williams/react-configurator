import _ from 'lodash';
import { BASE_PRICE, FACETCOLOURID } from '../reducers/facet-reducer';

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
  const colourSection = _.find(facets.data, s => (s.id === FACETCOLOURID));
  if (colourSection && colourSection.selectedOption > 0) {
    const option = _.find(colourSection.options, o => o.val === colourSection.selectedOption);
    colour = option.desc.toLowerCase();
  }
  return colour;
};

export const getConfiguredPrice = (facets) => {
  let configuredPrice = BASE_PRICE;
  facets.data.forEach((section) => {
    if (section.selectedOption !== 0) {
      const option = _.find(section.options, o => o.val === section.selectedOption);
      if (option.extraCost) {
        configuredPrice += option.extraCost;
      }
    }
  });

  return configuredPrice;
};
