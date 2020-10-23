import React, {useState} from 'react'
import { StyleSheet, FlatList, Text, View , Image,TouchableOpacity} from 'react-native'

var faker = require("faker");

export default function Home({navigation}) {

    const [locations, changeLocations] = useState([
    {
        picture: faker.image.city(),
        name: faker.address.city(),
        numberOfGroups:9,
        key:"1"
    },
    {
        picture: faker.image.city(),
        name: faker.address.city(),
        numberOfGroups:12,
        key:"2"
    },
    {
        picture: faker.image.city(),
        name:faker.address.city(),
        numberOfGroups:3,
        key:"3"
    }]);

    const pressHandler = () =>{
        navigation.navigate('EventPage')
    }

    return (
        <View>
            <FlatList 
            data={locations}
            renderItem={({item}) => (
                <TouchableOpacity onPress={pressHandler}>
                    <View style={styles.boxView}>       
                        <Image style={styles.img} source={{
                            uri:item.picture
                        }}/>
                        <View>
                            <Text style={styles.heading}>{item.name}</Text>
                            <Text style={styles.groups}>{item.numberOfGroups} Groups</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}/>
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
