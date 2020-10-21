import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'

export default function Profile() {
    return (
        <View styles={styles.view}>
            <Text>Hola</Text>
            {/* <Image styles={styles.topHeader} 
            source={require('../detroit.jpg')}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    topHeader: {
        height:200,
        width:500,
        resizeMode:"cover"
    },
    view: {
        height:500,
        width:500
        
    },
})
