import React from 'react';
import { shallow } from 'enzyme';
import Controls from './index';

const baseProps = {
  controls: [{ text: '+', onClick: () => {} }],
};

it('matches previous snapshot', () => {
  const tree = shallow(<Controls {...baseProps} />);
  expect(tree).toMatchSnapshot();
});
