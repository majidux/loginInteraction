import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home2 from "./src2/Pages/Home2";


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Home2/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
