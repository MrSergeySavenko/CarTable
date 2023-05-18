import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';

import { setupStore } from './__data__/store';

import { Provider } from 'react-redux';

import { Cars } from './page/Cars';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <Cars />
    </Provider>
);
