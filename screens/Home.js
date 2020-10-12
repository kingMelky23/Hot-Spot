import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Home({navigation}) {

    const pressHandler = () =>{
        navigation.navigate('EventPage')
    }

    return (
        <View>
            <Text> Home Page</Text>
            <Button title='go to event' onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({})
