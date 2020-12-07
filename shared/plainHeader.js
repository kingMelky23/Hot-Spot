import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import Search from "./search"
import {globalStyles} from '../styles/globalStyles'


export default function PlainHeader({ navigation, title }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openMenu = () => {
    navigation.openDrawer();
  };

  
  const onSearch = (eventName,eventAddress,photo_ref) =>{

    const items={
      locationName: eventName.toString(),
      locationAddress: eventAddress.toString(),
      locationPhoto: photo_ref.toString(),
    }

    
    navigation.navigate("EventPage",items)
    
  }


  return (
    <View style={globalStyles.headerContainer}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={globalStyles.modalContainer}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={globalStyles.close}
            />
            <Search setModalOpen={setModalOpen} onSearch={onSearch} />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={globalStyles.headerContent}>

      <MaterialIcons
        name="arrow-back"
        size={28}
        onPress={()=>navigation.goBack()}
        style={globalStyles.hamburgerIcon}
      />
      <Text style={globalStyles.headerText}>{title}</Text>
      <AntDesign
        name="search1"
        size={20}
        color="black"
        style={globalStyles.searchIcon}
        onPress={() => setModalOpen(true)}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: 250,
    height: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    fontFamily: "Kalam-Bold",
    textAlign: "center",
  },
  icon: {
    position: "absolute",
    left: -25,
    top: 0,
  },
  input: {
    marginBottom: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    height: 45,
    width: 300,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchIcon: {
    position: "absolute",
    right: -55,
    borderWidth: 1,
    borderRadius: 18,
    padding: 7,
  },
  modalContent:{
    flex: 1, 
  },
  close:{
      position: "absolute",
      left: -145,
  }
});
