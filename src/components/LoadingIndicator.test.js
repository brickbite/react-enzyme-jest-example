import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { mount } from 'enzyme';
import LoadingIndicator from './LoadingIndicator'

configure({ adapter: new Adapter() })

describe('LoadingIndicator', () => {
  describe('when isLoading is false', () => {
    it('should render children', () => {
      const wrapper = mount(
        <LoadingIndicator isLoading={false}>
          <div>ahoy!</div>
        </LoadingIndicator>
      );
      expect(wrapper.html()).toEqual('<div>ahoy!</div>');
      wrapper.unmount();
    });
  });
});
