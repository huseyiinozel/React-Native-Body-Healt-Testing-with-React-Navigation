import React from "react";
import {SafeAreaView,View,Text,TouchableOpacity} from 'react-native';
import styles from './button.style'





function Buttons({title,onpress}) {

    

    return(

        <SafeAreaView>
            
            <TouchableOpacity style={styles.button} onPress={onpress} >
                <Text style={styles.text} >{title}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Buttons;