import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import FilePickerComp from './FilePickerComp';

interface IText {
  id: string;
  userId: string;
  title: string;
  body: string;
}
const ApiFetch = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const [data, setData] = useState<IText[]>([]);
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result: any = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getApiData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <FilePickerComp />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {data
          ? data.map(item => (
              <Text
                style={{
                  padding: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                }}>
                <Text style={{fontSize: 30, backgroundColor: 'yellow'}}>
                  Id:{item.id}
                </Text>
                <Text style={{fontSize: 30}}>UserId:{item.userId}</Text>
                <Text style={{fontSize: 30}}>Title{item.title}</Text>
                <Text style={{fontSize: 30}}>Body:{item.body}</Text>{' '}
              </Text>
            ))
          : ''}
      </View>
    </ScrollView>
  );
};
export default ApiFetch;
