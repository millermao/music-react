import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from "react-router-dom";
import initReactFastclick from 'react-fastclick';
import {Provider} from 'react-redux';
import store from './store/store';

initReactFastclick()//解决移动端点击延迟

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>,document.getElementById('root')
)
registerServiceWorker();


