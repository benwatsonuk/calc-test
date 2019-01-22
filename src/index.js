import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

if (process.env.NODE_ENV === 'development') {
    const a11y = require('react-a11y').default;
    a11y(React, ReactDOM, {
        rules: {
            'img-uses-alt': 'warn',
            'img-redundant-alt': [ 'warn', [ 'image', 'photo', 'foto', 'bild' ]],
            'aria-role': 'warn',
            'aria-unsupported-elements': 'warn',
            'click-events-have-key-events': 'warn',
            'hidden-uses-tabindex': 'warn',
            'interactive-supports-focus': 'warn',
            'label-has-for': 'warn',
            'mouse-events-have-key-events': 'warn',
            'no-access-key': 'warn',
            'no-hash-ref': 'warn',
            'no-onchange': 'warn',
            'onclick-uses-role': 'warn',
            'tabindex-no-positive': 'warn',
            'tabindex-uses-button': 'warn'
        }
    });
}

ReactDOM.render(<App />, document.getElementById('root'));
