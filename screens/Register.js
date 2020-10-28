import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {Formik} from 'formik'
import * as yup from 'yup'
import {globalStyles} from '../styles/globalStyles'


const registerForm = yup.object({
    firstName: yup.string().required().min(4),
    lastName: yup.string().required().min(4),
    email : yup.string().required().min(4),
    password: yup.string().required().min(5),
    dob: yup.string().required()
})


export default function Register({navigation}) {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    firstName:"",
                    lastName:"",
                    email:"",
                    password:"",
                    dob:"",                  
                }}
                validationSchema={registerForm}
                onSubmit={(values, actions)=>{
                    actions.resetForm();

                }}
            >
                {(formikProps)=>(
                    <View style={globalStyles.inputView}>
                        <Text>First Last:</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="First Name"
                            onChangeText={formikProps.handleChange("firstName")}
                            value={formikProps.values.name}
                            onBlur = { formikProps.handleBlur("firstName")}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.name && 
                            formikProps.error.name}</Text>

                        <Text>lastName:</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder = "lastName"
                            onChangeText={formikProps.handleChange('lastName')}
                            value={formikProps.values.lastName}
                            onBlur={formikProps.handleBlur("lastName")}
                        />
                        <Text style={globalStyles.errorText}> {formikProps.touched.lastName && formikProps.errors.lastName}</Text>
                        
                        <Text>Password</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder = "password"
                            onChangeText={formikProps.handleChange('password')}
                            value={formikProps.values.password}
                            onBlur={formikProps.handleBlur("password")}
                        />
                        <Text style={globalStyles.errorText}> {formikProps.touched.password && formikProps.errors.password}</Text>

                        <Text>E-mail</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder = "E-mail"
                            onChangeText={formikProps.handleChange('email')}
                            value={formikProps.values.email}
                            onBlur={formikProps.handleBlur("email")}
                        />
                        <Text style={globalStyles.errorText}> {formikProps.touched.email && formikProps.errors.email}</Text>

                        <Text>DOB:</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder = "01/01/2020"
                            onChangeText={formikProps.handleChange('dob')}
                            value={formikProps.values.dob}
                            onBlur={formikProps.handleBlur("dob")}
                        />
                        <Text style={globalStyles.errorText}> {formikProps.touched.dob && formikProps.errors.dob}</Text>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input:{
        flex:1,
        borderWidth: 1,
        borderColor: "#DDD",
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        width: "100%"
      }
})
