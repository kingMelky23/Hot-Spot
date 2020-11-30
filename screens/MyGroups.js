import Axios from "axios";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import GroupItem from "../shared/groupItem";
import { globalStyles } from "../styles/globalStyles";

export default function MyGroups({ navigation }) {
  const [groups, setGroups] = useState([
    {
      name: "group1",
      description: "lorem ipsum",
      capacity: 8,
      participants: 6,
      key: "1",
      location: "shake Shake",
      date: "September 20,2020",
      time: "3:30 PM",
      address: "2655 Richmond Ave",
      members: [
        { userName: "mel", key: "1", admin: true },
        { userName: "robbie", key: "2", admin: false },
        { userName: "zane", key: "3", admin: false },
        { userName: "derrick", key: "4", admin: false },
        { userName: "sam", key: "5", admin: false },
        { userName: "putin", key: "6", admin: false },
        { userName: "piko", key: "7", admin: false },
        { userName: "firetruck", key: "8", admin: false },
        { userName: "choji", key: "9", admin: false },
      ],
    },
  ]);

  useEffect(() => {
    console.log(
      "testing my groups _________________________________________________________"
    );
    const allGroups = async () => {
      await Axios.get(
        `https://hotspot-backend.herokuapp.com/api/v1/get/FindRelatedGroups`
      )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
    allGroups();
  });

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.card, { alignItems: "center" }]}>
        <FlatList
          style={{ marginBottom: 50 }}
          data={groups}
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

const styles = StyleSheet.create({});
