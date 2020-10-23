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
      await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${eventAddress}&inputtype=textquery&fields=photos&key=AIzaSyD0uqCj-8Hr4IegcMZ4NVGzPSQmhmEAZk4`).then((res)=>{
       // res.data.candidates[0].photos[0]
 
       const photo_ref = res.data.candidates[0].photos[0].photo_reference
       
       submitData(photo_ref)
     })
     .catch((err)=> console.log(err))
   }
   searchTerm()
  },[eventAddress])



    
  //still no set
  //photo seems to be undefined 
  //when set as a return it return [object object]

  const submitData = (photo_ref) =>{
    console.log("photos"+ photo_ref)
    onSearch(eventName,eventAddress,photo_ref)
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
        
        //searchTerm()
      }}
      query={{
        key: "AIzaSyD0uqCj-8Hr4IegcMZ4NVGzPSQmhmEAZk4",
        language: "en",
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
