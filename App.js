
import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";

import {AppLoading} from 'expo';

import * as Font from "expo-font";

const getFonts = () =>
  Font.loadAsync({
    "Kalam-Bold":require('./assets/fonts/Kalam-Bold.ttf'),
    "Kalam-Light": require('./assets/fonts/Kalam-Light.ttf'),
    "Kalam-Regular": require('./assets/fonts/Kalam-Regular.ttf'),
  });


export default function App() {
  const [fontsLoaded,setFontsLoaded] = useState(false);
  


  if(fontsLoaded){
    return(
    <View style={styles.container} >
      <Header/>
    </View>
      
    )
  } else {
    return(
    <AppLoading
      startAsync={getFonts}
      onFinish={()=>setFontsLoaded(true)}
    />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5555",
    height: 100,
    // fontFamily: "Kalam-Bold"
  },
});
