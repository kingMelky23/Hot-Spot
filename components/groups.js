import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import Group from "./group"


 export default function Groups(props) {

    
    return (
      <FlatList
      data={props.groupList}
      renderItem={({item}) => (
        <Group name={item.name} capacity={item.capacity} participants={item.participants}/>
     )}
       />

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
  

