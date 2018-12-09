import React from 'react'
// import { AppRegistry } from 'react-native';
import  GettingStarted  from './src/screens/GetStarted.js';

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import combineReducer from './src/reducers/reducers.js'
import thunk from 'redux-thunk'

// Amplify
import config from './src/aws-exports.js'
import Amplify from 'aws-amplify'
Amplify.configure(config);



const store = createStore(combineReducer, applyMiddleware(thunk));


// App
class App extends React.Component{
 render(){
   return(
  <Provider store={store}>
    <GettingStarted />
  </Provider>
    )
  }
}

// AppRegistry.registerComponent('grok-mobile', () => ReduxApp);
export default App