import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { AzureAD } from 'react-aad-msal';

import { authProvider } from './auth/authProvider';
import { Provider } from "react-redux";

import { createStore } from 'redux';
import rootReducer from "./reducers/index";

const store = createStore(rootReducer)

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <AzureAD
            provider={authProvider}
            reduxStore={store}
            forceLogin={true}>
            <BrowserRouter basename={baseUrl}>
                <App />
            </BrowserRouter>
        </AzureAD>
    </Provider>,
    rootElement);

registerServiceWorker();

