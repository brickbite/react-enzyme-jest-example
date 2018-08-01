import React from 'react';
import Placeholder from './Placeholder';

// snapshot tests
// refer to __snapshots__ folder for relevant snapshots
import renderer from 'react-test-renderer';
import { retOne as funcOne } from './Placeholder';
import { retVar as funcVar } from './Placeholder';

import * as PlaceholderStuff from './Placeholder';
it('imported correctly', () => {
  expect(funcOne).toEqual(PlaceholderStuff.retOne);
  expect(funcVar).toEqual(PlaceholderStuff.retVar);
});

it('renders correctly', () => {
  const tree = renderer.create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(funcOne()).toEqual(1);
  expect(funcVar(23)).toEqual(23);
  expect(funcVar('aa')).toEqual('aa');
  const someObj = {};
  expect(funcVar(someObj)).toEqual(someObj);
});

