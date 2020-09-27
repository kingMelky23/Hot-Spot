import React, {useState} from 'react';
import { StyleSheet, Text, View, Image , FlatList,} from 'react-native';
import Groups from "../../components/groups"
import Header from '../../components/header'

export default function SinglePage() {

  const [groupListing, setGroupListing] = useState([
    {name: "group1",capacity: 8, participants: 6},
    {name: "group2",capacity: 10, participants: 9},
    {name: "group3",capacity: 6, participants: 3},
    {name: "group4",capacity: 6, participants: 3},
    {name: "group5",capacity: 6, participants: 3},
    {name: "group6",capacity: 6, participants: 3},
    {name: "group7",capacity: 6, participants: 3},
    {name: "group8",capacity: 6, participants: 3},
    {name: "group9",capacity: 6, participants: 3},
    {name: "group10",capacity: 6, participants: 3},
    {name: "group11",capacity: 6, participants: 3},
    {name: "group12",capacity: 6, participants: 3},
  ]);

  return (
    
    <View >
        <Header/>
        
        <View style={styles.eventList}>   
          <Groups groupList = {groupListing}/>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({

  groupListingTitle:{
    
    fontSize: 30,
    fontFamily: 'Kalam-Bold',
    
   
  },
  eventList: {
    // flex: 1,
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: 'flex-end',
    height:700,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    
    
    
    
  }
});