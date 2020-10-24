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
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Search from './search'

export default function Header({ navigation, title }) {
  const [modalOpen, setModalOpen] = useState(false);

  const onSearch = (eventName,eventAddress,photo_ref) =>{

    const items={
      locationName: eventName.toString(),
      locationAddress: eventAddress.toString(),
      locationPhoto: photo_ref.toString(),
    }

    console.log(items)
    navigation.navigate("EventPage",items)
    
  }

  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={styles.close}
            />
            <Search setModalOpen={setModalOpen} onSearch={onSearch}/>

          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.hamburgerIcon}
      />
      <View></View>
      <AntDesign
        name="search1"
        size={20}
        color="black"
        style={styles.searchIcon}
        
        onPress={()=>setModalOpen(true)}

      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
        {/**Write function to hide search bar */}
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
  hamburgerIcon: {
    position: "absolute",
    left: -70,
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
//   close:{
//       position: "absolute",
//       left: -145,
//   }
});
