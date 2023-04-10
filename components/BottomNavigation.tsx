import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Datetimepicker from './Datetimepicker';
import Imagepicker from './ImagePicker';
import Home from './Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import ApiFetch from './Apicall';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="dashboard" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyTasks"
        component={Datetimepicker}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="tasks" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Timesheet"
        component={Imagepicker}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="clock-o" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ApiFetch}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
