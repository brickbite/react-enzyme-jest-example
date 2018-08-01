import React from 'react';
import Items from './Items';

// snapshot tests
// refer to __snapshots__ folder for relevant snapshots
import renderer from 'react-test-renderer';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Items />).toJSON();
  expect(tree.type).toEqual('span');
  expect(tree.children.length).toEqual(1);
  expect(tree.children[0]).toEqual('No items in list');
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there is 1 item', () => {
  const items = ['one'];
  const tree = renderer.create(<Items items={items}/>).toJSON();
  expect(tree.children.length).toEqual(1);
  expect(tree.children[0]).toEqual('one');
  expect(tree.type).toEqual('span');
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there is more than 1 item', () => {
  const items = ['one', 'two', 'three'];
  const tree = renderer.create(<Items items={items}/>).toJSON();
  expect(tree.children.length).toEqual(items.length);
  expect(tree.type).toEqual('ul');
  expect(tree).toMatchSnapshot();
});

