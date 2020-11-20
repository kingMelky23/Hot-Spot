import React from "react";
import { StyleSheet,Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
import * as yup from "yup";

import FlatButton from "../shared/button";


/** add yup validation for date and time */



/**
 * send date as epoc time
 */

const groupSchema = yup.object({
  first_name: yup.string().required().min(4),
  last_name: yup.string().required().min(4),
  age: yup.string().required(),
  email: yup.string().required(),
  gender:yup.string().required(),
});

export default function CreateGroup({ addGroup }) {
  return (
    <View style={{ ...globalStyles.card, marginTop: 10 }}>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          age: "",
          meetup_time: "",
          ending_time: "",
        }}
        validationSchema={groupSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addGroup(values);
        }}
      >
        {(formikProps) => (
          <View>
            <Text style={styles.title}>first_name:</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Group first_name"
              onChangeText={formikProps.handleChange("first_name")}
              value={formikProps.values.first_name}
              onBlur={formikProps.handleBlur("first_name")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.first_name && formikProps.errors.first_name}
            </Text>
            <Text style={styles.title}>last_name:</Text>
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
            <Text style={styles.title}>Capacity:</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="2-16"
              onChangeText={formikProps.handleChange("age")}
              value={formikProps.values.age}
              keyboardType={"numeric"}
              onBlur={formikProps.handleBlur("age")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.age &&
                formikProps.errors.age}
            </Text>
         

            <FlatButton text="submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  timeFormat: {
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
  },
});
