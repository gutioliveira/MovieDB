/**
 * @format
 */

import 'react-native';
import React from 'react';
import Details from '../../src/pages/details';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import * as redux from 'react-redux'

const spy = jest.spyOn(redux, 'useSelector');
spy.mockImplementation(state => ({}));


it('renders correctly', () => {
    renderer.create(<Details />);
});
