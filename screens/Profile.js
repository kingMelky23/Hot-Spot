import Axios from 'axios';
import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View,Image,ScrollView,FlatList } from 'react-native'

export default function Profile() {


  const [profileDetails,setProfileDetails] = useState({
    first_name:"",
    last_name:"",
    age:null,
    username:"",
    karma:null
  })
  const DATA = [
    {
      eventName: "Concert",
      location: "New York",
      activeGuests:4,
      picture:"https://media-exp1.licdn.com/dms/image/C4D1BAQFAC3o2eHS_vA/company-background_10000/0?e=2159024400&v=beta&t=EUdtqUGN2pXf17w9xlDLBdSI60wIgV4gI0W36q8NHto"
    },
    {
      eventName: "Party",
      location: "Brookyln",
      activeGuests:5,
      picture:"https://media-exp1.licdn.com/dms/image/C4D1BAQFAC3o2eHS_vA/company-background_10000/0?e=2159024400&v=beta&t=EUdtqUGN2pXf17w9xlDLBdSI60wIgV4gI0W36q8NHto"
    },
    {
      eventName: "Bar Meeting",
      location: "Queens",
      activeGuests:6,
      picture:"https://media-exp1.licdn.com/dms/image/C4D1BAQFAC3o2eHS_vA/company-background_10000/0?e=2159024400&v=beta&t=EUdtqUGN2pXf17w9xlDLBdSI60wIgV4gI0W36q8NHto"
    },
  ];

  useEffect(() => {
    console.log("user deatils _______________________________________________________________________________")
    const userDetails = () =>{
      Axios.get(`https://hotspot-backend.herokuapp.com/api/v1/get/GetProfileData`)
      .then((res)=>{
        console.log(res.data.user)

        const {
          username,
          first_name,
          last_name,
          age,
          karma
        } = res.data.user
        setProfileDetails({
          username,
          first_name,
          last_name,
          age,
          karma
        })

        console.log(username)
      })
      .catch((err)=>console.log(err))
    }

    userDetails()
  }, [])


    return (
        <ScrollView style={styles.container}>
        <Image style={styles.header} source={{uri:"https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}}></Image>
        <Image style={styles.avatar} source={{uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}/>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{profileDetails.first_name+" "+profileDetails.last_name+","+profileDetails.age}</Text>
            <Text style={styles.karma}></Text>
            <Text style={styles.info}>Staten Island, New York</Text>
            <Text style={styles.description}>Profile description</Text>
          </View>
      </View>
      <View style={styles.attendedEvents}>
        <Text style={styles.eventsHeaderText}>Recently Attended Events</Text>
      <FlatList
        data={DATA}
        renderItem={data=> {
          return (
            <View style={styles.eventCard}>
              <Image source={{uri:data.item.picture}} style={styles.cardImage}/>
              <View style={styles.eventContainer}>
                <Text>{data.item.eventName}</Text>
                <Text>{data.item.location}</Text>
                <Text>Active Guests: {data.item.activeGuests}</Text>
              </View>
            </View>
          )
        }}
        keyExtractor={(item) => item.eventName}
        horizontal
      />
      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00BFFF",
      height:200,
    },
    eventsHeaderText:{
      fontSize:28,
      marginVertical:10,
      fontWeight:"bold"
    },
    attendedEvents:{
      paddingHorizontal:5
    },
    eventContainer:{
      paddingHorizontal:2,
      paddingVertical:16,
      width:120
    },
    eventCard: {
      width: '40%',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 5, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 1,  
    },
    cardImage:{
      width:150,
      height:150,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    karma:{
      fontSize:18
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
  });
  
                                              
 
  
  