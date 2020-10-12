import React from 'react'
import {  StyleSheet, Text, View,Button } from 'react-native'

export default function GroupPage({navigation}) {
    return (
        <View>
            <Text>Group Page</Text>
            <Text>{navigation.getParam('name')}</Text>
            <Text>Capacity: {navigation.getParam('capacity')}</Text>
            <Text>Participants: {navigation.getParam('participants')}</Text>
            <Text>Location: {navigation.getParam('location')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
