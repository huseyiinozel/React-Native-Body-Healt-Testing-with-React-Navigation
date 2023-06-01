import React from "react";
import styles from './MassScreen.style'
import { SafeAreaView,Text,Image,View,ImageBackground } from "react-native";
import Buttons from "../Button/button";
import { useNavigation } from '@react-navigation/native';

function MassScreen () {
    const navigation = useNavigation();
    function goto(){
        navigation.navigate('MassCalculate');
    }
    const image = {uri: 'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000'};
    return (
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         <Text style={styles.text}>Body mass index (BMI) or height weight index; It is a calculation method that shows the estimated fat percentage in a person's body. In this method, the person's height-weight ratio is taken as a basis. According to the result of the index, the closeness and distance of the person's current weight to their ideal weight can be calculated.</Text>
        <Buttons title="Calculate Body Mass Index" onpress={()=>navigation.navigate('MassCalculate')} ></Buttons>
        
        </ImageBackground>
        
</View>


    )
}

export default MassScreen;
