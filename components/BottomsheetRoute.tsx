import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Dashboard from './Dashboard';

const Stack = createNativeStackNavigator();

const ProjectInsightsBottomSheetRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Info"
      screenOptions={{
        animation: 'none',
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Imagpicker" component={Dashboard} />
      {/* <Stack.Screen
        name="MemberDetails"
        component={MemberDetails}
        options={{headerTitle: 'Member details'}}
      />
      <Stack.Screen
        name="ProjectMediaFiles"
        component={ProjectMediaFiles}
        options={{headerTitle: 'Media, files, docs'}}
      /> */}
    </Stack.Navigator>
  );
};

export default ProjectInsightsBottomSheetRoutes;
