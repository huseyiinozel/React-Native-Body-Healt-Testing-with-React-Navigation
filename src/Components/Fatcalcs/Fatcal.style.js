import React from "react";

import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    
    label:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:5,
        color:'black'

    },
    
    
    
    temp:{
        backgroundColor:'lavender'
        
    },
    input: {
      width: 200,
      height: 40,
      backgroundColor: 'white',
      borderRadius: 5,
      marginBottom: 10,
      paddingLeft: 30,
      fontWeight:'bold',
      
    },
    
      
      contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Görüntünün üzerindeki katmanın arka plan rengi
      },
      
      
      button: {
        backgroundColor: 'gold',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      image:{
        width:400,
        height:450,
        
      }
    
   

})