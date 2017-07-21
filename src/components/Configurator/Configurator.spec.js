import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
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
    const wrapper = mount(
      <Configurator
        facets={testFacets}
        ui={uiState}
        getOptionDescription={facetId => `*** ${facetId}`}
        getConfiguredPrice={() => 500}
      />
    );

    expect(wrapper.find('.collapsible > li').length).toEqual(testFacets.length);
  });

  it('should render with selected facet open', () => {
    const wrapper = mount(
      <Configurator
        facets={testFacets}
        ui={uiState}
        getOptionDescription={facetId => `*** ${facetId}`}
        getConfiguredPrice={() => 500}
      />
    );

    expect(wrapper.find('.collapsible > li').at(0).props().children.props.isOpen).toBe(true);
    expect(wrapper.find('.collapsible > li').at(1).props().children.props.isOpen).toBe(false);
    expect(wrapper.find('.collapsible > li').at(2).props().children.props.isOpen).toBe(false);
  });
});
