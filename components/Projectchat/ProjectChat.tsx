import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  View,
} from 'react-native';
// import Addfile from '../../svg/icons/addfile.svg';
// import Sendmessage from '../../svg/icons/send-message.svg';
import DocumentPicker from 'react-native-document-picker';
import ProjectChatUserData, {ProjectChatData} from './Chatmockdata';

const ProjectChat = () => {
  const selectDoc = async () => {
    try {
      const docs: any = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(docs);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('user cancelled the upload ', err);
      } else {
        console.log(err);
      }
    }
  };
  const DismissKeyboard = ({children}: any) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <DismissKeyboard>
      <View>
        <ScrollView>
          <View>
            <ProjectChatUserData messages={ProjectChatData} />
          </View>
        </ScrollView>
        <KeyboardAvoidingView
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'white',
            marginHorizontal: 8,
            borderRadius: 10,
            borderColor: 'red',
          }}>
          <View>
            <TextInput
              style={{
                color: 'black',
                flex: 1,
              }}
              placeholder={'Enter your message...'}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={selectDoc}>
                <View>{/* <Addfile /> */}</View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View>{/* <Sendmessage /> */}</View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </DismissKeyboard>
  );
};

export default ProjectChat;
