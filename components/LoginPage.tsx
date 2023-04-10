// import React, {useState} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {
//   Image,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
// import LinearGradient from 'react-native-linear-gradient';
// import {useNavigation} from '@react-navigation/native';

// const LoginPage = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [hidePassword, setHidePassword] = useState(true);

//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);

//   const togglePasswordVisibility = () => {
//     setHidePassword(!hidePassword);
//   };
//   const saveData = async () => {
//     if (!email) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }

//     if (!password) {
//       setPasswordError(true);
//     } else {
//       setPasswordError(false);
//     }
//     if (!email || !password) {
//       return false;
//     }
//     if (email && password) {
//       // add this condition to check if both email and password are entered
//       navigation.navigate('Dashboard'); // navigate to the dashboard screen
//     }
//   };
//   return (
//     <ScrollView>
//       <StatusBar backgroundColor="white" barStyle="dark-content" />
//       <View style={styles.container}>
//         <Text style={styles.textHeader}>
//           Hi There!
//           <Image
//             source={{
//               uri: 'https://hotemoji.com/images/emoji/s/17zcrtbfkj7ms.png',
//             }}
//             style={{
//               width: 40,
//               height: 40,
//               marginLeft: 5,
//             }}
//           />
//         </Text>

//         <Text style={styles.welcomeText}>
//           Welcome back ,Sign in to your account
//         </Text>
//         <TouchableOpacity style={styles.googleLogo}>
//           <View>
//             <Image
//               source={{
//                 uri: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
//               }}
//               style={{
//                 width: 40,
//                 height: 40,
//               }}
//             />
//           </View>
//         </TouchableOpacity>
//         <View style={styles.orStyle}>
//           <LinearGradient
//             colors={['lightgrey', 'darkgray']}
//             start={{x: 0, y: 0}}
//             end={{x: 1, y: 0}}
//             style={styles.linearGradient}
//           />
//           <Text>OR</Text>
//           <LinearGradient
//             colors={['lightgray', 'darkgray']}
//             start={{x: 1, y: 0}}
//             end={{x: 0, y: 1}}
//             style={styles.linearGradient}
//           />
//         </View>
//         <View>
//           <TextInput
//             style={styles.input}
//             onChangeText={(text: any) => setEmail(text)}
//             value={email}
//             placeholder=" Email"
//           />
//           {emailError ? (
//             <Text style={{color: 'red', marginBottom: 10}}>
//               please enter valid email
//             </Text>
//           ) : null}

//           <View>
//             <TextInput
//               style={styles.input}
//               onChangeText={(text: any) => setPassword(text)}
//               value={password}
//               placeholder="Password"
//               // keyboardType="numeric"
//               secureTextEntry={hidePassword}
//             />
//             <TouchableOpacity
//               onPress={togglePasswordVisibility}
//               style={styles.eyeButton}>
//               <Icon
//                 name={hidePassword ? 'eye-slash' : 'eye'}
//                 // name="user"
//                 size={20}
//                 color="#666"
//               />
//             </TouchableOpacity>
//           </View>

//           {passwordError ? (
//             <Text style={{color: 'red'}}>please enter valid password</Text>
//           ) : null}
//         </View>
//         <View>
//           <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//         </View>
//         <TouchableOpacity style={styles.buttonStyle} onPress={saveData}>
//           <Text style={styles.SignInText}>Sign In</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default LoginPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 25,
//   },
//   textHeader: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 24,
//     marginTop: 10,
//   },
//   welcomeText: {
//     color: 'gray',
//     fontSize: 15,
//     marginTop: 5,
//     fontWeight: 'normal',
//   },
//   googleLogo: {
//     borderWidth: 0.5,
//     padding: 5,
//     marginTop: 15,
//     borderRadius: 15,
//     alignItems: 'center',
//     borderColor: 'gray',
//   },
//   orStyle: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 20,
//     flexDirection: 'row',
//   },
//   input: {
//     // borderWidth: 1,
//     borderRadius: 20,
//     padding: 10,
//     marginBottom: 15,
//     backgroundColor: '#f0ffff',
//   },
//   forgotPasswordText: {
//     color: 'skyblue',
//     fontSize: 16,
//     marginTop: 5,
//   },
//   buttonStyle: {
//     marginTop: 25,
//     padding: 10,
//     borderRadius: 15,
//     alignItems: 'center',
//     backgroundColor: 'lightskyblue',
//   },
//   SignInText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   eyeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     height: 30,
//     width: 35,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   linearGradient: {
//     height: 2,
//     width: '30%',
//     margin: 10,
//   },
// });

import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as Yup from 'yup';
import {Formik} from 'formik';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Not an valis email id')
    .min(6, 'email is too short')
    .max(100, 'email is too long')
    .required('email is required'),
  password: Yup.string()
    .min(6, 'password is too short')
    .max(100, 'password is too long')
    .required('password is required'),
});
const LoginPage = ({navigation}: any) => {
  const [hidePassword, setHidePassword] = useState(true);

  const initialValues = {email: '', password: ''};

  const onSubmit = (values: any) => {
    console.log('valuses of from:', values);
    navigation.navigate('Dashboard');
  };
  return (
    <ScrollView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.textHeader}>
          Hi There!
          <Image
            source={{
              uri: 'https://hotemoji.com/images/emoji/s/17zcrtbfkj7ms.png',
            }}
            style={{
              width: 40,
              height: 40,
              marginLeft: 5,
            }}
          />
        </Text>

        <Text style={styles.welcomeText}>
          Welcome back ,Sign in to your account
        </Text>
        <TouchableOpacity
          style={styles.googleLogo}
          onPress={() => navigation.navigate('Dashboard')}>
          <View>
            <Image
              source={{
                uri: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
              }}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.orStyle}>
          <LinearGradient
            colors={['lightgrey', 'darkgray']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.linearGradient}
          />
          <Text>OR</Text>
          <LinearGradient
            colors={['lightgray', 'darkgray']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.linearGradient}
          />
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={values => onSubmit(values)}>
          {({errors, handleBlur, handleChange, handleSubmit, values}) => (
            <>
              <View>
                <TextInput
                  keyboardType="email-address"
                  style={styles.input}
                  placeholder=" Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#9CA3AF"
                />
                {errors.email && (
                  <Text style={{color: 'red'}}>{errors.email}</Text>
                )}

                <View>
                  <TextInput
                    keyboardType="default"
                    style={styles.input}
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={hidePassword}
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setHidePassword(!hidePassword)}>
                    <Icon
                      name={hidePassword ? 'eye-slash' : 'eye'}
                      size={20}
                      color="#666"
                    />
                  </TouchableOpacity>
                </View>
                {errors.email && (
                  <Text style={{color: 'red'}}>{errors.password}</Text>
                )}
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => console.log('Forgot password pressed')}>
                  <Text style={styles.forgotPasswordText}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => handleSubmit()}>
                <Text style={styles.SignInText}>Sign In</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  textHeader: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10,
  },
  welcomeText: {
    color: 'gray',
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'normal',
  },
  googleLogo: {
    borderWidth: 0.5,
    padding: 5,
    marginTop: 15,
    borderRadius: 15,
    alignItems: 'center',
    borderColor: 'gray',
  },
  orStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    flexDirection: 'row',
  },
  input: {
    // borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f0ffff',
  },
  forgotPasswordText: {
    color: 'skyblue',
    fontSize: 16,
    marginTop: 5,
  },
  buttonStyle: {
    marginTop: 25,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'lightskyblue',
  },
  SignInText: {
    color: 'white',
    fontSize: 18,
  },
  eyeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 30,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    height: 2,
    width: '30%',
    margin: 10,
  },
});
