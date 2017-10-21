import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Configurator from './Configurator';
import testFacets from '../../Utils/testUtils';

Enzyme.configure({ adapter: new Adapter() });

const uiState = {
  selectedFacetId: 'size',
};

describe('Configurator tests', () => {
  it('basic snapshot', () => {
    const tree = renderer.create(
      <Configurator
        facets={testFacets.data}
        selections={testFacets.selections}
        ui={uiState}
        getOptionDescription={facetId => `*** ${facetId}`}
        getConfiguredPrice={() => 500}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render a section for each facet', () => {
    const wrapper = mount(
      <Configurator
        facets={testFacets.data}
        selections={testFacets.selections}
        ui={uiState}
        getOptionDescription={facetId => `*** ${facetId}`}
        getConfiguredPrice={() => 500}
      />,
    );

    expect(wrapper.find('.collapsible > li')).toHaveLength(Object.keys(testFacets.data).length);
  });

  it('should render with selected facet open', () => {
    const wrapper = mount(
      <Configurator
        facets={testFacets.data}
        selections={testFacets.selections}
        ui={uiState}
        getOptionDescription={facetId => `*** ${facetId}`}
        getConfiguredPrice={() => 500}
      />,
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
        facets={testFacets.data}
        selections={testFacets.selections}
        ui={uiState}
        getOptionDescription={facetId => `*** ${facetId}`}
        getConfiguredPrice={() => 500}
        onSectionChange={onSectionClick}
      />,
    );

    const section = wrapper.find('.collapsible-header').at(sectionToClick - 1);
    section.simulate('click');

    expect(onSectionClick.mock.calls).toHaveLength(1);
    expect(onSectionClick.mock.calls[0][0]).toBe('groupset');
  });
});
