import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


//Group Props: Time, Date,Capacity, Participants, Name, Location

 export default function Group(props) {
    return (
      <View style={styles.groupStyle}>
          <Text style={styles.groupText}>{props.name}</Text>
          <View style={styles.iconAndNumberView}>
              <MaterialIcons name="person" size={24} color="black" style={styles.personIcon} />
              <Text style={styles.numberText}>{props.participants}/{props.capacity}</Text>
          </View>
      </View>
    );
  }


  const styles = StyleSheet.create({

    groupStyle: {
      height:55,
      width:320,
      backgroundColor:"white",
      borderRadius:20,
      borderWidth:2,
      borderColor:"gray",
      borderStyle:"solid",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      shadowColor:"black",
      shadowRadius:20,
      margin:10
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
  

