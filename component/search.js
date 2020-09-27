import React from 'react'
import {View,StyleSheet,TextInput} from 'react-native'

export default function Search (){
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder = 'Search...'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    input:{
        marginBottom: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        height: 45,
        width: 300,
        backgroundColor: '#FFF',
        paddingLeft:10,
        paddingRight:10,
     },
})