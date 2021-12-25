import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Task from "./src/pages/Task";
import newTask from "./src/pages/newTask";
import Details from "./src/pages/Details";

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Task">
        <stack.Screen 
          name="Task"
          component={ Task } 
          options={{
            headerTintColor: '#f0f',
          }}
        />
        <stack.Screen 
          name="New Task"
          component={ newTask } 
          options={{
            headerTintColor: '#f0f',
          }}
        />
        <stack.Screen 
          name="Details"
          component={ Details } 
          options={{
            headerTintColor: '#f0f',
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  )

}

export default App;