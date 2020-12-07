//@refresh reset
import React, { useState, useEffect, useCallback } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useSelector } from "react-redux";
import Axios from "axios";
import { firebaseConfig } from "../secret";

import * as firebase from "firebase";
import "firebase/firestore";

// Initialize Firebase

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default function GroupChat({ navigation }) {
  const [user, setUser] = useState({ _id: null, name: null });
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatsRef, setChatRef] = useState(null);
  const groupsName = useSelector((state) => state.groupNameReducer);

  useEffect(() => {
    console.log(groupsName);
    let ref = db.collection(groupsName);
    setChatRef(ref);
    readUser();
    const unsubscribe = ref.onSnapshot((querySnapshot) => {
      const messagesFireStore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === "added")
        .map(({ doc }) => {
          const message = doc.data();
          return { ...message, createdAt: message.createdAt.toDate() };
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      appendMessages(messagesFireStore);
    });
    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [messages]
  );

  async function readUser() {
    await Axios.get(
      `https://hotspot-backend.herokuapp.com/api/v1/get/GetProfileData`
    )
      .then((res) => {
        const {
          _id: { $oid: _id },
          username: name,
          first_name,
          last_name,
        } = res.data.user;
        setUser({ _id, name });
      })
      .catch((err) => console.log(err));
  }

  handleSend = async (messages) => {
    const writes = messages.map((m) => chatsRef.add(m));
    await Promise.all(writes);
  };

  return <GiftedChat messages={messages} user={user} onSend={handleSend} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});
