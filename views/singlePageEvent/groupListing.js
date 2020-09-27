import React, { useState } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

export default function GroupListing() {
  const [groupList, setGroupList] = useState(
    [{ name: "group1", capacity: 8, participants: 6 },
    { name: "group2", capacity: 10, participants: 9 },
    { name: "group3", capacity: 6, participants: 3 }]
  );

  return (
  <View>
    <FlatList
        
    />

  </View>
  );
}

const styles = StyleSheet.create({});
