import React, { useState, useEffect,useCallback } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import {useFocusEffect} from "react-navigation-hooks"
import { globalStyles } from "../styles/globalStyles";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {set_user} from '../redux/actions/'
var faker = require("faker");
import {GOOGLE_API_KEY } from "../secret"
import { set_Coordinates } from "../redux/actions";
import { company } from "faker";


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
  ]);

  async function findEvents(lat,lng) {
    await axios
      .get(
        `https://hotspot-backend.herokuapp.com/api/v1/get/FindEventsNearCoordinates?lat=${lat}&long=${lng}`
      )
      .then((res) => {changeLocations(res.data.events)
      })
      .catch((err) => {
        console.log(err);
      });
  }


  useEffect(() => {
    const userDetails = () =>{
      axios.get(`https://hotspot-backend.herokuapp.com/api/v1/get/GetProfileData`)
      .then((res)=>{
        const {
          _id:{$oid:uid},
          username,
          first_name,
          last_name,
          age,
          karma
        } = res.data.user
        dispatch(set_user({
          uid,
          username,
          first_name,
          last_name,
          age,
          karma
        }))

      })
      .catch((err)=>console.log(err))
    }

    userDetails()
  }, [])

  useFocusEffect(useCallback(() => {
    const geoLocation = async () => {
      await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_API_KEY}`)
        .then((res) => {
          const lng = parseFloat(res.data.location.lng);
          const lat = parseFloat(res.data.location.lat);
          dispatch(
            set_Coordinates({
              longitude: lng,
              latitude: lat,
            })
          );
          findEvents(lat,lng)
        })
        .catch((err) => {
          console.log("Geolocation error___________________________________________________")
          console.log(err);
        });
    };
    geoLocation();
  }, []));

  const getSize =(arr)=>{
    if(typeof(arr) === "undefined") return 0
    return arr.length || 0
  }
  
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.card}>
        <FlatList
          data={locations}
          // keyExtractor={item=>item._id.$oid}
          renderItem={({ item }) => {

            if(getSize(item.groups)!== 0){
              return(
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("EventPage", {
                      locationName: item.name,
                      locationAddress:item.location_address,
                      locationPhoto: item.photo_url,
                    })
                  }
                >
                  <View style={styles.boxView}>
                    <Image
                      style={styles.img}
                      source={{
                        uri: item.photo_url,
                      }}
                    />
                    <View style={{width:"40%"}}>
                      <Text style={styles.head}> {item.name} </Text>
                      <Text style={styles.groups}>Groups {getSize(item.groups)} </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ) 
            } else {}

         }}
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
