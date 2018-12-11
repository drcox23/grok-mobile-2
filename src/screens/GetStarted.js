import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

// redux
import { connect } from 'react-redux'

// Auth configurations
import Amplify, { Auth } from 'aws-amplify'
import { Authenticator } from 'aws-amplify-react-native'


//Start Screens
import Tabs from './Auth/Tabs.js'
import Nav from '../components/Nav/Nav.js'
import Home from './Home/Home'


class GettingStarted extends React.Component {
  state = {
    username: {},
    isLoading: true,
    isAuthenticated: false
  }

  componentDidMount() {
    StatusBar.setHidden(true)
    Auth.currentUserInfo()
      .then(data => {
        console.log("component mount on started screen", data)
      })
      .then(data => {
        console.log("can i see this?", data)
        if(data.username){
        this.setState({ username: data.username, isLoading: false, isAuthenticated: true })
        } else {
          console.log("HUH", this.state)
          return this.state
        }
      })  
      .catch(err => {
        console.log("Auth erron on mount", err)
        this.setState({ isLoading: false })
      })
  }

  componentWillReceiveProps(nextProps) {
     const user = Auth.currentAuthenticatedUser()
      .then(data => {
        // console.log("will mount Auth data", data)
        this.setState({ user })
      })
      .catch(err => {
        console.log("will mount Auth error", err)
      this.setState({ user: {} })
      })
  }

  render() {
    return (
        <View>
          <Home />
            {/* <Tabs /> */}
        {/* <Text>ALOHA!!!!!!!!!!!!!!!!!!</Text> */}
        
        </View>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(GettingStarted)


