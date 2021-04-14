import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';

let history, wrapper;

beforeEach(() => {
    history = { push: jest.fn() };
    wrapper = shallow(<Login history={history} />);
});

test('Should render Login correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should call startlogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<Login startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});