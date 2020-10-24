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



export default function LoginHeader({ navigation, title }) {
  


  return (
    <SafeAreaView style={styles.header}>
      

      <View>
        <Text style={styles.headerText}>{title}</Text>

      </View>
    </SafeAreaView>
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
    // fontFamily: "Kalam-Bold",
    textAlign: "center",
  },
  
});
