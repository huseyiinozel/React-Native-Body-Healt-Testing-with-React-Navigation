import React,{useState} from "react";
import { SafeAreaView,Text,View,ImageBackground } from "react-native";
import Buttons from "../../Components/Button/button";
import { useNavigation } from '@react-navigation/native';
import styles from './Home.style'

function MassResult (){
    const navigation = useNavigation();
    
    const image = {uri: 'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000'};
    


   


    
    return (
        <View style={styles.container}>
            
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Welcome</Text>
            <Buttons title="Calculate Ideal Weight" onpress={()=>navigation.navigate('PICA')} ></Buttons>
            <Buttons title="Calculate Body Mass Index" onpress={()=>navigation.navigate('VKI')} ></Buttons>
            <Text style={styles.textt}>Made By Huseyin Ozel</Text>
            <Text style={styles.textt}>https://github.com/huseyiinozel</Text>
            </ImageBackground>
            
  </View>
    )
}
    export default MassResult;
