import React from "react";
import { StyleSheet,  Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
import * as yup from "yup";
import DateTimeFormat from "../shared/DateTimeFormat";

import FlatButton from "../shared/button";

const groupSchema = yup.object({
  name: yup.string().required().min(4),
  description: yup.string().required().min(8),
  max_members: yup
    .string()
    .required()
    .test("is-num-2-16", "max_members must be num 2-16", (val) => {
      return parseInt(val) < 16 && parseInt(val) > 1;
    }),
  meetup_time: yup.string().required(),
  ending_time:yup.string().required(),
});

export default function CreateGroup({ addGroup }) {
  return (
    <View style={{ ...globalStyles.card, marginTop: 10 }}>
      <Formik
        initialValues={{
          name: "",
          description: "",
          max_members: "",
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
            <Text style={styles.title}>Name:</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Group Name"
              onChangeText={formikProps.handleChange("name")}
              value={formikProps.values.name}
              onBlur={formikProps.handleBlur("name")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.name && formikProps.errors.name}
            </Text>
            <Text style={styles.title}>Description:</Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Description"
              onChangeText={formikProps.handleChange("description")}
              value={formikProps.values.description}
              onBlur={formikProps.handleBlur("description")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.description &&
                formikProps.errors.description}
            </Text>
            <Text style={styles.title}>Capacity:</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="2-16"
              onChangeText={formikProps.handleChange("max_members")}
              value={formikProps.values.max_members}
              keyboardType={"numeric"}
              onBlur={formikProps.handleBlur("max_members")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.max_members &&
                formikProps.errors.max_members}
            </Text>
            {/* <Text >Date</Text> */}

            <View style={styles.timeFormat}>
              <DateTimeFormat name="meetup_time" title="Start Date" />
              <Text style={globalStyles.errorText}>
              {formikProps.touched.meetup_time &&
                formikProps.errors.meetup_time}
            </Text>
              <DateTimeFormat name="ending_time" title="End Date" />
              <Text style={globalStyles.errorText}>
              {formikProps.touched.ending_time &&
                formikProps.errors.ending_time}
            </Text>
            </View>

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
