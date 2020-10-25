import React, { useState } from 'react'
import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import {ListItem, Icon} from "react-native-elements"
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
        <Icon 
        name="check"
        type="font-awesome"
        color="green"
        />
         <Icon 
        name="times"
        type="font-awesome"
        color="red"
        />


      </ListItem>
    )
    
      return (
          <FlatList
            data ={notify}
            renderItem = {renderItem}
          />
      )
  }
  
  const styles = StyleSheet.create({
      
      
    });
    
                                                
   
    
    