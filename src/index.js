import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import { Provider } from 'react-redux'

import portfolioApp from './reducers/reducers'

// Styles
import './index.css';

// App
import App from './App';
import registerServiceWorker from './registerServiceWorker';


let store = createStore(portfolioApp, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
