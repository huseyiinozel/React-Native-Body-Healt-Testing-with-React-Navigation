import React from "react";
import { SafeAreaView,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Fats from "./Pages/Fat/Fats";
import Masss from "./Pages/Mass/Masss";
import MassCalc from "./Pages/MassCalc/MassCalcs";
import MassResult from './Pages/MassResult/MassResults';
import Fatcalc from "./Pages/FatCalc/Fatcalc";
import FatResult from "./Pages/FatResult/FatResult";
import Home from "./Pages/Home/Home"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import styles from './Card.style'
const tab = createBottomTabNavigator();
const stack = createStackNavigator();
const drawer= createDrawerNavigator();

const FatStack = () => {
  return (
    


    <stack.Navigator  screenOptions={{
      headerShown: false
    }}>
      <stack.Screen  options={{headerStyle: {
            backgroundColor: 'khaki',
            
          }}} name="BrocaIndex" component={Fats}></stack.Screen>
      <stack.Screen options={{headerStyle: {
            backgroundColor: 'khaki',
          }}}  name="Calculate" component={Fatcalc}></stack.Screen>
      <stack.Screen  options={{headerStyle: {
            backgroundColor: 'khaki',
          }}} name="Result" component={FatResult}></stack.Screen>
    </stack.Navigator>
    
  )
}

const MassStack = () => {
  return (
    <stack.Navigator screenOptions={{
      headerShown: false
    }} >
      <stack.Screen  options={{headerStyle:{ backgroundColor:'khaki',}}}  name="BodyMassIndex" component={Masss}></stack.Screen>
      <stack.Screen  options={{headerStyle:{ backgroundColor:'khaki',}}}  name="MassCalculate" component={MassCalc}></stack.Screen>
      <stack.Screen  options={{headerStyle:{ backgroundColor:'khaki',}}}  name="MassResult" component={MassResult}></stack.Screen>
    </stack.Navigator>
  )
}




const screenOptionStyle = {
  
  
  tabBarStyle: [{ backgroundColor: 'black' }],
  
};



function App (){
  return (
    <NavigationContainer>
      
      <tab.Navigator screenOptions={screenOptionStyle} >
      
      <tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />


      <tab.Screen
        name="PICA"
        component={FatStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="check" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <tab.Screen
        name="VKI"
        component={MassStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="check" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      
        
      </tab.Navigator>

      
        

    </NavigationContainer>

    
  )
}

export default App;