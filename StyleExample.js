import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Creates function
// const LotsOfStyles = () => {
export default function LotsOfStyles() {

  //Returns some text with style types attached
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

//Creates a stylesheet (like CSS)
const styles = StyleSheet.create({
  container: {
    //Remember camelCase
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});