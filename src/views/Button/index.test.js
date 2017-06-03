import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

const baseProps = {
  onClick: () => {},
  text: '2',
};

it('matches previous snapshot', () => {
  const tree = shallow(<Button {...baseProps} />);
  expect(tree).toMatchSnapshot();
});

it('calls the onClick callback', () => {
  const mock = jest.fn();
  const props = Object.assign({}, baseProps, { onClick: mock });
  const comp = shallow(<Button {...props} />);
  comp.simulate('click');
  expect(mock).toHaveBeenCalled();
});
