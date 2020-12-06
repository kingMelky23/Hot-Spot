import React from "react";
import { StyleSheet, Text, TextInput, View} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
import * as yup from "yup";


import FlatButton from "../shared/button";


const reviewScheme = yup.object({
  karma: yup.number().required().integer().
    test("rating must be between -5 and 5", "rating must be between -5 and 5", (val) => {
    return parseInt(val) < 6 && parseInt(val) > -6;
  }),
  comment: yup.string().required(),
});

export default function KarmaReview({ addReview,selectedID }) {
  return (
    <View style={{ ...globalStyles.card, marginTop: 10 }}>
      <Formik
        initialValues={{
            karma:null,
            comment:"",
            id:selectedID
        }}
        validationSchema={reviewScheme}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View>
            <Text style={styles.title}>comment:</Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="comment"
              onChangeText={formikProps.handleChange("comment")}
              value={formikProps.values.comment}
              onBlur={formikProps.handleBlur("comment")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.comment &&
                formikProps.errors.comment}
            </Text>
            <Text style={styles.title}>karma:</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="2-16"
              onChangeText={formikProps.handleChange("karma")}
              value={formikProps.values.karma}
              keyboardType={"numbers-and-punctuation"}
              onBlur={formikProps.handleBlur("karma")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.karma &&
                formikProps.errors.karma}
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
  inputBox:{
    borderWidth: 1,
        borderColor: "#DDD",
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        
  },
  title: {
    fontSize: 25,
    color:"black"
  },

});
