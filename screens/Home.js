import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList, Text, View , Image,TouchableOpacity} from 'react-native'
import { globalStyles } from "../styles/globalStyles";
import axios from "axios"

var faker = require("faker");

export default function Home({navigation}) {

    const [locations, changeLocations] = useState([
    {
        locationPhoto: faker.image.city(),
        locationName: faker.address.city(),
        locationAddress: faker.address.city(),
        numberOfGroups:9,
        key:"1"
    },
    {
        locationPhoto: faker.image.city(),
        locationName: faker.address.city(),
        numberOfGroups:12,
        key:"2"
    },
    {
        locationPhoto: faker.image.city(),
        locationName:faker.address.city(),
        numberOfGroups:3,
        key:"3"
    }]);

    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState(); 

    async function findEvents(lat, long) { 
        await axios.get(`https://hotspot-backend.herokuapp.com/api/v1/get/FindEventsNearCoordinates?lat=${lat}&long=${long}`)
        .then((res) => {
            console.log("HI")
            console.log("-------------------------------------------------------------")
            console.log(res.data);
            changeLocations(res.data.events);
        }).catch((err) => {
            console.log(err);
        })
        
    }

    useEffect(()=>{
        const geoLocation = async() => {
            await axios.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD0uqCj-8Hr4IegcMZ4NVGzPSQmhmEAZk4")
        .then((res)=>{
            setLongitude(res.data.location.lng);
            setLatitude(res.data.location.lat);
            findEvents(latitude,longitude);
        })
        .catch((err)=>{console.log(err)})}
        geoLocation();
    },[])

 


    const pressHandler = () =>{
        navigation.navigate('EventPage',)
    }

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.card}>
            <FlatList 
            data={locations}
            renderItem={({item}) => (
                <TouchableOpacity onPress={()=>navigation.navigate('EventPage',item)}>
                    <View style={styles.boxView}>       
                        <Image style={styles.img} source={{
                            uri:item.photo_url
                        }}/>
                        <View>
                            <Text style={styles.head}> {item.name} </Text>
                            <Text style={styles.groups}> {item.groups.length} Groups</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width:200,
        height:150
    },
    boxView:{
        width:500,
        flex:1,
        flexDirection:"row",
        margin:10
    },
    head: {
        fontSize:18,
        fontWeight:"bold"
    },
    groups: {
        marginTop:7
    }
   

})
