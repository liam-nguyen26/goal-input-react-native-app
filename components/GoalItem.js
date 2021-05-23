import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

const GoalItem = (props) => {
  return (
    // <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
    // <TouchableHighlight underlayColor={'#ccc'} onPress={props.onDelete}>
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;