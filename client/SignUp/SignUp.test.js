import React from 'react';
import { shallow, mount } from 'enzyme';

import SignUp from './SignUp';


describe('SignUp component', () => {
  const setUserData = jest.fn();
  const authenticateUser = jest.fn();
  const props = {
    setUserData,
    authenticateUser,
    in: true
  };
  const wrapper = mount(<SignUp {...props} />);


  it('serializes form and composes a userDate object', () => {
    const state = {
      name: 'denis',
      secondName: ' volok ',
      avatar: 2
    };
    const expectedUserData = {
      name: 'Denis',
      secondName: 'Volok',
      fullName: 'Denis Volok',
      avatar: 2
    };


    wrapper.setState(state);
    wrapper.find('form').simulate('submit');

    const userData = setUserData.mock.calls[0][0];

    expect(userData).toEqual(expect.objectContaining(expectedUserData));
  });
});
