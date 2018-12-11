import React from 'react'
// import { AppRegistry } from 'react-native';
import  App  from './src/App';

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { combineReducer } from './src/reducers/reducers.js'
import thunk from 'redux-thunk'

// Amplify
import config from './aws-config.js'  
import Amplify from 'aws-amplify'
Amplify.configure(config);





const store = createStore(combineReducer, applyMiddleware(thunk));


// App
class RootComponent extends React.Component{
 render(){
   return(
  <Provider store={store}>
    <App />
  </Provider>
    )
  }
}

// AppRegistry.registerComponent('grok-mobile', () => ReduxApp);
export default RootComponent