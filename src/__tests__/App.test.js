import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import App from '../App';

describe('<App />', () => {
    it('should mount with total of 0', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.state().total).to.equal(0);
    });
    it('should update total when a numeric button is clicked first', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        expect(wrapper.state().total).to.equal('2');
    });
    it('should update total when a operator button is clicked first and then a numeric', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--operator').at(1).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('-5');
    });
    it('should construct two digit numbers', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--numeric').at(0).simulate('click');
        expect(wrapper.state().numberToOperateWith).to.equal('20');
    });
    it('should construct one digit number if 0 is pressed first', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(0).simulate('click');
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        expect(wrapper.state().numberToOperateWith).to.equal('2');
    });
    it('should return total when equals is clicked', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--numeric').at(0).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().numberToOperateWith).to.equal('20');
    });
    it('should return total when equals is clicked multiple times', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--numeric').at(0).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().numberToOperateWith).to.equal('20');
    });
    it('should handle basic addition', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--operator').at(0).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('7');
    });
    it('should continue to process basic addition is equals is pressed multiple times', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--operator').at(0).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('17');
    });
    it('should handle basic subtraction', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--operator').at(1).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('-3');
    });
    it('should process basic subtraction when equals is pressed multiple times', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--operator').at(1).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('-13');
    });
    it('should handle basic multiplication', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--operator').at(2).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('10');
    });
    it('should process basic multiplication when equals is pressed multiple times', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--operator').at(2).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('250');
    });
    it('should handle basic division', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--numeric').at(0).simulate('click');
        wrapper.find('.calc__button--operator').at(3).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('4');
    });
    it('should process basic division when equals is pressed multiple times', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(3).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('0.2');
    });
    it('should reset all states when \'C\' is clicked', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(0).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(2).simulate('click');
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--operator').at(5).simulate('click');
        expect(wrapper.state().total).to.equal(0);
        expect(wrapper.state().lastButtonType).to.equal(null);
        expect(wrapper.state().operator).to.equal(null);
        expect(wrapper.state().operatorPrevious).to.equal(null);
        expect(wrapper.state().numberToOperateWith).to.equal(null);
    });
    it('should update total and numberToOperateWith state when operator is clicked', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(0).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(3).simulate('click');
        expect(wrapper.state().total).to.equal('10');
        expect(wrapper.state().numberToOperateWith).to.equal(5);
    });
    it('should not error when a number button is followed by equals after init', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('5');
    });
});

describe('<App /> chained equations', () => {
    it('(5 + 5) x 2 should equal 20', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(0).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(2).simulate('click');
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('20');
    });
    it('(5 + 5) (then cancelled) x 2 should equal 0', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(0).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(2).simulate('click');
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('0');
    });
    it('(5 + 5) x 2 divided by 5 should equal 4', () => {
        const wrapper = mount(<App/>);
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(0).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(2).simulate('click');
        wrapper.find('.calc__button--numeric').at(2).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        wrapper.find('.calc__button--operator').at(3).simulate('click');
        wrapper.find('.calc__button--numeric').at(5).simulate('click');
        wrapper.find('.calc__button--operator').at(4).simulate('click');
        expect(wrapper.state().total).to.equal('4');
    });
});
