import React from 'react';
import renderer from 'react-test-renderer';
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
});
