import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import UserItem from "../shared/UserItem";
import { ScrollView } from "react-native-gesture-handler";

export default function GroupPage({ navigation }) {
  const members = navigation.getParam("members");

  const [showMore, setShowMore] = useState([false]);
  const [showMoreText, setShowMoreText] = useState(["show more"]);


  /**like button future feature will add location to users favorite spots
    should later be added componenets
  */

  const onShowMore = () => {
    setShowMore(!showMore);
    if (showMore == true) {
      setShowMoreText("show less");
    } else {
      setShowMoreText("show more");
    }
  };

  return (
    <View style={globalStyles.container}> 
      <ScrollView>
        <View style={globalStyles.card}>

          <Text style={styles.title}>{navigation.getParam("name")}</Text>
          <Text>{navigation.getParam("date")}</Text>

          <View style={styles.locationInfo}> 
            <Text>{navigation.getParam("time")}</Text>
            <Text>{navigation.getParam("address")}</Text>
          </View>
          <View
            style={
              showMore ? styles.descriptionBox : styles.showMoreDescription
            }
          >
            <Text>
              lorem
            </Text>
            <TouchableOpacity /* changes size of desciption box */
              style={styles.showMoreButton}
              onPress={() => onShowMore()}
            >
              <Text style={{ color: "#ccc4c4" }}>{showMoreText}</Text>
            </TouchableOpacity>
          </View>

          <Text style={(styles.title, { fontSize: 20, margin: 5 })}>
            Participants
          </Text>

          {members.map((item) => {
            return (
              <TouchableOpacity
                key={item.key}
                onPress={() => ""}
              >
                <UserItem
                  name={item.userName}
                  admin={item.admin}
                />
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity style={styles.leaveButton}>
            <Text style={{color: "#FFF", fontSize: 20}}>Leave</Text>
          </TouchableOpacity>
        </View> 
      </ScrollView> 
    </View> 
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: "Helvetica-Bold",
    left: 3,
    paddingBottom: 10,
  },
  locationInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionBox: {
    height: 150,
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#c9bcbb",
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    shadowColor: "#c9bcbb",
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: { height: 3 },
    backgroundColor: "#FFF",
  },
  leaveButton: {
    height: 100,
    marginTop: 4,
    backgroundColor: "#FF5555",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  showMoreDescription: {
    height: 450,
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#c9bcbb",
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    shadowColor: "#c9bcbb",
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: { height: 3 },
    backgroundColor: "#FFF",
  },
  showMoreButton: {
    color: "#ccc4c4",
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 5,
  },
});
