import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {PureComponent} from 'react';

type Props = {
  item: any;
  onPress: any;
  backgroundColor: string;
  textColor: string;
};

const ListItem = (props: Props) => {
  const {item, onPress, textColor, backgroundColor} = props;

  console.log('item');

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default React.memo(ListItem);
