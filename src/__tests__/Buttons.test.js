import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon'
import Buttons from '../components/Buttons';

describe('<Buttons />', () => {
    it('renders the 16 buttons', () => {
        const wrapper = shallow(<Buttons />);
        expect(wrapper.find('.calc__button')).to.be.lengthOf(15);
    })

    // @todo tests for onClick events
});

