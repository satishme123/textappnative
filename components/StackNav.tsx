// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import React from 'react';
// import {Button} from 'react-native';
// import Home from './Home';
// import NavtoHome from './NavtoHome';

// const Stack = createNativeStackNavigator();

// const StackNav = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: 'gray',
//           },
//           headerTintColor: 'orange',
//           headerTitleStyle: {
//             fontSize: 25,
//           },
//         }}>
//         <Stack.Screen
//           name="NavtoHome"
//           component={NavtoHome}
//           options={{
//             headerTitle: () => <Button title="left" />,
//             headerRight: () => <Button title="right" />,
//             title: 'User Login',
//             headerStyle: {
//               backgroundColor: 'skyblue',
//             },
//             headerTintColor: 'black',
//             headerTitleStyle: {
//               fontSize: 30,
//             },
//           }}
//         />
//         <Stack.Screen name="home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default StackNav;

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigation from './BottomNavigation';
import BottomSheetComp from './Bottomsheet';
import LoginPage from './LoginPage';
import TopTabNav from './TopTabNav';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={BottomNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Topnav"
          component={TopTabNav}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Bottomsheet"
          component={BottomSheetComp}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
