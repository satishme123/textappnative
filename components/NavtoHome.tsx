import React from 'react';
import {Button, Text, View} from 'react-native';
import Datetimepicker from './Datetimepicker';
import Imagepicker from './ImagePicker';
const NavtoHome = (props: any) => {
  return (
    <>
      <View style={{margin: 10}}>
        <Text>Login</Text>

        <Button
          title="Go To Home Page"
          onPress={() => props.navigation.navigate('home')}
        />
      </View>
      <View style={{margin: 80}}>
        <Imagepicker />
      </View>
      <View>
        <Datetimepicker />
      </View>
    </>
  );
};
export default NavtoHome;
