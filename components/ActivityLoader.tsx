import React, {useState} from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
const ActivityLoader = () => {
  const [show, setShow] = useState(false);
  const displayLoder = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };
  return (
    <>
      <View>
        {show ? <ActivityIndicator size={100} color="red" /> : ''}

        <Button title="show loader" onPress={displayLoder} />
      </View>
    </>
  );
};
export default ActivityLoader;
