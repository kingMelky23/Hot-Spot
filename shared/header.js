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
import { MaterialIcons,AntDesign } from "@expo/vector-icons";

import {globalStyles} from "../styles/globalStyles"

import Search from "./search";

export default function Header({ navigation, title }) {
  const [modalOpen, setModalOpen] = useState(false);

  const onSearch = (eventName, eventAddress, photoURL) => {
    const items = {
      locationName: eventName.toString(),
      locationAddress: eventAddress.toString(),
      locationPhoto: photoURL.toString(),
    };

    navigation.navigate("EventPage", items);
  };

  const openMenu = () => {
    navigation.openDrawer();
  };

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
        name="menu"
        size={28}
        onPress={openMenu}
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
  
});
