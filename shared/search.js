import React, { useState,useEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { date } from "yup";
import axios from 'axios'


export default function Search({setModalOpen,onSearch}) {




  const [eventAddress,setEventAddress] = useState()
  const [eventName,setEventname] = useState()
 

  useEffect(()=>{
    console.log(eventAddress)
    const searchTerm = async ()=>{
      await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${eventAddress}&inputtype=textquery&fields=photos&key=AIzaSyD0uqCj-8Hr4IegcMZ4NVGzPSQmhmEAZk4`)
      .then((res)=>{
      const photo_ref = res.data.candidates[0].photos[0].photo_reference    
 
      return (axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_ref}&key=AIzaSyD0uqCj-8Hr4IegcMZ4NVGzPSQmhmEAZk4`))
        
     })
     .then((res)=>{

      photoURL = res.request.responseURL
      submitData(photoURL)
    })
     .catch((err)=> console.log("Initial load of image \n"+err))
   }

   if(typeof eventAddress === undefined){
      console.log("Search: event address is undefined")
   }else{
     searchTerm() 
     }
   
  },[eventAddress])


  const submitData = (photoURL) =>{
    
    // axios.post(`https://hotspot-backend.herokuapp.com/api/v1/post/CreateEvent`,{
    //   name:eventName,
    //   description:eventName,
    //   lat,
    //   long,
    //   location_address: eventAddress

    // })


    onSearch(eventName,eventAddress,photoURL)
    setModalOpen(false)
  }
    
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      minLength={2}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setEventname(data.structured_formatting.main_text)
        setEventAddress(data.description.toString())
        
      
      }}
      query={{
        key: "AIzaSyD0uqCj-8Hr4IegcMZ4NVGzPSQmhmEAZk4",
        language: "en",
        //key here
      }}
      currentLocation={true}
      debounce={500}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  input: {
    marginBottom: 10,

    borderBottomWidth: 1,
    borderColor: "#ddd",
    height: 45,
    width: "90%",
    backgroundColor: "#FFF",
    paddingLeft: 20,
    paddingRight: 10,
  },
});
