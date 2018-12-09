import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// redux
import { connect } from 'react-redux'

// Auth configurations
import Amplify, { Auth } from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

//Start Screens
import GettingStarted from './screens/GetStarted.js'


 class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <GettingStarted />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const mapStateToProps = state => ({
//   auth: state.auth
// })

export default connect(App)