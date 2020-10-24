import React, {useState} from 'react'
import { StyleSheet, FlatList, Text, View , Image,TouchableOpacity} from 'react-native'
import { globalStyles } from "../styles/globalStyles";

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
                            uri:item.locationPhoto
                        }}/>
                        <View>
                            <Text style={styles.heading}>{item.locationName}</Text>
                            <Text style={styles.groups}>{item.numberOfGroups} Groups</Text>
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
   
})
