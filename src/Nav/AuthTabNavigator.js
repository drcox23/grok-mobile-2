import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

//screens
import SignIn from '../screens/SignIn/SignIn.js'
import SignUp from '../screens/SignUp/SignUp.js'

// component 
import TabBarIcon from '../components/TabBarIcon.js'

const SignInStack  = createStackNavigator({
  SignIn: SignIn,
})

SignInStack.navigationOptions = {
  // nav button icons and options can go here
  tabBarLabel: 'SignIn',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}


const SignUpStack = createStackNavigator({
  SignUp: SignUp
})

SignUpStack.navigationOptions = {
  // nav button icons and options can go here
  tabBarLabel: 'SignUp',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

const AuthNav = createBottomTabNavigator({
  SignIn: SignInStack,
  SignUp: SignUpStack
})

export default createAppContainer(AuthNav)
  