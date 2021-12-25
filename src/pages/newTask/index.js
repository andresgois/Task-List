import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './Style';

export default function newTask() {
  return (
    <View>
      <Text style={styles.texto}>New Task</Text>
    </View>
  );
}

