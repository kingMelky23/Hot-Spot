import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Modal,
} from "react-native";
import GroupItem from "../components/groupItem";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import CreateGroup from './createGroup'



/**
 * groups render before image a loading spinner to image.
 *
 */

export default function EventPage({ navigation, locationName }) {
  
  const [modalOpen,setModalOpen] = useState(false)
  const [heart,setHeart] = useState(['heart-o'])
  const [like,setLike] = useState([false])
  const onLike = () =>{
    setLike(!like)
    if(like == true){
      setHeart("heart")
    } else {
      setHeart("heart-o")
    }
  } 
  const addGroup = (group) =>{
    groupListing.key= Math.random().toString()
    setGroupListing((currentGroups)=>{
      return[group,...currentGroups]
    });
    setModalOpen(false)
  }
  const [groupListing, setGroupListing] = useState([
    {
      name: "group1",
      description:"lorem ipsum",
      capacity: 8,
      participants: 6,
      key: "1",
      location: "shake Shake",
      date: "September 20,2020",
      time: "3:30 PM",
      address: "2655 Richmond Ave",
      members:[
        {userName: 'mel',key:1, admin: true},
        {userName: 'robbie',key:2, admin: false},
        {userName: 'zane',key:3, admin: false},
        {userName: 'derrick',key:4, admin: false},
        {userName: 'sam',key:5, admin: false},
        {userName: 'putin',key:6, admin: false},
        {userName: 'piko',key:7, admin: false},
        {userName: 'firetruck',key:8, admin: false},
        {userName: 'choji',key:9, admin: false},
      ]
    },
    {
      name: "group2",
      description:"lorem ipsum",
      capacity: 10,
      participants: 9,
      key: "2",
      location: "shake Shake",
      date: "September 20,2020",
      time: "3:30 PM",
      address: "2655 Richmond Ave",
      members:[
        {userName: 'mel',key:1, admin: true},
        {userName: 'robbie',key:2, admin: false},
        {userName: 'zane',key:3, admin: false},
        {userName: 'derrick',key:4, admin: false},
        {userName: 'sam',key:5, admin: false},
        {userName: 'putin',key:6, admin: false},
        {userName: 'piko',key:7, admin: false},
        {userName: 'firetruck',key:8, admin: false},
        {userName: 'choji',key:9, admin: false},
      ]
    },
    {
      name: "group3",
      description:"lorem ipsum",
      capacity: 6,
      participants: 3,
      key: "3",
      location: "shake Shake",
      date: "September 20,2020",
      time: "3:30 PM",
      address: "2655 Richmond Ave",
      members:[
        {userName: 'mel',key:1, admin: true},
        {userName: 'robbie',key:2, admin: false},
        {userName: 'zane',key:3, admin: false},
        {userName: 'derrick',key:4, admin: false},
        {userName: 'sam',key:5, admin: false},
        {userName: 'putin',key:6, admin: false},
        {userName: 'piko',key:7, admin: false},
        {userName: 'firetruck',key:8, admin: false},
        {userName: 'choji',key:9, admin: false},
      ]
    },
    // {
    //   name: "group4",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "4",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
    // {
    //   name: "group5",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "5",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
    // {
    //   name: "group6",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "6",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
    // {
    //   name: "group7",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "7",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
    // {
    //   name: "group8",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "8",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
    // {
    //   name: "group9",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "9",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
    // {
    //   name: "group10",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "10",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
    // {
    //   name: "group11",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "11",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
    // {
    //   name: "group12",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "12",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
    // {
    //   name: "group12",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "13",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
    // {
    //   name: "group12",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "14",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
    // {
    //   name: "group12",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "15",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:["mel","derrik","robbie","sam","zane",],
    // },
    // {
    //   name: "group12",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "16",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
    // {
    //   name: "group16",
    //   description:"lorem ipsum",
    //   capacity: 6,
    //   participants: 3,
    //   key: "17",
    //   location: "shake Shake",
    //   date: "September 20,2020",
    //   time: "3:30 PM",
    //   address: "2655 Richmond Ave",
    //   members:[
    //     {userName: 'mel',key:1, admin: true},
    //     {userName: 'robbie',key:2, admin: false},
    //     {userName: 'zane',key:3, admin: false},
    //     {userName: 'derrick',key:4, admin: false},
    //     {userName: 'sam',key:5, admin: false},
    //     {userName: 'putin',key:6, admin: false},
    //     {userName: 'piko',key:7, admin: false},
    //     {userName: 'firetruck',key:8, admin: false},
    //     {userName: 'choji',key:9, admin: false},
    //   ]
    // },
  ]);

  return (
    <View style={styles.container}>

    <Modal visible={modalOpen} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <SafeAreaView style={styles.modalContent}>
            
            <MaterialIcons
              name="close"
              size={24}
              onPress={()=> setModalOpen(false)}
              
            />

            <CreateGroup addGroup={addGroup}/>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>

      <View style={styles.card}>
        <View style={styles.locationInfo}>
          <Text style={styles.title}>snake shack</Text>

          <FontAwesome
            name="heart"
            size={24}
            color="red"
            style={styles.heartIcon}
            onPress= {()=>onLike()}
          />

          <View style={styles.paragraph}>
            <Text>2655 Richmond Ave</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image // images should be sent in as prop from single page event
            style={{ flex: 1, height: "100%", width: "100%" }}
            source={require("../assets/shakeshack.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textPostion}>
          <Text style={styles.title}>Group Listings</Text>
          <MaterialIcons
            name="add"
            size={35}
            color="black"
            style={styles.addModal}
            onPress={()=>setModalOpen(true)}
          />
        </View>
        <FlatList
          style={{ marginBottom: 50 }}
          data={groupListing}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("GroupPage", item)}
            >
              <GroupItem
                name={item.name}
                capacity={item.capacity}
                participants={item.participants}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 3,
    borderColor: "#fff",
    padding: 5,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#FF5555",
    borderWidth: 0,
  },

  title: {
    fontSize: 30,
    fontFamily: "Helvetica-Bold",

    left: 3,
  },
  imageContainer: {
    height: 300,
    width: "100%",
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowOffset: { height: 5 },
  },
  image: {},
  textPostion: {
    right: 80,
  },
  paragraph: {
    flexDirection: "row",
  },
  locationInfo: {
    right: 100,
  },
  heartIcon: {
    position: "absolute",
    right: -200,
    top: 9,
  },
  addModal: {
    position: "absolute",
    right: -145,
    
  },
  modalContent:{
    flex: 1, 
  }
});
