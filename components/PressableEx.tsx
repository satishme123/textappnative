import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
const PressableButtn = () => {
  return (
    <>
      <View>
        <Pressable
          onPress={() => {
            console.warn('press');
          }}
          onLongPress={() => {
            console.warn('long');
          }}
          onPressIn={() => {
            console.warn('press in');
          }}
          onPressOut={() => {
            console.warn('press out');
          }}>
          <Text style={styles.pressableBtn}></Text>
        </Pressable>
      </View>
    </>
  );
};
export default PressableButtn;

const styles = StyleSheet.create({
  pressableBtn: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
