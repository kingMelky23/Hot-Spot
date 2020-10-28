import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { globalStyles } from "../styles/globalStyles";

const registerForm = yup.object({
  firstName: yup.string().required().min(4),
  lastName: yup.string().required().min(4),
  email: yup.string().required().min(4),
  password: yup.string().required().min(5),
  age: yup.string().required(),
});

export default function Register({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            age: "",
          }}
          validationSchema={registerForm}
          onSubmit={(values, actions) => {
            actions.resetForm();
          }}
        >
          {(formikProps) => (
            <View style={globalStyles.inputView}>
              <Text>First Last:</Text>
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

              <Text>lastName:</Text>
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

              <Text>E-mail</Text>
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

              <Text>Age:</Text>
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
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    color: "#000",
    padding: 10,
    fontSize: 18,
    borderRadius: 25,
    width: "100%",
    height: 50,
    backgroundColor: "#465881",
  },
});
