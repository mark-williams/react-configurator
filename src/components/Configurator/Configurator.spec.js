import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
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

    expect(wrapper.find('.collapsible > li')).toHaveLength(testFacets.length);
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

  it('should call back on change of section', () => {
    const sectionToClick = 2;
    const onSectionClick = jest.fn();
    const wrapper = mount(
      <Configurator
        facets={testFacets}
        ui={uiState}
        getOptionDescription={facetId => `*** ${facetId}`}
        getConfiguredPrice={() => 500}
        onSectionChange={onSectionClick}
      />
    );

    const section = wrapper.find('.collapsible-header').at(sectionToClick - 1);
    section.simulate('click');

    expect(onSectionClick.mock.calls).toHaveLength(1);
    expect(onSectionClick.mock.calls[0][0]).toBe(sectionToClick);
  });
});
