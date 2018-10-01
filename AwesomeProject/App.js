import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
        <View style={styles.redbox} />
        <View style={styles.bluebox} />
        <View style={styles.blackbox} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 600
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  },
});
