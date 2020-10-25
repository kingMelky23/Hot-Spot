import React from 'react'
import { createStackNavigator } from "react-navigation-stack";

import SignOut from '../screens/SignOut'
import Header from '../shared/header'


const screens = {
    SignOut: {
        screen: SignOut,
        navigationOptions: ({navigation})=>{
            return{
                headerTitle: ()=> <Header navigation={navigation} title='SignOut'/>
            }
        }
    },
}

const SignOutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        title: "Hot Spot",
            headerStyle:{
                backgroundColor: '#FF5555',
                height:100
            }
    }
})

export default SignOutStack