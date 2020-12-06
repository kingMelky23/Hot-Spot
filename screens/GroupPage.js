import React, { useState, useCallback } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView
} from "react-native"; 
import { SwipeListView } from "react-native-swipe-list-view";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "react-navigation-hooks";
import axios from "axios";

import UserItem from "../shared/UserItem";
import { set_groupName } from "../redux/actions";
import { globalStyles } from "../styles/globalStyles";
import KarmaReview from './KarmaReview'
export default function GroupPage({ navigation }) {
  const date = new Date();
  const [modalOpen, setModalOpen] = useState(false);
  const groupKey = navigation.getParam("key");
  const completion = navigation.getParam("completion") ? false : true;
  const userInfo = useSelector((state) => state.currentUserReducer);
  const [selectedID,setSelectedID] = useState("") 
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState([false]);
  const [showMoreText, setShowMoreText] = useState(["show more"]);
  const [joinRequest, setJoinRequest] = useState([]);
  const [groupDetail, setGroupDetail] = useState({
    admin: "",
    name: "",
    description: "",
    minimal_karma: null,
    members: [],
  });
  /**
   * REACT NATIVE SWIPE TO DELETE TUTORIAL
   * SWIPE FEATURE
   * set disable left swipe in the swipe list view to true if the participant is not the admin
   *
   *
   * TIMESTAMP: 19:00
   * SWIPE LEFT FEATURE UN LOCKED AFTER EVENT IS CONSIDERED COMPLETE
   * prop: "leftActivationValue", "onLeftActivation"
   *
   */

  /**like button future feature will add location to users favorite spots
    should later be added componenets
  */

  useFocusEffect(
    useCallback(() => {
      const request1 = axios.get(
        `https://hotspot-backend.herokuapp.com/api/v1/get/FindGroupById?group_id=${groupKey}`
      );
      const request2 = axios.get(
        `https://hotspot-backend.herokuapp.com/api/v1/get/GetJoinRequestForGroup?group_id=${groupKey}`
      );
      const findGroup = async () => {
        await axios
          .all([request1, request2])
          .then(
            axios.spread((...res) => {
              const detailsData = [res[0].data.group];
              const details = detailsData.map((item) => ({
                key: item._id.$oid,
                admin: item.admins[0].$oid,
                name: item.name,
                description: item.description,
                minimal_karma: item.minimal_karma,
                members: item.participants,
                start: item.meetup_time.$date,
                end: item.ending_time.$date,
              }));
              dispatch(set_groupName(details[0].name));
              setGroupDetail(details[0]);

              const joinData = res[1].data.requests;
              console.log(joinData)
              setJoinRequest(
                joinData.map((item) => ({
                  key: item._id.$oid,
                  username: item.data.username,
                }))
              );

              //clean up
              return () => dispatch(set_groupName("Event"));
            })
          )
          .catch((err) => console.log(err));
      };

      findGroup();
    }, [])
  );

  const onShowMore = () => {
    setShowMore(!showMore);
    if (showMore == true) {
      setShowMoreText("show less");
    } else {
      setShowMoreText("show more");
    }
  };

  const renderItem = (data, rowMap) => {
    return (
      <UserItem
        name={data.item.data.username}
        admin={data.item.data._id.$oid === groupDetail.admin ? true : false}
      />
    );
  };

  const reviewUser = (rowMap, rowKey) => {
    setSelectedID(rowKey)
    setModalOpen(true)
    closeRow(rowMap, rowKey);
  };

  const addReview = async(review)=>{
    await axios.post(
      `https://hotspot-backend.herokuapp.com/api/v1/post/GiveReview?`,
      {
        user_id: review.id,
        comment: review.comment,
        likes: review.karma
      }
    ).then((res)=>console.log(res))
    .catch((err)=>console.log(err));
    
    setModalOpen(false);
  }

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const removeUser = async (rowMap, rowKey) => {
    if (rowKey !== groupDetail.admin) {
      await axios.get(
        `https://hotspot-backend.herokuapp.com/api/v1/get/RemoveUserFromGroup?`,
        {
          group_id: groupKey,
          user_id: rowKey,
        }
      );
    } else {
      alert("Admins scan not remove theirself");
    }
    closeRow(rowMap, rowKey);
  };

  const formatDate = (timeStamp) => {
    const date = new Date(timeStamp).toLocaleDateString("en-US");
    const time = new Date(timeStamp).toLocaleTimeString("en-US");

    return date + " at " + time;
  };

  const HiddenItemWithActions = (props) => {
    const { swipeAnimatedValue, onClose, onRemove, onReview } = props;

    return (
      <View style={styles.rowBack}>
        <TouchableOpacity onPress={onReview}>
          <Text>Review</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={onClose}
        >
          <Animated.View
            style={[
              styles.rightButtonIcons,
              {
                transform: [
                  {
                    scale: swipeAnimatedValue.interpolate({
                      inputRange: [-90, -45],
                      outputRange: [1, 0],
                      extrapolate: "clamp",
                    }),
                  },
                ],
              },
            ]}
          >
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={25}
              color="#FFF"
            />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onRemove}
        >
          <Animated.View
            style={[
              styles.rightButtonIcons,
              {
                transform: [
                  {
                    scale: swipeAnimatedValue.interpolate({
                      inputRange: [-90, -45],
                      outputRange: [1, 0],
                      extrapolate: "clamp",
                    }),
                  },
                ],
              },
            ]}
          >
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
        onReview={() => reviewUser(rowMap, data.item.$oid)}
        onClose={() => closeRow(rowMap, data.item.$oid)}
        onRemove={() => removeUser(rowMap, data.item.$oid)}
      />
    );
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={globalStyles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
            />
            <KarmaReview selectedID={selectedID} addReview={addReview}/>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={globalStyles.card}>
        <ScrollView>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>{groupDetail.name}</Text>
            <TouchableOpacity
              style={styles.newRequest}
              onPress={()=>navigation.navigate("JoinRequests",{users:joinRequest})}
            >
              <Text style={{ color: "white" }}>{joinRequest.length}</Text>
            </TouchableOpacity>
          </View>

          <Text>{"start: " + formatDate(groupDetail.start)}</Text>

          <View style={styles.locationInfo}>
            <Text>{"end: " + formatDate(groupDetail.end)}</Text>
            <Text>{navigation.getParam("address")}</Text>
          </View>
          <View
            style={
              showMore ? styles.descriptionBox : styles.showMoreDescription
            }
          >
            <Text>{groupDetail.description}</Text>
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

          <SwipeListView
            keyExtractor={(item) => item.$oid}
            data={groupDetail.members}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-150}
            disableRightSwipe={completion}
            disableLeftSwipe={userInfo.uid === groupDetail.admin ? false : true}
          />

          <TouchableOpacity style={styles.leaveButton}>
            <Text style={{ color: "#FFF", fontSize: 20 }}>Leave</Text>
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
  leaveButton: {
    height: 100,
    marginTop: "63%",
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
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    margin: 8,
    marginRight: 20,
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
  newRequest: {
    backgroundColor: "red",
    height: 27,
    width: 27,
    top: 10,
    right: 10,
    borderRadius: 13.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
