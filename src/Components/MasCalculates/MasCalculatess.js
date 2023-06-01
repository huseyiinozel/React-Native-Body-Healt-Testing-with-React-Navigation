import React,{useState}  from "react";
import { SafeAreaView ,SafeAreaViewProps,Text,Image,TextInput,TouchableOpacity,Alert,ImageBackground} from "react-native";
import styles from './MasCalculatess.style'
import { useNavigation } from '@react-navigation/native';
import * as math from 'mathjs';


function MasCalculates(){
    const image = {uri: 'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000'};
    const navigation = useNavigation();
    const [userweight,setuserweight] = useState(null);
    const [userheight,setuserheight] = useState(null);
    const [result,setresult] = useState(null);
    const [idealunder,setidealunder] = useState(null);
    
    






    function calculate(){
        const decimalRegex = /[.]/; 
        
        if (!userweight || !userheight) {
            Alert.alert('Error','Please Make Sure You Have Entered All Data');
            return;
        }

        
        if (!decimalRegex.test(userheight)) {
          
            Alert.alert("Please Use Point"," Please Enter Your Height in Meters, for Example, if You Are 183 cm, Enter 1.83 (example entry 1.83)")
            return;
        }
        
        
        
         

        

        const user = {
            userheight,
            userweight,
            result,
            idealunder
        };
        navigation.navigate('MassResult',{user})


    }

    function firstcal(){
            const result = (userweight / (userheight * userheight))
            const tempresult =  math.round(result).toFixed(2)
           
            setresult(tempresult) 

            if (result < 18.5 ) {
                setidealunder("You Are Below Ideal Weight")

            }
            if (result > 18.5 && result <24.9 ) {
                setidealunder("You Are At Ideal Weight ")

            }
            if (result > 25 && result<29.9 ) {
                setidealunder("You Are Above the Ideal Weight")

            }
            if (result > 30 && result <39.9 ) {
                setidealunder("You Are Well Above Your Ideal wWight (Obese)")

            }
            if (result > 40 ) {
                setidealunder("You Are Well Above the Ideal Weight (Morbidly Obese)")

            }
            

    }



    return(
        <SafeAreaView>
             
            <Image style={styles.image} source={image}></Image>
            
            <ImageBackground source={image} resizeMode="cover" style={styles.imageback}>
            <Text style={styles.label}  >Your Weight (kg)</Text>
            <TextInput  style={styles.input}   placeholder="Kg"  onChangeText={setuserweight} ></TextInput>
            <Text style={styles.label}  >Your Length (m) </Text>
            <TextInput  style={styles.input}   placeholder="Enter in Meters" onChangeText={setuserheight}  ></TextInput>
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

        </SafeAreaView>


    )




}

export default MasCalculates;
