import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import Group from "./group";


 export default function Groups(props) {

    
    return (

      <View>
        <Text style={styles.groupListingTitle}>Group Listings</Text>
        <Image // images should be sent in as prop from single page event
            style={{flex:1, height: undefined, width: undefined}}
            source={require('../assets/shakeshack.png')}
            resizeMode="contain"
          />

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
  

