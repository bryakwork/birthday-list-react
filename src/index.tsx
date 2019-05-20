import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BirthdayStore from "./model";

const store = BirthdayStore.create({
        records: {
            '1': {
                id: '1',
                birthday: 529499901000,
                firstName: 'Bob',
                lastName: 'Snail',
            },
            '2': {
                id: '2',
                birthday: 629499901000,
                firstName: 'Jeff',
                lastName: 'Kerman',
            },
            '3': {
                id: '3',
                birthday: 999306301000,
                firstName: 'Jared',
                lastName: 'Brakka',
            },
            '4': {
                id: '4',
                birthday: 856311838000,
                firstName: 'Vez',
                lastName: 'Lachetti',
            },
            '5': {
                id: '5',
                birthday: 771121438000,
                firstName: 'Ron',
                lastName: 'Largan',
            },
        }
    }
);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
