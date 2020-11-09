import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FlatButton from "../shared/button";

export default function SignOut({ navigation }) {
  const _signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Auth");
  };

  return (
    <View style={styles.container}>
      <FlatButton text="Logout" onPress={() => _signOutAsync()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});
