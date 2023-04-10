import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];
const InputForm = () => {
  const [text, setText] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [textError, setTextError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);

  const saveData = async () => {
    if (!text) {
      setTextError(true);
    } else {
      setTextError(false);
    }

    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (!text || !email || !password) {
      return false;
    }
  };

  const [display, setDisplay] = useState<boolean>();
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(text: any) => setText(text)}
        placeholder=" username"
      />
      {textError ? (
        <Text style={{color: 'red'}}>please enter valid name</Text>
      ) : null}
      <TextInput
        style={styles.input}
        value={email}
        placeholder=" email"
        onChangeText={(text: any) => setEmail(text)}
      />
      {emailError ? (
        <Text style={{color: 'red'}}>please enter valid email</Text>
      ) : null}
      <TextInput
        style={styles.input}
        onChangeText={(text: any) => setPassword(text)}
        value={password}
        placeholder=" password"
      />
      {passwordError ? (
        <Text style={{color: 'red'}}>please enter valid password</Text>
      ) : null}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
        }}
      />
      {display ? (
        <>
          <Text>text {text}</Text>
          <Text>email {email}</Text>
          <Text>password {password}</Text>
        </>
      ) : (
        ''
      )}
      {display ? (
        <>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Text>{item.title}</Text>}
            keyExtractor={item => item.title}
          />
        </>
      ) : (
        ''
      )}
      <Button title="save data" onPress={saveData} />
      <Button title="Press me" onPress={() => setDisplay(!display)} />

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },

  tinyLogo: {
    height: 100,
    width: 100,
    margin: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
