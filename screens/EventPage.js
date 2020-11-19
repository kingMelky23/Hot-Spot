import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Modal,
} from "react-native";
import GroupItem from "../shared/groupItem";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { set_Event_Id } from "../redux/actions";

import { globalStyles } from "../styles/globalStyles";
import CreateGroup from "./createGroup";


function EventPage({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [heart, setHeart] = useState(["heart-o"]);
  const [like, setLike] = useState([false]);
  const [googleImage, setGoogleImage] = useState(
    navigation.getParam("locationPhoto")
  );

  const dispatch = useDispatch();
  const get_EID = useSelector((state) => state.eventIDReducer);

  /**like page
   * NOT IMPLEMENTED
   */
  const onLike = async () => {
    setLike(!like);
    if (like == true) {
      setHeart("heart");
    } else {
      setHeart("heart-o");
    }
  };

  useEffect(() => {
    setGoogleImage(navigation.getParam("locationPhoto"));

    const getAddressBackend = async () => {
      await axios
        .get(
          `https://hotspot-backend.herokuapp.com/api/v1/get/FindEventByAddressName?location_address=${navigation.getParam(
            "locationAddress"
          )}`
        )
        .then((res) => {          
          const groups = res.data.events[0].groups
          let group = groups.map(data =>({
            key: data.$oid,
            name: data.data.name,
            participants: Object.keys(data.data.participants).length,
            capacity: data.data.max_members
          }))
          setGroupListing(group)

          const eid = res.data.events[0]._id.$oid.toString().trim();
          dispatch(set_Event_Id(eid));
        })
        .catch((err) => console.log("EventPage: error init render" + err));
    };
    getAddressBackend();
  }, [groupListing]);

  const addGroup = (group) => {

    axios
      .post(
        `https://hotspot-backend.herokuapp.com/api/v1/post/AddNewGroupToEvent/${get_EID}`,group
      )
      .catch((err) => {
        console.log(
          "EventPage: faied post to group _____________________________\n"
        );
        console.log(err);
      });

    // setGroupListing((currentGroups) => {
    //   return [group, ...currentGroups];
    // });

    setModalOpen(false);
  };

  const [groupListing, setGroupListing] = useState([
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
        { userName: "mel", key: 1, admin: true },
        { userName: "robbie", key: 2, admin: false },
        { userName: "zane", key: 3, admin: false },
        { userName: "derrick", key: 4, admin: false },
        { userName: "sam", key: 5, admin: false },
        { userName: "putin", key: 6, admin: false },
        { userName: "piko", key: 7, admin: false },
        { userName: "firetruck", key: 8, admin: false },
        { userName: "choji", key: 9, admin: false },
      ],
    }
  ])
  

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
            />
            <CreateGroup addGroup={addGroup} />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={[globalStyles.card, { alignItems: "center" }]}>
        <View style={styles.locationInfo}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Text style={styles.title}>
              {navigation.getParam("locationName")}
            </Text>

            <FontAwesome
              name="heart"
              size={24}
              color="red"
              style={styles.heartIcon}
              onPress={() => onLike()}
            />
          </View>

          <View style={styles.paragraph}>
            <Text>{navigation.getParam("locationAddress")}</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image 
            style={{ flex: 1, height: "100%", width: "100%" }}
            source={{ uri: googleImage }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textPostion}>
          <Text style={styles.title}>Group Listings</Text>
          <MaterialIcons
            name="add"
            size={35}
            color="black"
            style={styles.addModal}
            onPress={() => setModalOpen(true)}
          />
        </View>
        <FlatList
          style={{ marginBottom: 50 }}
          data={groupListing}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("JoinGroup", item)}
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
  },
  imageContainer: {
    height: 300,
    width: "100%",
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowOffset: { height: 5 },
    marginVertical: 10,
  },
  image: {},
  textPostion: {
    right: 80,
  },
  paragraph: {
    flexDirection: "row",
  },
  locationInfo: {
    alignSelf: "flex-start",
  },
  heartIcon: {
    top: 4,
  },
  addModal: {
    position: "absolute",
    right: -145,
  },
  modalContent: {
    flex: 1,
  },
});

export default EventPage;
