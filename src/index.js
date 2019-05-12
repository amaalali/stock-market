import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


// TODO: Change unregister() to register() to enable installation and offline work.
// TL;DR on service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
