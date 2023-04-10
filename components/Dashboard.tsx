// import React, {useState} from 'react';
// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Collapsible from 'react-native-collapsible';

// const Dashboard = () => {
//   const [showmessage, setShowMessage] = useState(false);
//   const [showgroupsection, setShowgroupsection] = useState(false);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const privateMessages = [
//     {
//       name: 'Erich Seymark',
//       image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
//       unread: null,
//     },
//     {
//       name: 'Starr Bicheno',
//       image: 'http://dummyimage.com/24x24.png/dddddd/000000',
//       unread: null,
//     },
//     {
//       name: 'Town Cornillot',
//       image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
//       unread: null,
//     },
//     {
//       name: 'Lisha Koene',
//       image: 'http://dummyimage.com/24x24.png/5fa2dd/ffffff',
//       unread: null,
//     },
//     {
//       name: 'Dyann Goneau',
//       image: 'http://dummyimage.com/24x24.png/dddddd/000000',
//       unread: null,
//     },
//     {
//       name: 'Lesly Gyenes',
//       image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
//       unread: 7,
//     },
//     {
//       name: 'Carmine Cuppleditch',
//       image: 'http://dummyimage.com/24x24.png/5fa2dd/ffffff',
//       unread: null,
//     },
//     {
//       name: 'Pincas Klaus',
//       image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
//       unread: null,
//     },
//     {
//       name: 'Regina Cockburn',
//       image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
//       unread: null,
//     },
//     {
//       name: 'Carrissa Izzat',
//       image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
//       unread: 6,
//     },
//     {
//       name: 'Laetitia Pelz',
//       image: 'http://dummyimage.com/24x24.png/cc0000/ffffff',
//       unread: null,
//     },
//     {
//       name: 'Paige Odo',
//       image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
//       unread: null,
//     },
//     {
//       name: 'Elvera Amery',
//       image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
//       unread: 7,
//     },
//     {
//       name: 'Buck Duffin',
//       image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
//       unread: null,
//     },
//     {
//       name: 'Daisi Rhymer',
//       image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
//       unread: 15,
//     },
//     {
//       name: 'Alidia Gaynes',
//       image: 'http://dummyimage.com/24x24.png/5fa2dd/ffffff',
//       unread: null,
//     },
//     {
//       name: 'Alex Burry',
//       image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
//       unread: null,
//     },
//     {
//       name: "Dasya O'Halleghane",
//       image: 'http://dummyimage.com/24x24.png/dddddd/000000',
//       unread: null,
//     },
//     {
//       name: 'Alaine Townshend',
//       image: 'http://dummyimage.com/24x24.png/5fa2dd/ffffff',
//       unread: null,
//     },
//     {
//       name: 'Jacquelynn Leggan',
//       image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
//       unread: null,
//     },
//   ];

//   const projects = [
//     {
//       name: 'Dach-Friesen',
//       unreadClient: 0,
//       unreadInternal: 0,
//     },
//     {
//       name: 'Dare, Nikolaus and Bahringer',
//       unreadClient: 2,
//       unreadInternal: 1,
//     },
//     {
//       name: 'Friesen-Kemmer',
//       unreadClient: 2,
//       unreadInternal: 2,
//     },
//     {
//       name: 'Rohan Group',
//       unreadClient: 2,
//       unreadInternal: 9,
//     },
//     {
//       name: 'Koepp-Cruickshank',
//       unreadClient: 2,
//       unreadInternal: 2,
//     },
//     {
//       name: 'Botsford, Block and Osinski',
//       unreadClient: 0,
//       unreadInternal: 4,
//     },
//     {
//       name: 'Crist-Collier',
//       unreadClient: 1,
//       unreadInternal: 4,
//     },
//     {
//       name: 'Watsica Inc',
//       unreadClient: 2,
//       unreadInternal: 4,
//     },
//     {
//       name: 'Mertz-Walsh',
//       unreadClient: 2,
//       unreadInternal: 4,
//     },
//     {
//       name: 'Leannon and Sons',
//       unreadClient: 1,
//       unreadInternal: 5,
//     },
//     {
//       name: 'Hegmann, Koelpin and Zboncak',
//       unreadClient: 0,
//       unreadInternal: 8,
//     },
//     {
//       name: 'Balistreri Group',
//       unreadClient: 0,
//       unreadInternal: 9,
//     },
//     {
//       name: 'Leannon, Haley and Kozey',
//       unreadClient: 1,
//       unreadInternal: 3,
//     },
//     {
//       name: 'Kulas Inc',
//       unreadClient: 0,
//       unreadInternal: 6,
//     },
//     {
//       name: 'Wiza-Olson',
//       unreadClient: 1,
//       unreadInternal: 7,
//     },
//     {
//       name: 'Huel Group',
//       unreadClient: 1,
//       unreadInternal: 8,
//     },
//     {
//       name: 'McKenzie Group',
//       unreadClient: 2,
//       unreadInternal: 3,
//     },
//     {
//       name: 'Waelchi, Bode and Ondricka',
//       unreadClient: 0,
//       unreadInternal: 3,
//     },
//     {
//       name: 'Larkin LLC',
//       unreadClient: 0,
//       unreadInternal: 4,
//     },
//     {
//       name: 'Hoppe, Gutkowski and Johnston',
//       unreadClient: 2,
//       unreadInternal: 5,
//     },
//   ];
//   return (
//     <>
//       <ScrollView>
//         <View style={styles.container}>
//           <View style={styles.childcontainter}>
//             <View style={styles.headerItem}>
//               <Text style={styles.headertext}>Projects</Text>
//               <TouchableOpacity
//                 style={styles.Icon}
//                 onPress={() => setIsCollapsed(!isCollapsed)}>
//                 {isCollapsed ? (
//                   <Icon
//                     name="arrow-circle-down"
//                     size={25}
//                     color="#666"
//                     style={{}}
//                   />
//                 ) : (
//                   <Icon
//                     name="arrow-circle-up"
//                     size={25}
//                     color="#666"
//                     style={{}}
//                   />
//                 )}
//               </TouchableOpacity>
//             </View>
//             <Collapsible collapsed={isCollapsed}>
//               {projects.map((item, index) => (
//                 <View style={styles.Directmessageheader} key={index}>
//                   <Text style={styles.darkgrayText}>{item.name}</Text>

//                   {item.unreadClient !== null && item.unreadClient !== 0 && (
//                     <View style={styles.unreadBoxClient}>
//                       <Text style={styles.unreadtextClient}>
//                         {item.unreadClient}
//                       </Text>
//                     </View>
//                   )}
//                   {item.unreadInternal !== null &&
//                     item.unreadInternal !== 0 && (
//                       <View style={styles.unreadInternal}>
//                         <Text style={styles.unreadtextInternal}>
//                           {item.unreadInternal}
//                         </Text>
//                       </View>
//                     )}
//                 </View>
//               ))}
//             </Collapsible>
//           </View>
//           <View style={styles.childcontainter}>
//             <View style={styles.headerItem}>
//               <Text style={styles.headertext}>Direct messages</Text>
//               <TouchableOpacity
//                 style={styles.Icon}
//                 onPress={() => setShowMessage(!showmessage)}>
//                 {showmessage ? (
//                   <Icon name="arrow-circle-down" size={25} color="#666" />
//                 ) : (
//                   <Icon name="arrow-circle-up" size={25} color="#666" />
//                 )}
//               </TouchableOpacity>
//             </View>
//             <Collapsible collapsed={showmessage}>
//               {/* <FlatList
//               data={privateMessages}
//               renderItem={({item}) => (
//                 <View style={styles.Directmessageheader}>
//                   <Image source={{uri: item.image}} style={styles.Userpic} />
//                   <Text style={styles.darkgrayText}> {item.name}</Text>
//                   {item.unread !== null && (
//                     <View style={styles.unreadBox}>
//                       <Text style={styles.unreadtext}>{item.unread}</Text>
//                     </View>
//                   )}
//                 </View>
//               )}
//               keyExtractor={(item, index) => index.toString()}
//             /> */}
//               {privateMessages.map((item, index) => (
//                 <View style={styles.Directmessageheader} key={index}>
//                   <Image source={{uri: item.image}} style={styles.Userpic} />
//                   <Text style={styles.darkgrayText}> {item.name}</Text>
//                   {item.unread !== null && (
//                     <View style={styles.unreadBox}>
//                       <Text style={styles.unreadtext}>{item.unread}</Text>
//                     </View>
//                   )}
//                 </View>
//               ))}
//             </Collapsible>
//           </View>
//           <View style={styles.childcontainter}>
//             <View style={styles.headerItem}>
//               <Text style={styles.headertext}>Groups / Chanels</Text>
//               <TouchableOpacity
//                 style={styles.Icon}
//                 onPress={() => setShowgroupsection(!showgroupsection)}>
//                 {showgroupsection ? (
//                   <Icon
//                     name="arrow-circle-up"
//                     size={25}
//                     color="#666"
//                     style={{}}
//                   />
//                 ) : (
//                   <Icon
//                     name="arrow-circle-down"
//                     size={25}
//                     color="#666"
//                     style={{}}
//                   />
//                 )}
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//       <TouchableOpacity>
//         <View style={styles.addItemButtonBox}>
//           <Icon name="plus" style={styles.addItemButton} />
//           {/* <Icon name=" plus-circle" size={25} color="#666" /> */}
//         </View>
//       </TouchableOpacity>
//     </>
//   );
// };

// export default Dashboard;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // margin: 20,
//   },
//   headertext: {
//     fontSize: 24,
//     color: 'black',
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginLeft: 20,
//   },
//   headerItem: {
//     flexDirection: 'row',
//   },
//   Icon: {
//     position: 'absolute',
//     right: 0,
//     top: 5,
//     marginTop: 20,
//     marginRight: 20,
//   },
//   childcontainter: {
//     borderBottomWidth: 0.5,
//     borderBottomColor: 'gray',

//     paddingBottom: 15,
//   },
//   grayText: {
//     color: 'darkgray',
//     fontSize: 16,
//     marginTop: 15,
//     marginLeft: 20,
//   },
//   darkgrayText: {
//     color: 'black',
//     fontSize: 16,
//     marginTop: 15,
//     marginLeft: 20,
//   },
//   Directmessageheader: {
//     flexDirection: 'row',
//   },
//   Userpic: {
//     width: 40,
//     height: 40,
//     marginTop: 10,
//     marginLeft: 20,
//     borderRadius: 20,
//   },
//   unreadBox: {
//     position: 'absolute',
//     right: 15,
//     top: 15,
//     backgroundColor: 'red',
//     width: 22,
//     height: 22,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   unreadtext: {
//     color: 'white',
//     // marginLeft: 4,
//   },
//   unreadInternal: {
//     position: 'absolute',
//     right: 15,
//     top: 15,
//     backgroundColor: 'green',
//     width: 22,
//     height: 22,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   unreadtextInternal: {
//     color: 'white',
//   },
//   unreadBoxClient: {
//     position: 'absolute',
//     right: 45,
//     top: 15,
//     backgroundColor: 'red',
//     width: 22,
//     height: 22,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   unreadtextClient: {
//     color: 'white',
//   },
//   addItemButtonBox: {
//     backgroundColor: 'deepskyblue',
//     height: 55,
//     width: 55,
//     borderRadius: 30,
//     position: 'absolute',
//     right: 15,
//     bottom: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addItemButton: {
//     color: 'white',
//     fontSize: 20,
//   },
// });

// /* <Collapsible collapsed={showmessage}>
//             <View>
//               <View style={styles.Directmessageheader}>
//                 <Image
//                   source={{
//                     uri: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
//                   }}
//                   style={styles.Userpic}
//                 />
//                 <Text style={styles.darkgrayText}>John Platonau</Text>
//               </View>
//               <View style={styles.Directmessageheader}>
//                 <Image
//                   source={{
//                     uri: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
//                   }}
//                   style={styles.Userpic}
//                 />
//                 <Text style={styles.darkgrayText}>James Zablocki</Text>
//               </View>
//               <View style={styles.Directmessageheader}>
//                 <Image
//                   source={{
//                     uri: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
//                   }}
//                   style={styles.Userpic}
//                 />
//                 <Text style={styles.grayText}>Waren Mielnik</Text>
//               </View>
//               <View style={styles.Directmessageheader}>
//                 <Image
//                   source={{
//                     uri: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
//                   }}
//                   style={styles.Userpic}
//                 />
//                 <Text style={styles.grayText}>Jane Cano</Text>
//               </View>
//             </View>
//           </Collapsible> */

import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Collapsible from 'react-native-collapsible';

const Dashboard = ({navigation}: any) => {
  const [showmessage, setShowMessage] = useState(true);
  const [showgroupsection, setShowgroupsection] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const privateMessages = [
    {
      name: 'Erich Seymark',
      image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
      unread: null,
    },
    {
      name: 'Starr Bicheno',
      image: 'http://dummyimage.com/24x24.png/dddddd/000000',
      unread: null,
    },
    {
      name: 'Town Cornillot',
      image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
      unread: null,
    },
    {
      name: 'Lisha Koene',
      image: 'http://dummyimage.com/24x24.png/5fa2dd/ffffff',
      unread: null,
    },
    {
      name: 'Dyann Goneau',
      image: 'http://dummyimage.com/24x24.png/dddddd/000000',
      unread: null,
    },
    {
      name: 'Lesly Gyenes',
      image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
      unread: 7,
    },
    {
      name: 'Carmine Cuppleditch',
      image: 'http://dummyimage.com/24x24.png/5fa2dd/ffffff',
      unread: null,
    },
    {
      name: 'Pincas Klaus',
      image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
      unread: null,
    },
    {
      name: 'Regina Cockburn',
      image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
      unread: null,
    },
    {
      name: 'Carrissa Izzat',
      image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
      unread: 6,
    },
    {
      name: 'Laetitia Pelz',
      image: 'http://dummyimage.com/24x24.png/cc0000/ffffff',
      unread: null,
    },
    {
      name: 'Paige Odo',
      image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
      unread: null,
    },
    {
      name: 'Elvera Amery',
      image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
      unread: 7,
    },
    {
      name: 'Buck Duffin',
      image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
      unread: null,
    },
    {
      name: 'Daisi Rhymer',
      image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
      unread: 15,
    },
    {
      name: 'Alidia Gaynes',
      image: 'http://dummyimage.com/24x24.png/5fa2dd/ffffff',
      unread: null,
    },
    {
      name: 'Alex Burry',
      image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
      unread: null,
    },
    {
      name: "Dasya O'Halleghane",
      image: 'http://dummyimage.com/24x24.png/dddddd/000000',
      unread: null,
    },
    {
      name: 'Alaine Townshend',
      image: 'http://dummyimage.com/24x24.png/5fa2dd/ffffff',
      unread: null,
    },
    {
      name: 'Jacquelynn Leggan',
      image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
      unread: null,
    },
  ];

  const projects = [
    {
      name: 'Dach-Friesen',
      unreadClient: 0,
      unreadInternal: 0,
    },
    {
      name: 'Dare, Nikolaus and Bahringer',
      unreadClient: 2,
      unreadInternal: 1,
    },
    {
      name: 'Friesen-Kemmer',
      unreadClient: 2,
      unreadInternal: 2,
    },
    {
      name: 'Rohan Group',
      unreadClient: 2,
      unreadInternal: 9,
    },
    {
      name: 'Koepp-Cruickshank',
      unreadClient: 2,
      unreadInternal: 2,
    },
    {
      name: 'Botsford, Block and Osinski',
      unreadClient: 0,
      unreadInternal: 4,
    },
    {
      name: 'Crist-Collier',
      unreadClient: 1,
      unreadInternal: 4,
    },
    {
      name: 'Watsica Inc',
      unreadClient: 2,
      unreadInternal: 4,
    },
    {
      name: 'Mertz-Walsh',
      unreadClient: 2,
      unreadInternal: 4,
    },
    {
      name: 'Leannon and Sons',
      unreadClient: 1,
      unreadInternal: 5,
    },
    {
      name: 'Hegmann, Koelpin and Zboncak',
      unreadClient: 0,
      unreadInternal: 8,
    },
    {
      name: 'Balistreri Group',
      unreadClient: 0,
      unreadInternal: 9,
    },
    {
      name: 'Leannon, Haley and Kozey',
      unreadClient: 1,
      unreadInternal: 3,
    },
    {
      name: 'Kulas Inc',
      unreadClient: 0,
      unreadInternal: 6,
    },
    {
      name: 'Wiza-Olson',
      unreadClient: 1,
      unreadInternal: 7,
    },
    {
      name: 'Huel Group',
      unreadClient: 1,
      unreadInternal: 8,
    },
    {
      name: 'McKenzie Group',
      unreadClient: 2,
      unreadInternal: 3,
    },
    {
      name: 'Waelchi, Bode and Ondricka',
      unreadClient: 0,
      unreadInternal: 3,
    },
    {
      name: 'Larkin LLC',
      unreadClient: 0,
      unreadInternal: 4,
    },
    {
      name: 'Hoppe, Gutkowski and Johnston',
      unreadClient: 2,
      unreadInternal: 5,
    },
  ];
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.childcontainter}>
            <View style={styles.headerItem}>
              <Text style={styles.headertext}>Projects</Text>
              <TouchableOpacity
                style={styles.Icon}
                onPress={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? (
                  <Icon
                    name="arrow-circle-down"
                    size={25}
                    color="#666"
                    style={{}}
                  />
                ) : (
                  <Icon
                    name="arrow-circle-up"
                    size={25}
                    color="#666"
                    style={{}}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Collapsible collapsed={isCollapsed}>
              {projects.map((item, index) => (
                <View style={styles.Directmessageheader} key={index}>
                  <Text style={styles.darkgrayText}>{item.name}</Text>

                  {item.unreadClient !== null && item.unreadClient !== 0 && (
                    <View style={styles.unreadBoxClient}>
                      <Text style={styles.unreadtextClient}>
                        {item.unreadClient}
                      </Text>
                    </View>
                  )}
                  {item.unreadInternal !== null &&
                    item.unreadInternal !== 0 && (
                      <View style={styles.unreadInternal}>
                        <Text style={styles.unreadtextInternal}>
                          {item.unreadInternal}
                        </Text>
                      </View>
                    )}
                </View>
              ))}
            </Collapsible>
          </View>
          <View style={styles.childcontainter}>
            <View style={styles.headerItem}>
              <Text style={styles.headertext}>Direct messages</Text>
              <TouchableOpacity
                style={styles.Icon}
                onPress={() => setShowMessage(!showmessage)}>
                {showmessage ? (
                  <Icon name="arrow-circle-down" size={25} color="#666" />
                ) : (
                  <Icon name="arrow-circle-up" size={25} color="#666" />
                )}
              </TouchableOpacity>
            </View>
            <Collapsible collapsed={showmessage}>
              {/* <FlatList
              data={privateMessages}
              renderItem={({item}) => (
                <View style={styles.Directmessageheader}>
                  <Image source={{uri: item.image}} style={styles.Userpic} />
                  <Text style={styles.darkgrayText}> {item.name}</Text>
                  {item.unread !== null && (
                    <View style={styles.unreadBox}>
                      <Text style={styles.unreadtext}>{item.unread}</Text>
                    </View>
                  )}
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            /> */}
              {privateMessages.map((item, index) => (
                <View style={styles.Directmessageheader} key={index}>
                  <Image source={{uri: item.image}} style={styles.Userpic} />
                  <Text style={styles.darkgrayText}> {item.name}</Text>
                  {item.unread !== null && (
                    <View style={styles.unreadBox}>
                      <Text style={styles.unreadtext}>{item.unread}</Text>
                    </View>
                  )}
                </View>
              ))}
            </Collapsible>
          </View>
          <View style={styles.childcontainter}>
            <View style={styles.headerItem}>
              <Text style={styles.headertext}>Groups / Chanels</Text>
              <TouchableOpacity
                style={styles.Icon}
                onPress={() => setShowgroupsection(!showgroupsection)}>
                {showgroupsection ? (
                  <Icon
                    name="arrow-circle-up"
                    size={25}
                    color="#666"
                    style={{}}
                  />
                ) : (
                  <Icon
                    name="arrow-circle-down"
                    size={25}
                    color="#666"
                    style={{}}
                  />
                )}
              </TouchableOpacity>
            </View>

            <Collapsible collapsed={showgroupsection}>
              <View>
                <Text style={{alignItems: 'center', margin: 12}}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                  neque natus, recusandae quam corporis inventore eaque fugiat
                  eius accusantium dignissimos earum, amet distinctio ratione?
                  Cum quas corrupti quasi placeat necessitatibus.
                </Text>
                <Button
                  title="view more"
                  onPress={() => navigation.navigate('Topnav')}
                />
              </View>
            </Collapsible>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity>
        <View style={styles.addItemButtonBox}>
          <Icon name="plus" style={styles.addItemButton} />
          {/* <Icon name=" plus-circle" size={25} color="#666" /> */}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 20,
  },
  headertext: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  headerItem: {
    flexDirection: 'row',
  },
  Icon: {
    position: 'absolute',
    right: 0,
    top: 5,
    marginTop: 20,
    marginRight: 20,
  },
  childcontainter: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',

    paddingBottom: 15,
  },
  grayText: {
    color: 'darkgray',
    fontSize: 16,
    marginTop: 15,
    marginLeft: 20,
  },
  darkgrayText: {
    color: 'black',
    fontSize: 16,
    marginTop: 15,
    marginLeft: 20,
  },
  Directmessageheader: {
    flexDirection: 'row',
  },
  Userpic: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 20,
  },
  unreadBox: {
    position: 'absolute',
    right: 15,
    top: 15,
    backgroundColor: 'red',
    width: 22,
    height: 22,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadtext: {
    color: 'white',
    // marginLeft: 4,
  },
  unreadInternal: {
    position: 'absolute',
    right: 15,
    top: 15,
    backgroundColor: 'green',
    width: 22,
    height: 22,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadtextInternal: {
    color: 'white',
  },
  unreadBoxClient: {
    position: 'absolute',
    right: 45,
    top: 15,
    backgroundColor: 'red',
    width: 22,
    height: 22,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadtextClient: {
    color: 'white',
  },
  addItemButtonBox: {
    backgroundColor: 'deepskyblue',
    height: 55,
    width: 55,
    borderRadius: 30,
    position: 'absolute',
    right: 15,
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addItemButton: {
    color: 'white',
    fontSize: 20,
  },
});

/* <Collapsible collapsed={showmessage}>
            <View>
              <View style={styles.Directmessageheader}>
                <Image
                  source={{
                    uri: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
                  }}
                  style={styles.Userpic}
                />
                <Text style={styles.darkgrayText}>John Platonau</Text>
              </View>
              <View style={styles.Directmessageheader}>
                <Image
                  source={{
                    uri: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
                  }}
                  style={styles.Userpic}
                />
                <Text style={styles.darkgrayText}>James Zablocki</Text>
              </View>
              <View style={styles.Directmessageheader}>
                <Image
                  source={{
                    uri: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
                  }}
                  style={styles.Userpic}
                />
                <Text style={styles.grayText}>Waren Mielnik</Text>
              </View>
              <View style={styles.Directmessageheader}>
                <Image
                  source={{
                    uri: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
                  }}
                  style={styles.Userpic}
                />
                <Text style={styles.grayText}>Jane Cano</Text>
              </View>
            </View>
          </Collapsible> */
