import React, { useEffect, useState } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { collection, getDocs } from "firebase/firestore";
import database from '../../config/firebaseConfig';
import styles from './Style';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Task({ navigation }) {
  const [task, setTask] = useState([]);
 
  function deleteTask(id) {
    database.collection("Tasks").doc(id).delete();
  }
 
  useEffect(() => {
    console.log('ok')
    /*database.collection("Tasks").onSnapshot((query) => {
      const list = [];
      console.log("useEffect")
      console.log(query)
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
      console.log('--------task')
      console.log(task)
    });*/
  }, []);

  handleClick = () =>  {
    console.log('handleClick')
    getDocs(collection(database, "Tasks"))
      .then( (res) => {
        console.log(res.doc)
      });
    
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={( { item } )=>{
           return(
          <View style={styles.Tasks}>
            <TouchableOpacity
              style={styles.deleteTask}
              onPress={() => {
                deleteTask(item.id)
              }}
            >
            <Icon
              name="star"
              size={23}
              color="#F92e6A"
            >
            </Icon>
            </TouchableOpacity>
            <Text
              style={styles.DescriptionTask}
              onPress={()=>
                navigation.navigate("Details",{
                  id: item.id,
                  description: item.description,
                })
              }
            >
            {item.description}  
            </Text>  
 
          </View>
          )
        }}
      />
      <Button title="ver" onPress={ () => handleClick()} />
      <TouchableOpacity style
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}