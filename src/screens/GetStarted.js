import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

// redux
import { connect } from 'react-redux'

// Auth configurations
import Amplify, { Auth } from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

//Start Screens
import Tabs from './Auth/Tabs.js'
import Nav from '../components/Nav/Nav.js'


class GettingStarted extends React.Component {
  state = {
    user: {},
    isLoading: true
  }

  async componentDidMount() {
    StatusBar.setHidden(true)
    const user = await Auth.currentAuthenticatedUser()
      .then(data => {
        console.log("component mount on started screen", data)
        this.setState({ user, isLoading: false })
      })  
      .catch(err => {
        console.log("Auth erron on mount", err)
        this.setState({ isLoading: false })
      })
  }

  async componentWillReceiveProps(nextProps) {
     const user = await Auth.currentAuthenticatedUser()
      .then(data => {
        console.log("will mount Auth data", data)
        this.setState({ user })
      })
      .catch(err => {
        console.log("will mount Auth error", err)
      this.setState({ user: {} })
      })
  }

  render() {
    if (this.state.isLoading) return null
    let loggedIn = false
    if (this.state.user.username) {
      loggedIn = true
    }
    if (loggedIn) {
      return (
        <Nav />
      )
    }
    return (
      <Tabs />
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(GettingStarted)


