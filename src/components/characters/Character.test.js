import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character comp test', () => {
  it('renders a character', () => {
    const character = {
      name: 'morthy',
      status: 'dead',
      species: 'klingon',
      image: '/image'
    };

    const wrapper = shallow(<Character character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
