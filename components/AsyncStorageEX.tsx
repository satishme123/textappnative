import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const AsyncStorageEX = () => {
  const [state, setState] = useState('');
  const setData = async () => {
    await AsyncStorage.setItem('name', 'satish');
  };
  const getData = async () => {
    const name: any = await AsyncStorage.getItem('name');
    setState(name);
  };
  const removeData = async () => {
    await AsyncStorage.removeItem('name');
    setState('');
  };
  return (
    <View>
      <Text>{state}</Text>
      <Button title="setData" onPress={setData} />
      <Button title="getData" onPress={getData} />
      <Button title="removeData" onPress={removeData} />
    </View>
  );
};

export default AsyncStorageEX;
