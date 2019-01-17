import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon'
import operators from '../logic/operations';

describe('operators()', () => {
    // @todo capture errors thrown for missing arguments
    // it('should fail if no numbers are passed as arguments', () => {
    //     const operations = operators();
    //     expect(operations).to.throw.object;
    // })
    it('should add two simple numbers together', () => {
        const operations = operators(1,2,'plus');
        expect(operations).to.equal('3');
    })
    it('should subtract two simple numbers', () => {
        const operations = operators(3,2,'minus');
        expect(operations).to.equal('1');
    })
    it('should multiply two simple numbers', () => {
        const operations = operators(2,2,'multiply');
        expect(operations).to.equal('4');
    })
    it('should divide two simple numbers', () => {
        const operations = operators(4,2,'divide');
        expect(operations).to.equal('2');
    })
});