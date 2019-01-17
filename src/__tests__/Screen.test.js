import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon'
import Screen from '../components/Screen';

describe('<Screen />', () => {
    it('renders a screen with prop (total) value', () => {
        const wrapper = shallow(<Screen total="10"/>);
        expect(wrapper.find('.screen')).to.have.lengthOf(1);
        expect(wrapper.props().children).to.equal('10');
    })
});