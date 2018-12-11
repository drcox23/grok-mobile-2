import React  from 'react'
import { View } from 'react-native'
// import { AppRegistry } from 'react-native';
import GettingStarted from './src/screens/GetStarted.js';

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import combineReducer from './src/reducers/reducers'
import thunk from 'redux-thunk'

// Amplify
import { Authenticator } from 'aws-amplify-react-native'
import config from './aws-config.js'
import Amplify from 'aws-amplify'
Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: config.identityPoolId, 
    // REQUIRED - Amazon Cognito Region
    region: config.region, 
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: config.userPoolId,
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: config.userPoolWebClientId, 
  }
});



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