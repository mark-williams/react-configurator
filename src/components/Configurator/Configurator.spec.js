import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Configurator from './Configurator';
import testFacets from '../../Utils/testUtils';

const uiState = {
  selectedFacetId: 1,
};


describe('Configurator tests', () => {
  it('basic snapshot', () => {
    const tree = renderer.create(
      <Configurator
        facets={testFacets}
        ui={uiState}
        getOptionDescription={facetId => `*** ${facetId}`}
        getConfiguredPrice={() => 500}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render a section for each facet', () => {
    const wrapper = shallow(
      <Configurator
        facets={testFacets}
        ui={uiState}
        getOptionDescription={facetId => `*** ${facetId}`}
        getConfiguredPrice={() => 500}
      />
    );

    expect(wrapper.find('.collapsible > li').length).toEqual(testFacets.length);
  });
});
