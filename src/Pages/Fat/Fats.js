import React from "react";
import { SafeAreaView,Text } from "react-native";
import FatScreen from "../../Components/FatScreen/FatScreen";
import styles from './Fats.style'
function Fats (){
    return (
        <SafeAreaView style={styles.container} >
        
        <FatScreen></FatScreen>


        </SafeAreaView>
    )


}

export default Fats;