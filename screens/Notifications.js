import React, { useState } from 'react'
import { StyleSheet, Text, View,Image,FlatList, TouchableOpacity } from 'react-native'
import {ListItem, Icon} from "react-native-elements"
import { FontAwesome } from '@expo/vector-icons'; 
import { not } from 'react-native-reanimated'

import {globalStyles} from '../styles/globalStyles'
var faker = require("faker");

export default function Notifications() {

    const [notify,setNotifty] = useState([
        {name: "hkalil", request:"join"},
        {name: "group1", request: "accepted"},
        {name: "group2", request: "denied"},
        {name: faker.name.findName(), request: "join"},
        {name: faker.name.findName(), request: "join"},
        {name: faker.name.findName(), request: "join"},
        {name: faker.name.findName(), request: "join"},
        {name: faker.name.findName(), request: "join"},
        {name: faker.name.findName(), request: "join"},
        {name: faker.name.findName(), request: "join"},
        {name: faker.name.findName(), request: "join"},
        {name: faker.name.findName(), request: "join"},
        {name: faker.name.findName(), request: "join"},

    ])



    renderItem = ({ item }) => (
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.request}</ListItem.Subtitle>
        </ListItem.Content>
       {item.request === "join" ? 
       <>
       <TouchableOpacity>
       <FontAwesome 
          name="check" 
          size={35} 
          color="green" 
          />
       </TouchableOpacity>
         <TouchableOpacity>
         <FontAwesome 
            name="close" 
            size={35} color="red"  
            style={{marginLeft:20}}
            
            />
        
         </TouchableOpacity>
       </> :
       <></>
      }
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
 
  });
    
                                                
   
    
    