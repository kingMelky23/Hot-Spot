import React, { useState } from 'react'
import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import {globalStyles} from '../styles/globalStyles'


export default function Notifications() {

    const [notify,setNotifty] = useState([
        {name: "hkalil", request:"join"},
        {name: "group1", request: "accepted"},
        {name: "group2", request: "denied"},
    ])
    
      return (
        <View>
            <Text>Notifications</Text>
        </View>
       
      
      )
  }
  
  const styles = StyleSheet.create({
      
      
    });
    
                                                
   
    
    