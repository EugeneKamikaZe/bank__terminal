import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import {Provider} from "react-redux";
import {store} from "./store"
import {SnackbarProvider} from "notistack";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </SnackbarProvider>
    </Provider>,
    document.getElementById('root')
);

