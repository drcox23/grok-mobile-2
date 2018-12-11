import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SignIn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SIGN IN SCREEN</Text>
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

export default SignIn