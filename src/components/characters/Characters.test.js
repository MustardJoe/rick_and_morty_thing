import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters component test', () => {
  it('renders the Characters comp', () => {
    const characters = [
      {
        name: 'morthy',
        status: 'dead',
        species: 'five dead',
        image: '/image',
      },
      {
        name: 'barnman the bat barn man',
        status: 'berry much alive',
        species: 'the regular',
        image: '/fivepics',
      }
    ];

    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
