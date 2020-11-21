import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TouchableHighlight,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import UserItem from "../shared/UserItem";
import { ScrollView } from "react-native-gesture-handler";
import { SwipeListView } from "react-native-swipe-list-view";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "react-native-reanimated";

export default function GroupPage({ navigation }) {
  const members = navigation.getParam("members");

  const [showMore, setShowMore] = useState([false]);
  const [showMoreText, setShowMoreText] = useState(["show more"]);

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

  const onShowMore = () => {
    setShowMore(!showMore);
    if (showMore == true) {
      setShowMoreText("show less");
    } else {
      setShowMoreText("show more");
    }
  };

  const renderItem = (data, rowMap) => {
    return <UserItem name={data.item.userName} admin={data.item.admin} />;
  };

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    /**
     * REACT NATIVE SWIPE TO DELETE TUTORIAL
     * TIMESTAMP: 13:40
     *
     * USE DELETE FUNCTION FROM BACK END
     */
  };

  const HiddenItemWithActions = (props) => {
    const { swipeAnimatedValue,onClose, onDelete } = props;

    return (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={onClose}
        >
          <Animated.View style={[styles.rightButtonIcons,{
            transform: [
              {
                scale: swipeAnimatedValue.interpolate({
                  inputRange: [-90, -45],
                  outputRange: [1, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }]}>
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={25}
              color="#FFF"
            />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}
        >
          <Animated.View style={[styles.rightButtonIcons,{
            transform: [
              {
                scale: swipeAnimatedValue.interpolate({
                  inputRange: [-90, -45],
                  outputRange: [1, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }]}>
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
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ flex: 1 }}>
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
            <Text>lorem</Text>
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
            data={members}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-150}
            disableRightSwipe
          />


          <TouchableOpacity style={styles.leaveButton}>
            <Text style={{ color: "#FFF", fontSize: 20 }}>Leave</Text>
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
