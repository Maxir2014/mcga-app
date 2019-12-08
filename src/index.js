import React from 'react';
import ReactDOM from 'react-dom';
import { store } from "./Utils";
import { App }  from './Components/App';
import { Provider } from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);

