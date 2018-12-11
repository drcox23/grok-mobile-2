import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

// screens
import Home from '../Home/Home.js'
import Auth from './AuthTabNavigator'
// import MainTabNavigator from './MainTabNavigator';

// loading screen for app
class AppLoadingScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: true
    }

  }
  // Fetch the token from storage then navigate to our appropriate place
  componentDidMount () {
    const userToken = AsyncStorage.getItem('userToken');
    console.log("token", userToken)

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(!this.state.isAuthenticated ? 'Auth' : 'Home');
    };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AppLoad: AppLoadingScreen,
  Auth: Auth,
  Home: Home,
  // Main: MainTabNavigator,
},
{initialRouteName: 'AppLoad',}
));

export default AppNavigator;