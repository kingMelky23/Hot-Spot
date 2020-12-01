import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import UserItem from "../shared/UserItem";
import { ScrollView } from "react-native-gesture-handler";

import axios from "axios";

export default function JoinGroup({ navigation }) {
  const groupKey = navigation.getParam("key");
  const [showMore, setShowMore] = useState([false]);
  const [showMoreText, setShowMoreText] = useState(["show more"]);
  const [groupDetail, setGroupDetail] = useState({
    admin: "",
    name: "",
    description: "",
    minimal_karma: null,
    members: [],
  });

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

  useEffect(() => {
    const findGroup = async () => {
      await axios
        .get(
          `https://hotspot-backend.herokuapp.com/api/v1/get/FindGroupById?group_id=${groupKey}`
        )
        .then((res) => {
          const {
            admins: [{ $oid: admin }],
            name,
            description,
            minimal_karma,
            participants,
          } = res.data.group;

          // participants.map((item)=>{
          //   console.log(item.data)
          // })
          // console.log(Object.values(participants))

          // console.log(res)
          setGroupDetail({
            admin,
            description,
            minimal_karma,
            members: participants,
          });
        });
    };

    findGroup();
  }, [groupKey]);


  useEffect(()=>{
    console.log('test join groups-----------------------------------------------')
    axios.get(`https://hotspot-backend.herokuapp.com//api/v1/get/GetJoinRequestForGroup?group_id=${groupKey}`)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  },[])




  const joinRequest = async () => {
    await axios.post(
      `https://hotspot-backend.herokuapp.com/api/v1/post/AddMemberToGroup`,
      {
        group_id: groupKey,
      }
    );
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.card}>
        <ScrollView>
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
            <Text>{groupDetail.description}</Text>
            <TouchableOpacity
              style={styles.showMoreButton}
              onPress={() => onShowMore()}
            >
              <Text style={{ color: "#ccc4c4" }}>{showMoreText}</Text>
            </TouchableOpacity>
          </View>

          <Text style={(styles.title, { fontSize: 20, margin: 5 })}>
            Participants
          </Text>
          {groupDetail.members.map((item) => {
            return (
              <TouchableOpacity key={item.$oid} onPress={() => ""}>
                <UserItem
                  name={item.data.first_name + " " + item.data.last_name}
                  admin={item.$oid === groupDetail.admin ? true : false}
                />
              </TouchableOpacity>
            );
          })}
          {/* admin={item.admin} */}
          <TouchableOpacity
            style={styles.joinButton}
            onPress={() => joinRequest()}
          >
            <Text style={{ color: "#FFF", fontSize: 20 }}>JOIN</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
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
  joinButton: {
    height: 100,
    marginTop: 4,
    backgroundColor: "#4BB543",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 70,
    paddingVertical: -5,
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
