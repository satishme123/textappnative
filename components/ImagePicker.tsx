// import React, {useState} from 'react';
// import {Button, Image, PermissionsAndroid, View} from 'react-native';
// import {
//   ImageLibraryOptions,
//   ImagePickerResponse,
// } from 'react-native-image-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// const requestCameraRollPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       {
//         title: 'Permission to access the camera roll',
//         message: 'This app needs permission to access your camera roll.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('Camera roll permission granted');
//     } else {
//       console.log('Camera roll permission denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

// const Imagepicker = () => {
//   const [imageUri, setImageUri] = useState<string | undefined>(undefined);

//   const pickImage = () => {
//     const options: ImageLibraryOptions = {
//       mediaType: 'photo',
//       quality: 1,
//     };
//     launchImageLibrary(options, (response: ImagePickerResponse | any) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         setImageUri(response.uri);
//       }
//     });
//   };

//   const takePhoto = () => {
//     const options: any = {
//       saveToPhotos: true,
//       mediaType: 'photo',
//       quality: 1,
//     };
//     console.log('Launching camera...');

//     const openCamera = async () => {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         const result: any = await launchCamera(
//           options,
//           (response: ImagePickerResponse | any) => {
//             if (response.didCancel) {
//               console.log('User cancelled laucching camera');
//             } else if (response.error) {
//               console.log('launchCamera Error: ', response.error);
//             } else {
//               // setImageUri(response.uri);
//             }
//           },
//         );
//         setImageUri(result.assets[0].uri);
//       }
//     };
//     openCamera();
//     // launchCamera(options, (response: ImagePickerResponse | any) => {
//     //   if (response.didCancel) {
//     //     console.log('User cancelled laucching camera');
//     //   } else if (response.error) {
//     //     console.log('launchCamera Error: ', response.error);
//     //   } else {
//     //     setImageUri(response.uri);
//     //   }
//     // });
//   };

//   return (
//     <View>
//       {imageUri && (
//         <Image source={{uri: imageUri}} style={{width: 200, height: 200}} />
//       )}
//       <Button title="Pick Image" onPress={pickImage} />
//       <Button title="Take Photo" onPress={takePhoto} />
//     </View>
//   );
// };

// export default Imagepicker;

// const requestCameraRollPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       {
//         title: 'Permission to access the camera roll',
//         message: 'This app needs permission to access your camera roll.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('Camera roll permission granted');
//     } else {
//       console.log('Camera roll permission denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

import React, {useState} from 'react';
import {Button, Image, PermissionsAndroid, View} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Imagepicker = () => {
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);

  const options: any = {
    saveToPhotos: true,
    mediaType: 'photo',
    quality: 1,
  };
  console.log('Launching camera...');

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result: any = await launchCamera(options);
      setImageUri(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const result: any = await launchImageLibrary(options);
    setImageUri(result.assets[0].uri);
  };
  return (
    <View>
      {imageUri && (
        <Image source={{uri: imageUri}} style={{width: 200, height: 200}} />
      )}
      <Button title="Pick Image" onPress={openGallery} />
      <Button title="Take Photo" onPress={openCamera} />
    </View>
  );
};

export default Imagepicker;
