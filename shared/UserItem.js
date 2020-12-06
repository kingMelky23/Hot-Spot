import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 



export default function UserItem(props) {

    const isAdmin = (admin) =>{
        if(admin ==  true){
            return(<FontAwesome5 name="crown" size={24} color="#FF5555" />)
        } else {
            return(<FontAwesome5 name="crown" size={24} color="transparent" />)
        }
    }

    return (
        <View style={styles.container}>
            

            <Image
                style={{height: 40, width: 40, borderRadius: 30}}
                source={{
                    uri:"https://reactnative.dev/img/tiny_logo.png"
                }}
            />
            <Text style={{fontSize: 20, bottom:25,right:5}}>{props.name}</Text>
            {isAdmin(props.admin)}
            {/* <FontAwesome5 name="crown" size={24} color="black" /> */}
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        height: 80,
        width: "95%",
        backgroundColor:"#fdfcfa",
        borderRadius: 5,
        borderWidth:1,
        borderColor:"gray",
        borderStyle:"solid",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        margin:8,
        paddingHorizontal:8 ,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius:5,
        shadowOffset:{ height: 5 },
        
    }
})
