import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

const baseProps = {
  currentValue: 42,
};

it('matches previous snapshot', () => {
  const tree = shallow(<App {...baseProps} />);
  expect(tree).toMatchSnapshot();
});
