import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import ListItem from './ListItem';

type Props = {};

const List = (props: Props) => {
  const list = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third',
    },
  ];
  const [selectedId, setSelectedId] = useState();

  const renderItem = useCallback(({item}: any) => {
    //   const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    //   const color = item.id === selectedId ? 'white' : 'black';
    const backgroundColor = '#f9c2ff';
    const color = 'black';

    return (
      <ListItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  }, []);

  return (
    <View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

export default List;
