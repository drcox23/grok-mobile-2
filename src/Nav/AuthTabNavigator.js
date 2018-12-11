import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

//screens
import SignIn from '../screens/SignIn/SignIn.js'
import SignUp from '../screens/SignUp/SignUp.js'

const SignInStack  = createStackNavigator({
  SignIn: SignIn,
})

SignInStack.navigationOptions = {
  // nav button icons and options can go here
  tabBarLabel: 'SignIn'
}


const SignUpStack = createStackNavigator({
  SignUp: SignUp
})

SignUpStack.navigationOptions = {
  // nav button icons and options can go here
  tabBarLabel: 'SignUp'
}

export default createBottomTabNavigator({
  SignInStack,
  SignUpStack,
})