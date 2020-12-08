import React, { useState} from 'react'
import { StyleSheet, View, TouchableOpacity,Animated,Alert } from 'react-native'

import { SwipeListView } from "react-native-swipe-list-view";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AntDesign } from '@expo/vector-icons';
import Axios from 'axios'
import UserItem from '../shared/UserItem'

var faker = require("faker");

export default function JoinRequests({navigation}) {

    const [users,setUsers] = useState(navigation.getParam("users"))
    const [notify,setNotifty] = useState([
        {name: faker.name.findName(), request: "join", image:faker.image.people(), hours:faker.random.number({'min':1, 'max':23}), key:"1"},
        {name: faker.name.findName(), request: "join", image:faker.image.people(), hours:faker.random.number({'min':1, 'max':23}), key:"2"},
        {name: faker.name.findName(), request: "join", image:faker.image.people(), hours:faker.random.number({'min':1, 'max':23}), key:"3"},
        {name: faker.name.findName(), request: "join", image:faker.image.people(), hours:faker.random.number({'min':1, 'max':23}), key:"4"},
    ])


    const closeRow = (rowMap, rowKey) => {
      if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow();
      }
    };

    const approve = (rowMap, rowKey) => {
      
      Alert.alert(
        "Continue to approve?",
        "",
        [
          {
            text: "Continue",
            onPress: () => {
              Axios.post(
                `https://hotspot-backend.herokuapp.com/api/v1/post/AcceptJoinRequest`,
                {
                  request_id: rowKey,
                })
                .then(() => {
                  const newData = [...users];
                  const prevIndex = users.findIndex((item) => item.key === rowKey);
                  newData.splice(prevIndex, 1);
                  setUsers(newData);
                })
                .catch((err) => console.log(err));
            },
            
          },
          { text: "Cancel", onPress: () => console.log("OK Pressed")  }
        ],
        { cancelable: false }
      );

      
 

        closeRow(rowMap, rowKey);
      };
  
    const deny = (rowMap, rowKey) => {
      Alert.alert(
        "Continue to Deny?",
        "",
        [
          {
            text: "Continue",
            onPress: () => {
              Axios.post(
                `https://hotspot-backend.herokuapp.com/api/v1/post/DenyJoinRequest`,
                {
                  request_id: rowKey,
                })
                .then(() => {
                  const newData = [...users];
                  const prevIndex = users.findIndex((item) => item.key === rowKey);
                  newData.splice(prevIndex, 1);
                  setUsers(newData);
                })
                .catch((err) => console.log(err));
            },
            
          },
          { text: "Cancel", onPress: () => console.log("OK Pressed")  }
        ],
        { cancelable: false }
      );
      closeRow(rowMap, rowKey);

    };
  
    const HiddenItemWithActions = (props) => {
      const { swipeAnimatedValue,onApprove, onDeny} = props;
  
      return (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={onApprove}
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
              <AntDesign 
                name="checkcircleo"
                size={24}
                color="black"
              />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={onDeny}
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
          onApprove={()=>approve(rowMap,data.item.key)}
          onDeny={() => deny(rowMap, data.item.key)}
        />
      );
    };



    const renderItem = ({ item }) => (
      <View >
        <UserItem name={item.username}/>
      </View>
      )
    
        
      return (
        
          <SwipeListView
            keyExtractor={(item) => item.$oid}
            data={users}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-150}
            disableRightSwipe
          />
       
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
      margin: 8,
      marginRight:15,
      borderRadius: 5,
    },
    backRightBtn: {
      alignItems: "flex-end",
      bottom: 0,
      justifyContent: "center",
      position: "absolute",
      top: 0,
      width: 75,
      paddingRight: 17,
    },
    backRightBtnLeft: {
      backgroundColor: "#1f65ff",
      right: 75,
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
    
                                                
   
    
    