import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress = {props.onDelete.bind(this, props.id)}>
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#cbd',
    opacity: 0.7,
    borderRadius: 9
  }
});

export default GoalItem;