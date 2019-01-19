import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon'
import App from '../App';
import Buttons from "./Buttons.test";


describe('<App />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
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
});

//
// const node = this.button;
// ReactTestUtils.Simulate.click(node);