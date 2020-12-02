import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View,Button,FlatList } from 'react-native'
import {globalStyles} from '../styles/globalStyles'
import Axios from 'axios'



export default function JoinRequests() {




    const approve= ()=>{
        Axios.post(`https://hotspot-backend.herokuapp.com/api/v1/post/AcceptJoinRequest`,{
            request_id:"5fc6ded794eb8a000b9f4ded"
        })
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

    const deny =() =>{
        Axios.post(`https://hotspot-backend.herokuapp.com/api/v1/post/DenyJoinRequest`,{
            request_id:"5fc6ded794eb8a000b9f4ded"
        }).then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }


    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.card}>
                <Text>JoinRequests</Text>
                
                {/* 5fc69fff3a0964000af0ee27 */}


                <Button title="accept" onPress={()=>approve()}/>
                <Button title="deny" onPress={()=>deny()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
