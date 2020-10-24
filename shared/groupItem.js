import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


//Group Props: Time, Date,Capacity, Participants, Name, Location

 export default function Group(props) {
    return (
      <View style={styles.groupStyle}>
          <Text style={styles.groupText}>{props.name}</Text>
          <View style={styles.iconAndNumberView}>
              <MaterialIcons name="person" size={24} color="#000" style={styles.personIcon} />
              <Text style={styles.numberText}>{props.participants}/{props.capacity}</Text>
          </View>
      </View>
    );
  }


  const styles = StyleSheet.create({

    groupStyle: {
      height:40,
      width:370,
      backgroundColor:"white",
      borderRadius: 100,
      borderWidth:1,
      borderColor:"gray",
      borderStyle:"solid",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      margin:8,
      
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowRadius:5,
      shadowOffset:{ height: 5 },
    },

    iconAndNumberView: {
      flexDirection:"row",
      alignItems:"center",
    },
    groupText: {
      marginLeft:10
    },
  
    numberText: {
      marginRight:10
    },
  
    personIcon: {
      marginRight:4
    }
  });
  

