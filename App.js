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
import config from './src/aws-exports.js'
import Amplify from 'aws-amplify'
Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'cognito15eca626_identitypool_15eca626', 
    // REQUIRED - Amazon Cognito Region
    region: 'us-west-2', 
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-west-2_y4Nh2Bq2V',
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: '47jjnqt5san9isfcmqddl32ajj', 
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