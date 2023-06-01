import React,{useState} from "react";
import {SafeAreaView,Text,TextInput,Alert,TouchableOpacity,TouchableHighlight,View,ImageBackground,Image} from 'react-native';
import styles from "./Fatcal.style"
import SelectDropdown from 'react-native-select-dropdown'
import Buttons from "../Button/button";
import { useNavigation } from '@react-navigation/native';


function Fatcalcs({place,label}) {
    const image = {uri: 'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000'};
    const navigation = useNavigation();
    const [usergender,setusergender] = useState(null);
    const [userheight,setuserheight] = useState(null);
    const [result,setresult] = useState(null);

    const gender = ["Man", "Woman"]
    function addgender(gen){
        setusergender(gen)
    }
    function addheight(gen){
        setuserheight(gen);
        
    }

    function firstcal(){


        if (usergender == 'Man') {
            const temp = ( (userheight-100) - ((userheight-100) *0.10)) 
            setresult(temp)

            
        }

        if (usergender == 'Woman') {
            const temp = ( (userheight-100) - ((userheight-100) *0.15))  
            setresult(temp)
        }
    }


    
    function calculate(){
        
        if (!usergender || !userheight) {
            Alert.alert('Error','Please make sure you have entered all data');
            return;
        }

        if (userheight<150){
            Alert.alert('Error','Sorry. You need to be at least 150 cm tall in order to calculate correctly.')
            return
        }

        const user = {
            userheight,
            result
        };
        navigation.navigate('Result',{user})


    }

    function total (){
        firstcal();
        calculate();
    }

   

    return (
        
        // <Image style={styles.image} source={{uri: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/3237-Calculator_numbers-1296x728-header.jpg?w=1155&h=1528'}}></Image>
            <View style={styles.container} >
                
            <Image style={styles.image} source={image}></Image>
            
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                
                <Text style={styles.label}>Choose Gender</Text>
                
            <SelectDropdown
            data={gender}
            buttonTextStyle={styles.label}
            buttonStyle={styles.input}
            defaultButtonText="Choose"
            onSelect={(selectedItem) => {
                addgender(selectedItem)
            }}
            
            ></SelectDropdown>
            <Text style={styles.label} >{label}</Text>
            
            <TextInput style={styles.input} placeholder={place} placeholderTextColor={'black'} onChangeText={addheight} ></TextInput>

            
                <TouchableOpacity
                style={styles.button}
                        onPress={() => {
                        calculate();
                        }}
                        onPressIn={() => {
                        firstcal();
                        }}>
                            
                        <Text style={styles.label} >Calculate</Text>
                            
                    </TouchableOpacity>
                    
                    </ImageBackground>
                    
                    </View>


            
           

        
          
            
            
            
            
            

       


    )
}

export default Fatcalcs;