
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/helpers/store.js';
import { App } from './App';

// setup fake backend
import { configureFakeBackend } from './redux/helpers/fakeBackend.js';
configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);