import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"

import Profile from '../screens/Profile'
import ProfileReviewScreen from "../screens/ProfileReviewScreen"
import Header from '../shared/header'


const ProfileScreenTab = createMaterialBottomTabNavigator(
    {
        Profile:{
            screen: Profile
        },
        Review:{
            screen: ProfileReviewScreen
        }

    },
    {
        initialRouteName: 'Profile',
        activeColor: '#f0edf6',
        inactiveColor: '#DD1111',
        barStyle: { backgroundColor: '#FF5555', height:70 },
      }
)


const screens = {
    profile: {
        screen: ProfileScreenTab,
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