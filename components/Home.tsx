// import React from 'react';
// import {Text, View} from 'react-native';
// // import Datetimepicker from './Datetimepicker';
// import DrawerNavigation from './DrawerNavigation';
// // import Imagepicker from './ImagePicker';
// const Home = () => {
//   return (
//     <>
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text style={{fontSize: 30}}>
//           {/* <Datetimepicker />
//           <Imagepicker /> */}
//           <DrawerNavigation />
//         </Text>
//       </View>
//     </>
//   );
// };
// export default Home;
import React, {useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const menus = [
  {
    icon: '',
    title: 'home',
  },
  {icon: '', title: 'explore'},
  {icon: '', title: 'library'},
  {icon: '', title: 'friends'},
  {icon: '', title: 'chat'},
];
// import Imagepicker from './ImagePicker';
const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(0)).current;
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#6600ff',
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/8777/8777583.png',
              }}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                marginLeft: 20,
                marginTop: 10,
              }}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{fontSize: 22, color: '#fff'}}>User</Text>
              <Text style={{fontSize: 12, color: '#fff'}}>DEsign By me</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <FlatList
            data={menus}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 150,
                    height: 55,
                    marginLeft: 5,
                    marginTop: 30,
                    backgroundColor:
                      selectedMenuItem === index ? '#6600ff' : '#fff',
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    setSelectedMenuItem(index);
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 25,
                      marginTop: 5,
                      color: selectedMenuItem === index ? '#fff' : 'black',
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Animated.View
          style={{
            flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'white',
            transform: [{scale: scale}, {translateX: moveToRight}],
            borderRadius: showMenu ? 15 : 0,
          }}>
          <View style={{flexDirection: 'row', marginTop: 50}}>
            <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() => {
                Animated.timing(scale, {
                  toValue: showMenu ? 1 : 0.6,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                Animated.timing(moveToRight, {
                  toValue: showMenu ? 0 : 180,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                setShowMenu(!showMenu);
              }}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8djTp2dexzIhrQpT78aAzmPR7Wrw5h8eHcQ&usqp=CAU',
                }}
                style={{width: 100, height: 100}}
              />
            </TouchableOpacity>
            <Text style={{marginLeft: 20, fontSize: 30, color: 'pink'}}>
              {menus[selectedMenuItem].title}
            </Text>
          </View>
        </Animated.View>
      </View>
    </>
  );
};
export default Home;
