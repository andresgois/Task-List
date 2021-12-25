import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import database from '../../config/firebaseConfig';
import { styles } from './Style';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      console.log(list)
    })
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={ (item) => {
          return (
            <View style={ styles.Tasks}>
              <TouchableOpacity 
                style={styles.deleteTask}
                onPress={ () => {
                  deleteTask(item.id)
                }}
              >
                <Icon name="home" size={18} color="#999" />
              </TouchableOpacity>

              <Text 
                style={styles.descriptionText} 
                onPress={ () => {
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description
                  })
                }}
              > {item.description }</Text>
            </View>
          )
        }}
      />
      <TouchableOpacity 
        style={styles.buttonNewTask}
        onPress={ () => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}> + </Text>
      </TouchableOpacity>
    </View>
  );
}

