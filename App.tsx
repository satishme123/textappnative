// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import Home from './components/Home';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import ApiFetch from './components/Apicall';
// import Todolist from './components/Todo/Todolist';
// import NavtoHome from './components/NavtoHome';
// import LoginPage from './components/LoginPage';

// const Tab = createMaterialTopTabNavigator();

// const App = () => {
//   return (
//     <>
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Login" component={LoginPage} />
//           <Tab.Screen name="Nav" component={NavtoHome} />
//           <Tab.Screen name="home" component={Home} />
//           <Tab.Screen name="Api" component={ApiFetch} />
//           <Tab.Screen name="Todo" component={Todolist} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };

// export default App;

import {StyleSheet, View} from 'react-native';
import StackNav from './components/StackNav';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.gestureViewContainer}>
      <View style={{flex: 1}}>
        <StackNav />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureViewContainer: {
    flex: 1,
  },
  saveAreaViewContainer: {
    flex: 1,
  },
});
export default App;
