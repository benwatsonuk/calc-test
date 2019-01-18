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
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should mount with total of 0', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().total).to.equal(0);
  });
  it('should update total when a numeric button is clicked first', () => {
    const wrapper = mount(<App />);
    wrapper.find('.calc__button--numeric').at(2).simulate('click');
    expect(wrapper.state().total).to.equal(2);
  });
  it('should update total when a operator button is clicked first and then a numeric', () => {
    const wrapper = mount(<App />);
    wrapper.find('.calc__button--operator').at(1).simulate('click');
    wrapper.find('.calc__button--numeric').at(5).simulate('click');
    wrapper.find('.calc__button--operator').at(4).simulate('click');
    expect(wrapper.state().total).to.equal('-5');
  });
  it('should handle basic addition', () => {
    const wrapper = mount(<App />);
    wrapper.find('.calc__button--numeric').at(2).simulate('click');
    wrapper.find('.calc__button--operator').at(0).simulate('click');
    wrapper.find('.calc__button--numeric').at(5).simulate('click');
    wrapper.find('.calc__button--operator').at(4).simulate('click');
    expect(wrapper.state().total).to.equal('7');
  });
  it('should handle basic subtraction', () => {
    const wrapper = mount(<App />);
    wrapper.find('.calc__button--numeric').at(2).simulate('click');
    wrapper.find('.calc__button--operator').at(1).simulate('click');
    wrapper.find('.calc__button--numeric').at(5).simulate('click');
    wrapper.find('.calc__button--operator').at(4).simulate('click');
    expect(wrapper.state().total).to.equal('-3');
  });
  it('should handle basic multiplication', () => {
    const wrapper = mount(<App />);
    wrapper.find('.calc__button--numeric').at(2).simulate('click');
    wrapper.find('.calc__button--operator').at(2).simulate('click');
    wrapper.find('.calc__button--numeric').at(5).simulate('click');
    wrapper.find('.calc__button--operator').at(4).simulate('click');
    expect(wrapper.state().total).to.equal('10');
  });
  it('should handle basic division', () => {
    const wrapper = mount(<App />);
    wrapper.find('.calc__button--numeric').at(2).simulate('click');
    wrapper.find('.calc__button--numeric').at(0).simulate('click');
    wrapper.find('.calc__button--operator').at(3).simulate('click');
    wrapper.find('.calc__button--numeric').at(5).simulate('click');
    wrapper.find('.calc__button--operator').at(4).simulate('click');
    expect(wrapper.state().total).to.equal('4');
  });


  // @todo tests for onClick events
});

//
// const node = this.button;
// ReactTestUtils.Simulate.click(node);