import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native'
import axios from "axios"; 

export default function Login({navigation}) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')

   
      const submitUsername= (username,password)=>{
         axios.post(`https://hotspot-backend.herokuapp.com/api/v1/post/Login`, {
          username:"robbie",
          password:"23"
        })
        .then((res) => {
            console.log(res)
            console.log("I AM WORKING")
        })
       .catch((err)=> {
         console.log(err)
         console.log("Error in post request")
        }
       )

      // axios({
      //   method: 'post',
      //   url: 'https://hotspot-backend.herokuapp.com/api/v1/post/Login',
      //   data: {
      //     username: 'robbie',
      //     password: 'ro'
      //   }
      // })
      //  .catch((err)=> {
      //    console.log(err)
      //    console.log("Error in post request")
      //   }
      //  )

      // axios.request({
      //   method: 'GET',
      //   url: "https://hotspot-backend.herokuapp.com/api/v1/post/Login",
      //   body: {
      //     username:username,

      //   }
      
    
     }    

    return (
        <View style={styles.container}>
            <View styles={styles.logoWrapper}>
            {/* <Image source={require('../assets/main-logo.png')} style={styles.logoPicture}/> */}
            <Text style={styles.logo}>Hot Spot</Text>
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
      logoWrapper:{
        display:'flex',
        flexDirection:'column'
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
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