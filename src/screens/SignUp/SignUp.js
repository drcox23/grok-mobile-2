import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SignUp extends React.Component {
  render() {
    console.log("SIGNUP")
    return (
      <View style={styles.container}>
        <Text>SIGN UP SCREEN</Text>
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

export default SignUp