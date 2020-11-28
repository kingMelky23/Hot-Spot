//@refresh reset
import React,{useState,useEffect, useCallback} from 'react';
import {GiftedChat} from "react-native-gifted-chat"
import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios from "axios"
import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCgm4G2RhFUyizI0gRGdYUOaPERfAERs8g",
  authDomain: "react-native-chat-13103.firebaseapp.com",
  databaseURL: "https://react-native-chat-13103.firebaseio.com",
  projectId: "react-native-chat-13103",
  storageBucket: "react-native-chat-13103.appspot.com",
  messagingSenderId: "843653971732",
  appId: "1:843653971732:web:c8673f84a4ac921b7f4c01"
};
// Initialize Firebase

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

// LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const db = firebase.firestore()
const chatsRef = db.collection('chat')

export default function GroupChat() {
    const [user,setUser] = useState({_id:null, name:null})
    const [name,setName] = useState('')
    const [messages,setMessages] = useState([])
  
    useEffect(()=>{
    
      readUser()
      const unsubscribe = chatsRef.onSnapshot(querySnapshot =>{
        const messagesFireStore = querySnapshot
          .docChanges().
          filter(({type})=>type === "added")
          .map(({doc})=>{
              const message = doc.data()
              return{...message,createdAt: message.createdAt.toDate()}
        }).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        appendMessages(messagesFireStore)
      })
      return ()=>unsubscribe()
    },[])
  
    const appendMessages =  useCallback((messages)=>{
      setMessages((previousMessages)=>GiftedChat.append(previousMessages, messages))
    }, [messages])

    async function readUser(){
        await Axios.get(`https://hotspot-backend.herokuapp.com/api/v1/get/GetProfileData`)
        .then((res)=>{
          const {_id:{ $oid:_id},username:name,first_name,last_name} = res.data.user
          setUser({_id,name})
        })
        .catch((err)=>console.log(err))
    }
  

  
    async function handleSend(messages){
      const writes = messages.map(m=>chatsRef.add(m))
      await Promise.all(writes)
    }
  



    return (
        
        <GiftedChat messages={messages} user={user} onSend={handleSend}/>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});
