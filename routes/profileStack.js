import React from 'react'
import { createStackNavigator } from "react-navigation-stack";

import Profile from '../screens/Profile'
import Header from '../shared/header'


const screens = {
    profile: {
        screen: Profile,
        navigationOptions: ({navigation})=>{
            return{
                headerTitle: ()=> <Header navigation={navigation} title='Profile'/>
            }
        }
    },
}

const profileStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        title: "Hot Spot",
            headerStyle:{
                backgroundColor: '#FF5555',
                height:100
            }
    }
})

export default profileStack