import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import database from '../../config/firebaseConfig';
import { styles } from './Style';

export default function Task({ navigation }) {

  const [ task, setTask ] = useState([]);

  function deleteTask(id){
    database.collection("Tasks").doc(id).delete();
  }

  useEffect( () => {
    database.collection("Tasks").onSnapshot( (query) => {
      const list = [];
      query.forEach( (doc) => {
        list.push({...doc.data(), id: doc.id})
      })
      setTask(list)
    })
  }, []);

  return (
    <View style={styles.container}>
      <FlatList />
      <TouchableOpacity style={styles.buttonNewTask}>
        <Text style={styles.iconButton}> + </Text>
      </TouchableOpacity>
    </View>
  );
}

