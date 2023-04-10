import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
const ModalOpen = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.buttonView}>
      <Modal transparent={true} visible={show} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello React modal</Text>
            <Button title="close Modal" onPress={() => setShow(false)} />
          </View>
        </View>
      </Modal>

      <Button title="Open Modal" onPress={() => setShow(!show)} />
    </View>
  );
};

export default ModalOpen;

const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'skyblue',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 30,
    marginBottom: 20,
  },
});
