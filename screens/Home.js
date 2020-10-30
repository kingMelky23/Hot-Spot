import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
var faker = require("faker");

import { set_Coordinates } from "../redux/actions";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const coordinates = useSelector((state) => state.coordinatesReducer);

  const [locations, changeLocations] = useState([
    {
      locationPhoto: faker.image.city(),
      locationName: faker.address.city(),
      locationAddress: faker.address.city(),
      numberOfGroups: 9,
      key: "1",
    },
    {
      locationPhoto: faker.image.city(),
      locationName: faker.address.city(),
      numberOfGroups: 12,
      key: "2",
    },
    {
      locationPhoto: faker.image.city(),
      locationName: faker.address.city(),
      numberOfGroups: 3,
      key: "3",
    },
  ]);

  async function findEvents() {
    console.log(
      "findEvents______________________________________________________________"
    );
    

    await axios
      .get(
        `https://hotspot-backend.herokuapp.com/api/v1/get/FindEventsNearCoordinates?lat=${coordinates.latitude}&long=${coordinates.longitude}`
      )
      .then((res) => {
        console.log("HI");
        console.log(
          "-------------------------------------------------------------"
        );
        // console.log(res.data);
        changeLocations(res.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const geoLocation = async () => {
      await axios
        .post(
          "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD0uqCj-8Hr4IegcMZ4NVGzPSQmhmEAZk4"
        )
        .then((res) => {
          const lng = parseFloat(res.data.location.lng);
          const lat = parseFloat(res.data.location.lat);

          dispatch(
            set_Coordinates({
              longitude: lng,
              latitude: lat,
            })
          );
        })
        .then(() => findEvents())
        .catch((err) => {
          console.log(err);
        });
    };
    geoLocation();
  }, []);

  const pressHandler = () => {
    navigation.navigate("EventPage");
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.card}>
        <FlatList
          data={locations}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("EventPage", item)}
            >
              <View style={styles.boxView}>
                <Image
                  style={styles.img}
                  source={{
                    uri: item.photo_url,
                  }}
                />
                <View>
                  <Text style={styles.head}> {item.name} </Text>
                  <Text style={styles.groups}> Groups</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 150,
  },
  boxView: {
    width: 500,
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  head: {
    fontSize: 18,
    fontWeight: "bold",
  },
  groups: {
    marginTop: 7,
  },
});
