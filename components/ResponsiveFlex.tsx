import React from 'react';
import {StyleSheet, View} from 'react-native';
const Responsive = () => {
  return (
    <>
      <View style={styles.container1}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
      </View>
      <View style={styles.container2}></View>
      <View style={styles.container3}></View>
    </>
  );
};
export default Responsive;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  box1: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box2: {
    flex: 1,
    backgroundColor: 'orange',
  },
  box3: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
