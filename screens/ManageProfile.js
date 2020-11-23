import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
import * as yup from "yup";

import FlatButton from "../shared/button";



const updateSchema = yup.object({
  first_name: yup.string().required().min(4),
  last_name: yup.string().required().min(4),
  age: yup.string().required(),
  email: yup.string().required(),
  gender:yup.string().required(),
});

export default function ManageProfile({ updateProfile }) {
  return (
    <View style={{ ...globalStyles.card, marginTop: 10 }}>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          age: "",
          gender: "",
          email: "",
        }}
        validationSchema={updateSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          updateProfile(values);
        }}
      >
        {(formikProps) => (
          <View>
            <Text style={styles.title}>First name:</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="first name"
              onChangeText={formikProps.handleChange("first_name")}
              value={formikProps.values.first_name}
              onBlur={formikProps.handleBlur("first_name")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.first_name && formikProps.errors.first_name}
            </Text>
            <Text style={styles.title}>Last name:</Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="last_name"
              onChangeText={formikProps.handleChange("last_name")}
              value={formikProps.values.last_name}
              onBlur={formikProps.handleBlur("last_name")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.last_name &&
                formikProps.errors.last_name}
            </Text>
            <Text style={styles.title}>Age:</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="age"
              onChangeText={formikProps.handleChange("age")}
              value={formikProps.values.age}
              keyboardType={"numeric"}
              onBlur={formikProps.handleBlur("age")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.age &&
                formikProps.errors.age}
            </Text>
            <Text style={styles.title}>E-mail:</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="example@gmail.com"
              onChangeText={formikProps.handleChange("email")}
              value={formikProps.values.email}
              keyboardType={"numeric"}
              onBlur={formikProps.handleBlur("email")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.email &&
                formikProps.errors.email}
            </Text>
            <Text style={styles.title}>E-mail:</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Gender"
              onChangeText={formikProps.handleChange("gender")}
              value={formikProps.values.gender}
              keyboardType={"numeric"}
              onBlur={formikProps.handleBlur("gender")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.gender &&
                formikProps.errors.gender}
            </Text>
            <FlatButton text="submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    color:"black"
  }
});
