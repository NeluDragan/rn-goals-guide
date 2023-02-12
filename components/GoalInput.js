import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="fade">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <View style = {styles.buttonAligment}>
      <Button title= "CANCEL" color= "red" onPress={props.onCancel} />
      <Button title="ADD" onPress={addGoalHandler} />
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffe',
  },

  buttonAligment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  }
});

export default GoalInput;