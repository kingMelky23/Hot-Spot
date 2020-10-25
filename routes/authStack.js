import React from 'react'
import { createStackNavigator } from "react-navigation-stack";

import Login from '../screens/Login'
import Register from '../screens/Register'
import Header from '../shared/header'
 

const screens = {
    Login: {
        screen: Login,
        navigationOptions: ({navigation})=>{
            return{
                headerTitle: ()=> <Header navigation={navigation} title='Hot Spot'/>
            }
        }
    },
    Register: {
        screen: Register,
        navigationOptions: ({navigation})=>{
            return{
                headerTitle: ()=> <Header navigation={navigation} title='Register'/>
            }
        }
    },
}

const authStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        title: "Hot Spot",
            headerStyle:{
                backgroundColor: '#FF5555',
                height:100
            }
    }
})

export default authStack