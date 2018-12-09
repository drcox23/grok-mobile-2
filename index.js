import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/App.js';

// redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers/'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

// Amplify
import config from './src/aws-exports.js'
import Amplify from 'aws-amplify'
Amplify.configure(config);

// App
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
AppRegistry.registerComponent('grok-mobile', () => ReduxApp);