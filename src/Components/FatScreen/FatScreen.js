import React from "react";
import styles from  './FatScreen.style'
import { SafeAreaView,Text,Image,View,ImageBackground,Dimensions,Button } from "react-native";
import Buttons from "../Button/button";
import { useNavigation } from '@react-navigation/native';

function FatScreen () {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    function goto(){
        navigation.navigate('Calculate');
    }
    const image = {uri: 'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000'};
    
    return (
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         <Text style={styles.text}>The Broca Index is an estimation of ideal body weight using a height measurement only.The Broca index is only a rough estimate and applies to the range of middle body sizes best.</Text>
        <Buttons title="Calculate Ideal Weight" onpress={()=>navigation.navigate('Calculate')} ></Buttons>
        
        </ImageBackground>
        
</View>

    )
}

export default FatScreen;

