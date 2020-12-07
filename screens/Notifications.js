import React, { useState, useCallback} from 'react'
import { StyleSheet, Text, View,Image,FlatList, TouchableOpacity,Animated } from 'react-native'
import {ListItem, Icon} from "react-native-elements"
import { SwipeListView } from "react-native-swipe-list-view";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Axios from 'axios'
import {useFocusEffect} from "react-navigation-hooks"


import {globalStyles} from '../styles/globalStyles'
var faker = require("faker");

export default function Notifications() {

    const [notify,setNotifty] = useState([
        {name: faker.name.findName(), request: "join", image:faker.image.people(), hours:faker.random.number({'min':1, 'max':23}), key:"1"},
        {name: faker.name.findName(), request: "join", image:faker.image.people(), hours:faker.random.number({'min':1, 'max':23}), key:"2"},
        {name: faker.name.findName(), request: "join", image:faker.image.people(), hours:faker.random.number({'min':1, 'max':23}), key:"3"},
        {name: faker.name.findName(), request: "join", image:faker.image.people(), hours:faker.random.number({'min':1, 'max':23}), key:"4"},
    ])

    useFocusEffect(useCallback(() => {
      Axios.get("https://hotspot-backend.herokuapp.com/api/v1/get/FindNotificationsForUser")
      .then((res) => {
        const data = JSON.parse(JSON.stringify(res.data.notifications))
        const temp = data.map(item=>({
          key : item._id.$oid,
          created: item.created_time.$date,
          isRead:item.is_read,
          message: item.message,
          uid:item.user.$oid,
          image:faker.image.people()
              
        }))

        setNotifty(temp.filter(item=>item.isRead !== true))
        

      }).catch((err) => {
        console.log(err)
      })
    },[]))

    

  
    const readRow = async(rowMap, rowKey) => {
      if (rowMap[rowKey]) {
        Axios.post(`https://hotspot-backend.herokuapp.com/api/v1/post/MarkNotificationAsRead`,{
          notification_id:rowKey
        }).then((res)=>{
          const newData = [...notify];
                  const prevIndex = notify.findIndex((item) => item.key === rowKey);
                  newData.splice(prevIndex, 1);
                  setNotifty(newData)
        })
        .catch((err)=>console.log(err))

        rowMap[rowKey].closeRow();
      }
    };
  
    const deleteRow = (rowMap, rowKey) => {
      closeRow(rowMap, rowKey);
      /**
       * REACT NATIVE SWIPE TO DELETE TUTORIAL
       * TIMESTAMP: 13:40
       *
       * USE DELETE FUNCTION FROM BACK END
       */
    };
  
    const HiddenItemWithActions = (props) => {
      const { swipeAnimatedValue,onRead, onDelete} = props;
  
      return (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={[styles.backLeftBtn, styles.backLeftBtnLeft]}
            onPress={onRead}
          >

            <Text>Read</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={onRead}
          >
            <Animated.View style={[styles.rightButtonIcons,{
              transform: [
                {
                  scale: swipeAnimatedValue.interpolate({
                    inputRange: [-90, -45],
                    outputRange: [1, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }]}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={25}
                color="#FFF"
              />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={onDelete}
          >
            <Animated.View style={[styles.rightButtonIcons,{
              transform: [
                {
                  scale: swipeAnimatedValue.interpolate({
                    inputRange: [-90, -45],
                    outputRange: [1, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }]}>
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={25}
                color="#FFF"
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      );
    };
  
    const renderHiddenItem = (data, rowMap) => {
      return (
        <HiddenItemWithActions
          data={data}
          rowMap={rowMap}
          onRead={() => readRow(rowMap, data.item.key)}
          onDelete={() => deleteRow(rowMap, data.item.key)}
        />
      );
    };



    renderItem = ({ item }) => (
      <View >

      <ListItem bottomDivider
        
      >
        <Image style={styles.imageContainer}
         source={{uri:item.image}}/>
        <ListItem.Content >
          <ListItem.Title><Text style={{fontWeight:"bold"}}>{item.message}</Text></ListItem.Title>
          <ListItem.Subtitle style={{color:"grey"}}>{item.hours} hours ago</ListItem.Subtitle>
        </ListItem.Content>
      
      </ListItem>
      </View>
    )
    
      return (
        <View style={styles.container}>
          <SwipeListView
            data={notify}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={90}
            rightOpenValue={-150}
            disableLeftSwipe
          />
        </View>
      )
  }
  
  const styles = StyleSheet.create({
    imageContainer: {
      borderRadius:70,
      height:50,
      width:50
    },
    rowBack: {
      alignItems: "center",
      backgroundColor: "#DDD",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 15,
      
      marginRight: 20,
      borderRadius: 5,
    },
    backLeftBtn: {
      alignItems: "flex-start",
      bottom: 0,
      justifyContent: "center",
      position: "absolute",
      top: 0,
      width: 90,
      paddingRight: 17,
    },
    backLeftBtnLeft: {
      alignItems:"center",
      backgroundColor: "#1f65ff",
      left: 0,
    },
    backRightBtnRight: {
      backgroundColor: "red",
      right: 0,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    rightButtonIcons: {
      height: 25,
      width: 25,
      marginRight: 7,
    },
  });
    
                                                
   
    
    