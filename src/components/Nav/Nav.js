import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import Home from '../../screens/Home/Home.js'


const StackNav = createStackNavigator({
  Home: Home
})

// class Nav extends React.Component {
//   render() {
//     return (
//       <StackNav />
//     )
//   }
// }

export default createBottomTabNavigator({
  StackNav
})