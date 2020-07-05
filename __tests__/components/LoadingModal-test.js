/**
 * @format
 */

import 'react-native';
import React from 'react';
import LoadingModal from '../../src/components/loadingModal';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn()
}));

it('renders correctly', () => {
  renderer.create(<LoadingModal />);
});
