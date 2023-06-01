import React,{useState} from "react";
import { SafeAreaView,Text,View,ImageBackground } from "react-native";
import Buttons from "../../Components/Button/button";
import { useNavigation } from '@react-navigation/native';
import styles from './MassResult.style'

function MassResult ({route}){
    const navigation = useNavigation();
    const {user} = route.params;
    const image = {uri: 'https://st2.depositphotos.com/1000854/6673/v/950/depositphotos_66737605-stock-illustration-healthy-lifestyle-background.jpg'};
    


   


    
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Your Body Mass Index</Text>
            <Text style={styles.text}>{user.result} </Text>
            <Text style={styles.text}>{user.idealunder} </Text>
            </ImageBackground>
            <Buttons title="Return to HomePage" onpress={()=>navigation.navigate('Home')} ></Buttons>
  </View>
    )
}
    export default MassResult;