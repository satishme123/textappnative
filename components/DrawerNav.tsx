import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import FilePickerComp from './FilePickerComp';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="home" component={Home} />
          <Drawer.Screen name="Fileupload" component={FilePickerComp} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default DrawerNav;
