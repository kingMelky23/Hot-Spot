import React, { Component } from 'react'
import { View, ActivityIndicator,Text, StyleSheet} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthLoadingScreen extends Component{
    constructor (){
        super();
        this._bootstrapAsnyc()
    }

    _bootstrapAsnyc = async () =>{
        const userToken = await AsyncStorage.getItem('userToken')
        console.log(userToken)
        this.props.navigation.navigate (userToken ? 'App' : 'Auth')
    }

    render(){
    return (
        <View style={styles.container}>
            <ActivityIndicator/>
            <Text>loading...</Text>
        </View>
    )}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default AuthLoadingScreen