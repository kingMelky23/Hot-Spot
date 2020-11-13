import React, { useState } from "react";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
import * as yup from "yup";
import DateTimeFormat from "../shared/DateTimeFormat";

import FlatButton from "../shared/button";
import { FlatList } from "react-native-gesture-handler";

/** add yup validation for date and time */

const groupSchema = yup.object({
  name: yup.string().required().min(4),
  description: yup.string().required().min(8),
  max_members: yup
    .string()
    .required()
    .test("is-num-2-16", "max_members must be num 2-16", (val) => {
      return parseInt(val) < 16 && parseInt(val) > 1;
    }),
});

export default function CreateGroup({ addGroup }) {
  return (
    <View style={{ ...globalStyles.card, marginTop: 10 }}>
      <Formik
        initialValues={{
          name: "",
          description: "",
          max_members: "",
          startDate: "",
          endDate: "",
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

<<<<<<< HEAD
export default function CreateGroup({addGroup}) {
    return (
      <View style={{...globalStyles.card,marginTop: 10}}>
        <Formik
          initialValues={{
            name: "",
            description: "",
            participants: '4',
            capacity: "",
            location: "",
            date: "",
            time: "",
            members:[{}]
          }}
          validationSchema={groupSchema}
          onSubmit={(values, actions)=>{
            actions.resetForm();
            addGroup(values)
            
          }}
        >
            {(formikProps)=>(
                <View>
                    <Text>Name:</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Group Name"
                        onChangeText={formikProps.handleChange('name')}
                        value={formikProps.values.name}
                        onBlur ={formikProps.handleBlur('name')}
                    />
                        <Text style={globalStyles.errorText}>{formikProps.touched.name && formikProps.errors.name}</Text>
                        <Text>Description:</Text>
                    <TextInput
                        multiline
                        style={globalStyles.input}
                        placeholder="Description"
                        onChangeText={formikProps.handleChange('description')}
                        value={formikProps.values.description}
                        onBlur ={formikProps.handleBlur('description')}
                    />
                        <Text style={globalStyles.errorText}>{formikProps.touched.description &&formikProps.errors.description}</Text>
                        <Text>Capacity:</Text>
                    <TextInput
                        
                        style={globalStyles.input}
                        placeholder="2-16"
                        onChangeText={formikProps.handleChange('capacity')}
                        value={formikProps.values.capacity}
                        keyboardType={"numeric"}
                        onBlur ={formikProps.handleBlur('capacity')}
                    />
                        <Text style={globalStyles.errorText}>{formikProps.touched.capacity && formikProps.errors.capacity}</Text>
                        <Text>Date</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="01/02/2020"
                        onChangeText={formikProps.handleChange('date')}
                        value={formikProps.values.date}
                    />
                    <TextInput
                        style={[globalStyles.input,{marginBottom: 50}]}
                        placeholder="12:00am"
                        onChangeText={formikProps.handleChange('time')}
                        value={formikProps.values.time}
                    />
                    <FlatButton text="submit" onPress={formikProps.handleSubmit}/>
                    {/* <Button title="submit" color="#FF5555" onPress={formikProps.handleSubmit}/> */}
                </View>
            )}
        </Formik>
      </View>
    );
=======
            <View style={styles.timeFormat}>
              <DateTimeFormat name="startDate" title="Start Date" />
              <DateTimeFormat name="endDate" title="End Date" />
            </View>

            <FlatButton text="submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
>>>>>>> 4cd78c1a5ae5d3518172518882d23a06fa828c5b
}

const styles = StyleSheet.create({
  timeFormat: {
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
  },
});
