import {useState} from 'react';
import {Button, StatusBar} from 'react-native';

const Statusbar = () => {
  const [hide, setHide] = useState(false);
  const [barstyle, setBarStyle] = useState<any>('default');
  return (
    <>
      <StatusBar backgroundColor="orange" barStyle={barstyle} hidden={hide} />

      <Button title="toggle status bar" onPress={() => setHide(!hide)} />
      <Button
        title="update style"
        onPress={() => setBarStyle('dark-content')}
      />
    </>
  );
};
export default Statusbar;
