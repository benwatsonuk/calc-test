import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import App from '../App';

describe('Index page', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });
});