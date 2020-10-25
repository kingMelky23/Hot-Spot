import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image, Alert } from 'react-native'
import axios from "axios"; 

export default function Login({navigation}) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')

   
      const submitUsername= (username,password)=>{
         axios.post(`https://hotspot-backend.herokuapp.com/api/v1/post/Login`, {
          username:username,
          password:password
        })
        .then((res) => {

            if (JSON.parse(res.request._response).success) {
                navigation.navigate("HomePage")
            } else {
              Alert.alert("Oops!", "Login Invalid")  
            };
        })
       .catch((err)=> {
         console.log("Error in post request")
        }
       )
     }    

    return (
        <View style={styles.container}>
           <View styles={styles.logoWrapper}>
            <Text style={styles.logo}>Hot Spot</Text>
            {/* <Image source={require('../assets/main-logo.png')} style={styles.logoPicture}/> */}
          </View>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Username..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => setUsername(text)}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => setPassword(text)}/>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => submitUsername(username,password)}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoWrapper: {
        flexDirection:"row",
        marginBottom:100,
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
      },
      logoPicture:{
        width:50,
        height:50
      },
      inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"white"
      },
      forgot:{
        color:"white",
        fontSize:11
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText:{
        color:"white"
      }
  });