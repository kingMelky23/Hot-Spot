import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { globalStyles } from "../styles/globalStyles";
import axios from "axios"
import FlatButton from '../shared/button'

const registerForm = yup.object({
  firstName: yup.string().required().min(3),
  lastName: yup.string().required().min(4),
  email: yup.string().required().min(4),
  password: yup.string().required().min(5),
  age: yup.string().required(),
  username: yup.string().required()
});

export default function Register({ navigation }) {
  return (
    // <View style={{color:"red"}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <View style={{color:"black"}}> */}
      <ScrollView style={styles.container} contentContainerStyle={
        {flexGrow:1, justifyContent:'center', alignItems:"center"}
        }>
       
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            age: "",
            username:""
          }}
          validationSchema={registerForm}
          onSubmit={(values, actions) => {
            axios.post("https://hotspot-backend.herokuapp.com/api/v1/post/CreateUser",{
              email: values.email,
              password: values.password,
              username: values.username,
              first_name: values.firstName,
              last_name: values.lastName,
              gender:'M',
              age: values.age.toString()
            }).then((res) => {
              // console.log(res);
              navigation.goBack();
              }
            ).catch((err) => {
              console.log("err");
            })
            actions.resetForm();
          }}
        >

          {(formikProps) => (
            <View>
              <Text>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                onChangeText={formikProps.handleChange("firstName")}
                value={formikProps.values.name}
                onBlur={formikProps.handleBlur("firstName")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.firstName && formikProps.errors.firstName}
              </Text>

              <Text>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="lastName"
                onChangeText={formikProps.handleChange("lastName")}
                value={formikProps.values.lastName}
                onBlur={formikProps.handleBlur("lastName")}
              />
              <Text style={globalStyles.errorText}>
                {" "}
                {formikProps.touched.lastName && formikProps.errors.lastName}
              </Text>

              <Text>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={formikProps.handleChange("username")}
                value={formikProps.values.username}
                onBlur={formikProps.handleBlur("username")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.username && formikProps.errors.username}
              </Text>

              <Text>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="password"
                onChangeText={formikProps.handleChange("password")}
                value={formikProps.values.password}
                onBlur={formikProps.handleBlur("password")}
              />
              <Text style={globalStyles.errorText}>
                {" "}
                {formikProps.touched.password && formikProps.errors.password}
              </Text>

              <Text>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                onChangeText={formikProps.handleChange("email")}
                value={formikProps.values.email}
                onBlur={formikProps.handleBlur("email")}
              />
              <Text style={globalStyles.errorText}>
                {" "}
                {formikProps.touched.email && formikProps.errors.email}
              </Text>

              <Text>Age</Text>
              <TextInput
                style={styles.input}
                placeholder="age"
                onChangeText={formikProps.handleChange("age")}
                value={formikProps.values.age}
                keyboardType={"numeric"}
                onBlur={formikProps.handleBlur("age")}
              />
              <Text style={globalStyles.errorText}>
                {" "}
                {formikProps.touched.age && formikProps.errors.age}
              </Text>
              <FlatButton text="submit" onPress={formikProps.handleSubmit}/>
            </View>
          )}
        </Formik>
      </ScrollView>
    </TouchableWithoutFeedback>
          // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#003f5c",
    // alignItems: "center",
    // justifyContent:"center"
  },
  input: {
    borderWidth: 1,
    color: "#000",
    padding: 10,
    fontSize: 18,
    borderRadius: 25,
    width: 250,
    height: 35,
    backgroundColor: "#465881",
    margin:10
  },
  // inputView: {
  //   width: "100%",
  //   backgroundColor: "#465881",
  //   borderRadius: 25,
  //   height: 10,
  //   justifyContent: "center",
  //   padding: 20,
  // },
});
