import React,{useState}  from "react";
import { SafeAreaView,Text,Button } from "react-native";
import Fatcalcs from "../../Components/Fatcalcs/Fatcalcs";
import Buttons from "../../Components/Button/button";
import styles from "./Fatcal.style"
function Fatcalc (){
    


    return (
        <SafeAreaView>
        
        <Fatcalcs place={"cm"} label={"Height (cm)"}  ></Fatcalcs>
        



        </SafeAreaView>
    )


}

export default Fatcalc;