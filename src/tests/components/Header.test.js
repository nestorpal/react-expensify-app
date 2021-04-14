// REACT TEST RENDER 

// import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
// import Header from '../../components/Header';

// test('Should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

// ******************************************
// ENZYME

import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';


test('Should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);

    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});