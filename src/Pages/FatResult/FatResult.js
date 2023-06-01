import React from "react";
import { SafeAreaView,Text,View,ImageBackground } from "react-native";
import styles from "./FatResult.style";
import Buttons from "../../Components/Button/button";
import { useNavigation } from '@react-navigation/native';
function FatResult ({route}){
    const navigation = useNavigation();
    const {user} = route.params;
    const image = {uri: 'https://st2.depositphotos.com/1000854/6673/v/950/depositphotos_66737605-stock-illustration-healthy-lifestyle-background.jpg'};
    
    
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Ideal Weight For You</Text>
            <Text style={styles.text}>{user.result} Kg </Text>
            </ImageBackground>
            <Buttons title="Return to HomePage" onpress={()=>navigation.navigate('Home')} ></Buttons>
  </View>
    )


}

export default FatResult;
