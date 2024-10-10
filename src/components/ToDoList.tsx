import React from 'react';
import {View, Text} from 'react-native';

type taskProp = {
  tasks: string[];
};

function ToDoList({tasks}: taskProp) {
  return (
    <View>
      {tasks.map((task, index) => (
        <Text key={index}>{task}</Text>
      ))}
    </View>
  );
}

export default ToDoList;
