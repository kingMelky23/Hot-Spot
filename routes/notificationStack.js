import React from 'react'
import { createStackNavigator } from "react-navigation-stack";

import Notifications from '../screens/Notifications'
import Header from '../shared/header'


const screens = {
    Notifications: {
        screen: Notifications,
        navigationOptions: ({navigation})=>{
            return{
                headerTitle: ()=> <Header navigation={navigation} title='Notifications'/>
            }
        }
    },
}

const NotificationsStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        title: "Hot Spot",
            headerStyle:{
                backgroundColor: '#FF5555',
                height:100
            }
    }
})

export default NotificationsStack