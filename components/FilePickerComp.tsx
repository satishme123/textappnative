import React from 'react';
import {Button, Text, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const FilePickerComp = () => {
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
        allowMultiSelection: true,
      });
      // const doc = await DocumentPicker.pickSingle({
      //   type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
      // });
      console.log(doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('user cancelled the upload ', err);
      } else {
        console.log(err);
      }
    }
  };
  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 28,
          textAlign: 'center',
          marginVertical: 40,
        }}>
        file pick
      </Text>
      <View style={{marginHorizontal: 40}}>
        <Button title="select Document" onPress={selectDoc} />
      </View>
    </View>
  );
};

export default FilePickerComp;
