import React, { useState, useEffect} from 'react'
import { StyleSheet, Text, View,Image,FlatList, TouchableOpacity } from 'react-native'
import {ListItem, Icon} from "react-native-elements"
import { FontAwesome } from '@expo/vector-icons'; 
import { not } from 'react-native-reanimated'

import {globalStyles} from '../styles/globalStyles'
var faker = require("faker");

export default function Notifications() {

    const [notify,setNotifty] = useState([
        {name: faker.name.findName(), request: "join", image:faker.image.people(), hours:faker.random.number({'min':1, 'max':23})},
        {name: faker.name.findName(), request: "join", image:faker.image.people(), hours:faker.random.number({'min':1, 'max':23})},
        {name: faker.name.findName(), request: "join", image:faker.image.people(), hours:faker.random.number({'min':1, 'max':23})},
        {name: faker.name.findName(), request: "join", image:faker.image.people(), hours:faker.random.number({'min':1, 'max':23})},
    ])

    useEffect(() => {
      fetch("https://hotspot-backend.herokuapp.com/api/v1/get/FindNotificationsForUser")
      .then((res) => {
        console.log("Test ------------------------------------")
        console.log(JSON.parse(JSON.stringify(res)))
      }).catch((err) => {
        console.log(err)
      })
    },[])



    renderItem = ({ item }) => (
      <ListItem bottomDivider>
        <Image style={styles.imageContainer}
         source={{uri:item.image}}/>
        <ListItem.Content>
          <ListItem.Title><Text style={{fontWeight:"bold"}}>{item.name}</Text> joined the group </ListItem.Title>
          <ListItem.Subtitle style={{color:"grey"}}>{item.hours} hours ago</ListItem.Subtitle>
        </ListItem.Content>
      
      </ListItem>
    )
    
      return (
        <View style={styles.container}>
          <FlatList 
            data ={notify}
            renderItem = {renderItem}
          />
        </View>
      )
  }
  
  const styles = StyleSheet.create({
    imageContainer: {
      borderRadius:70,
      height:50,
      width:50
    }
  });
    
                                                
   
    
    