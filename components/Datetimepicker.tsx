import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Datetimepicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selecteddate, setSelectedDate] = useState('selected date');
  const [selectedtime, setSelectedTime] = useState('selected time');
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date: any) => {
    console.warn('A date has been picked: ', date);
    const dat = new Date(date);
    const x = dat.toISOString().split('T');
    const x1 = x[0].split('-');
    const newDate = x1[2] + '/' + x1[1] + '/' + x1[0];
    console.log(newDate);
    setSelectedDate(newDate);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (date: any) => {
    console.warn('A time has been picked: ', date);
    const dat = new Date(date);
    const x = dat.toLocaleTimeString();
    setSelectedTime(x);
    console.warn(x);
    hideTimePicker();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          width: '50%',
          height: 50,
          padding: 10,
          borderWidth: 0.5,
          borderRadius: 20,
          borderColor: 'blue',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => showDatePicker()}
        onPressIn={handlePress}
        onPressOut={handlePress}>
        <Text style={{color: isPressed ? 'white' : 'blue'}}>
          {selecteddate}{' '}
        </Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '50%',
          height: 50,
          padding: 10,
          borderWidth: 0.5,
          borderColor: 'blue',
          borderRadius: 20,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => showTimePicker()}>
        <Text style={{color: isPressed ? 'white' : 'blue'}}>
          {selectedtime}
        </Text>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Datetimepicker;
