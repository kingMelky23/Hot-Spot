import React from 'react'
import { StyleSheet,Button, Text,TextInput, View } from 'react-native'
import { globalStyles} from '../styles/globalStyles'
import {Formik} from 'formik'
import * as yup from 'yup'

import FlatButton from '../shared/button'
import { FlatList } from 'react-native-gesture-handler'

/** add yup validation for date and time */

const groupSchema = yup.object({
    name: yup.string().required().min(4),
    description: yup.string().required().min(8),
    capacity: yup.string().required()
        .test('is-num-2-16','capacity must be num 2-16', (val)=>{
            return parseInt(val) < 16 && parseInt(val) > 1;
        })

})

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
}

const styles = StyleSheet.create({})
