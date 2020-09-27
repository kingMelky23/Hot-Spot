import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import Group from "./group";


 export default function Groups(props) {

    
    return (

      <View>
        <Text style={styles.groupListingTitle}>Group Listings</Text>
        <FlatList
        style={styles.card}
        data={props.groupList}
        renderItem={({item}) => (
          <Group name={item.name} capacity={item.capacity} participants={item.participants}/>
      )}
        />
      </View>

    );
  }


  const styles = StyleSheet.create({

    card:{
      width: "100%",
      borderRadius: 25,
      height:300,
    
    },
    groupListingTitle:{
    
      fontSize: 30,
      fontFamily: 'Helvetica-Bold',
      marginBottom: 5,
    },
  });
  

