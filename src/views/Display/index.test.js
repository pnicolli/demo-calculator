import React from 'react';
import { shallow } from 'enzyme';
import Display from './index';

it('matches previous snapshot', () => {
  const tree = shallow(<Display value="42" />);
  expect(tree).toMatchSnapshot();
});
