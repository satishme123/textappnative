import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import ApiFetch from './Apicall';
import BottomSheetComp from './Bottomsheet';
import Home from './Home';
import ProjectChat from './Projectchat/ProjectChat';

const Tab = createMaterialTopTabNavigator();

const TopTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="ProjectChat"
      screenOptions={{
        tabBarItemStyle: {
          width: 'auto',
          alignItems: 'flex-start',
        },
        tabBarLabelStyle: {
          textTransform: 'none',
          fontWeight: '500',
        },
        tabBarScrollEnabled: true,
      }}>
      <Tab.Screen
        name="ProjectChat"
        component={ProjectChat}
        options={{title: 'Project chat'}}
      />
      <Tab.Screen
        name="clientChat"
        component={ApiFetch}
        options={{title: 'Client chat'}}
      />
      <Tab.Screen name="Tasks" component={Home} options={{title: 'Tasks'}} />
      <Tab.Screen
        name="Overview"
        component={ApiFetch}
        options={{title: 'Overview'}}
      />
      <Tab.Screen
        name="Bottomsheet"
        component={BottomSheetComp}
        options={{title: 'Bottomsheet'}}
      />
    </Tab.Navigator>
  );
};

export default TopTabNav;
