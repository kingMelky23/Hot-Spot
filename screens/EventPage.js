import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import GroupItem from "../components/groupItem";
import { Feather,FontAwesome, } from '@expo/vector-icons'; 


/**
 * groups render before image a loading spinner to image.
 *
 */

export default function EventPage({ navigation, locationName }) {

  

  
  

  const [groupListing, setGroupListing] = useState([
    {
      name: "group1",
      capacity: 8,
      participants: 6,
      key: "1",
      location: "shake Shake",
    },
    {
      name: "group2",
      capacity: 10,
      participants: 9,
      key: "2",
      location: "shake Shake",
    },
    {
      name: "group3",
      capacity: 6,
      participants: 3,
      key: "3",
      location: "shake Shake",
    },
    {
      name: "group4",
      capacity: 6,
      participants: 3,
      key: "4",
      location: "shake Shake",
    },
    {
      name: "group5",
      capacity: 6,
      participants: 3,
      key: "5",
      location: "shake Shake",
    },
    {
      name: "group6",
      capacity: 6,
      participants: 3,
      key: "6",
      location: "shake Shake",
    },
    {
      name: "group7",
      capacity: 6,
      participants: 3,
      key: "7",
      location: "shake Shake",
    },
    {
      name: "group8",
      capacity: 6,
      participants: 3,
      key: "8",
      location: "shake Shake",
    },
    {
      name: "group9",
      capacity: 6,
      participants: 3,
      key: "9",
      location: "shake Shake",
    },
    {
      name: "group10",
      capacity: 6,
      participants: 3,
      key: "10",
      location: "shake Shake",
    },
    {
      name: "group11",
      capacity: 6,
      participants: 3,
      key: "11",
      location: "shake Shake",
    },
    {
      name: "group12",
      capacity: 6,
      participants: 3,
      key: "12",
      location: "shake Shake",
    },
    {
      name: "group12",
      capacity: 6,
      participants: 3,
      key: "13",
      location: "shake Shake",
    },
    {
      name: "group12",
      capacity: 6,
      participants: 3,
      key: "14",
      location: "shake Shake",
    },
    {
      name: "group12",
      capacity: 6,
      participants: 3,
      key: "15",
      location: "shake Shake",
    },
    {
      name: "group12",
      capacity: 6,
      participants: 3,
      key: "16",
      location: "shake Shake",
    },
    {
      name: "group16",
      capacity: 6,
      participants: 3,
      key: "17",
      location: "shake Shake",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <View style={styles.locationInfo}>
         

            <Text style={styles.title}>snake shack</Text>

              <FontAwesome name="heart-o" size={24} color="red" style={styles.heartIcon} />


          
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
          <Feather name="more-horizontal" size={35} color="black" style={styles.filter}/>

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
  paragraph:{
    flexDirection:'row',
  },
  locationInfo:{
    right: 100
  },
  heartIcon:{
    position: 'absolute',
     right: -200,
      top:9
  },
  filter:{
    position: 'absolute',
    right: -145
  }
});
