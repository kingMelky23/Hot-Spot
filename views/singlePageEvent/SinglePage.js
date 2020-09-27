import React, {useState} from 'react';
import { StyleSheet, Text, View, Image , FlatList} from 'react-native';
import Groups from "../../components/groups"
import Header from '../../components/header'

export default function SinglePage() {

  const [groupListing, setGroupListing] = useState([
    {name: "group1",capacity: 8, participants: 6},
    {name: "group2",capacity: 10, participants: 9},
    {name: "group3",capacity: 6, participants: 3},
  ]);

  return (
    
    <View style={styles.container}>
        <Header/>
        
        <Groups groupList = {groupListing}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5555",
    alignItems: 'center',
    justifyContent: 'center',
    height:500,
  }
});