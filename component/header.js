import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {globalStyles} from '../styles/globalStyles'

import Search from './search'

export default function Header (props){
    return(
        <View style={styles.container}>
            <Text style={globalStyles.titleText}>Hot Spot</Text>
            <Search/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 180,
        backgroundColor: "#FF5555",
        paddingTop:35,
    },
})