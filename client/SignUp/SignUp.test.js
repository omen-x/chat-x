import React from 'react';
import { shallow, mount } from 'enzyme';

import SignUp from './SignUp';


describe('SignUp component', () => {
  const signupUser = jest.fn();
  const showLoader = jest.fn();
  const hideLoader = jest.fn();
  const hideFormError = jest.fn();
  const props = {
    signupUser,
    showLoader,
    hideLoader,
    hideFormError,
    in: true,
    errorMessage: '',
    loading: false
  };
  const wrapper = mount(<SignUp {...props} />);
  const form = wrapper.find('form');

  it('validates form fields', () => {
    const state = {
      fields: {
        name: '',
        email: ' denis.omen.x@gmail.com ',
        password: '',
        avatar: 2
      }
    };
    const expectedState = {
      name: true,
      email: false,
      password: true,
      avatar: false
    };

    wrapper.setState(state, () => {
      form.simulate('submit');
    });

    expect(wrapper.state('errors')).toEqual(expectedState);
  });


  it('calls signupUser after successful validation', () => {
    const correctFilds = {
      fields: {
        name: 'Denis',
        email: ' denis.omen.x@gmail.com ',
        password: 'pwd',
        avatar: 2
      },
      errors: {
        name: false,
        email: false,
        password: false,
        avatar: false
      }
    };
    const expectedCorrectState = {
      name: false,
      email: false,
      password: false,
      avatar: false
    };
    const expectedUserData = 'name=Denis&email=denis.omen.x%40gmail.com&password=pwd&avatar=2';

    // correct fields
    wrapper.setState(correctFilds, () => {
      form.simulate('submit');
    });
    expect(wrapper.state('errors')).toEqual(expectedCorrectState);


    // arguments from signupUser call
    const userData = signupUser.mock.calls[0][0];

    expect(userData).toBe(expectedUserData);
  });
});
