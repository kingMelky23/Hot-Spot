import React, { useState, useCallback } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import UserItem from "../shared/UserItem";
import { ScrollView } from "react-native-gesture-handler";
import { SwipeListView } from "react-native-swipe-list-view";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch,useSelector } from "react-redux";
import { set_groupName } from "../redux/actions";
import {useFocusEffect} from 'react-navigation-hooks'
import axios from'axios'

export default function GroupPage({ navigation }) {
  const userInfo = useSelector(state => state.currentUserReducer)

  const groupKey = navigation.getParam("key");
  const completion = (navigation.getParam("completion")?false:true)
  const [groupDetail, setGroupDetail] = useState({
    admin: "",
    name: "",
    description: "",
    minimal_karma: null,
    members: [],
  });
  const [showMore, setShowMore] = useState([false]);
  const [showMoreText, setShowMoreText] = useState(["show more"]);
  const dispatch = useDispatch();
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


  useFocusEffect(useCallback( () => {
    // console.log("test user info-------------------------------")

    const findGroup = async()=>{
    await axios.get(
        `https://hotspot-backend.herokuapp.com/api/v1/get/FindGroupById?group_id=${groupKey}`
      )
      .then((res) => {
       
        const data = [res.data.group]

        const details = data.map((item)=>({
          key:item._id.$oid,
          admin:item.admins[0].$oid,
          name:item.name,
          description:item.description,
          minimal_karma:item.minimal_karma,
          members: item.participants,
          start:item.meetup_time.$date,
          end:item.ending_time.$date
        }))      
        dispatch(set_groupName(details[0].name))
        setGroupDetail(details[0])
        
        return () => dispatch(set_groupName("Event"))
      })
      .catch((err)=>console.log(err));
    }

    findGroup()
  },[]));

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
    <UserItem name={data.item.data.username} 
      admin={data.item.data._id.$oid  === groupDetail.admin ? true : false} />
      )
  };

  const reviewUser = (rowMap,rowKey) =>{

    closeRow(rowMap,rowKey)
  }

  const closeRow = (rowMap, rowKey) => {
 
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const removeUser = async(rowMap, rowKey) => {
    await axios.get(
      `https://hotspot-backend.herokuapp.com/api/v1/get/RemoveUserFromGroup?`,{
        group_id:groupKey,
        user_id: rowKey
      }
    )


    closeRow(rowMap, rowKey);


    /**
     * REACT NATIVE SWIPE TO DELETE TUTORIAL
     * TIMESTAMP: 13:40
     *
     * USE DELETE FUNCTION FROM BACK END
     */
  };

  const HiddenItemWithActions = (props) => {
    const { swipeAnimatedValue, onClose, onRemove,onReview } = props;

    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
        onPress={onReview}
        >
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
        onReview={()=> reviewUser(rowMap,data.item.$oid)}
        onClose={() => closeRow(rowMap, data.item.$oid)}
        onRemove={() => removeUser(rowMap, data.item.$oid)}
      />
    );
  };

  return (
    <View style={globalStyles.container}>
        <View style={globalStyles.card}>
          <ScrollView >
          <Text style={styles.title}>{groupDetail.name}</Text>
          <Text>{groupDetail.start}</Text>

          <View style={styles.locationInfo}>
            <Text>{groupDetail.end}</Text>
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
            keyExtractor={item=>item.$oid}
            data={groupDetail.members}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-150}
            disableRightSwipe={completion}
            disableLeftSwipe={userInfo.uid === groupDetail.admin ? false : true}
          />

          <TouchableOpacity style={styles.leaveButton}>
            <Text style={{ color: "#FFF", fontSize: 20}}>Leave</Text>
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
});
