import React from 'react'
import { createStackNavigator } from "react-navigation-stack";

import Event from '../screens/EventPage'
import GroupPage from '../screens/GroupPage'
import Header from '../shared/header'
import Home from '../screens/Home'

const screens = {
    EventPage: {
        screen: Event,
        navigationOptions: ({navigation})=>{
            return{
                headerTitle: ()=> <Header navigation={navigation} title='Event '/>
            }
        }
    },
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=>{
            return{
                headerTitle: ()=> <Header navigation={navigation} title='Hot Spot'/>
            }
        }
    },
    GroupPage:{
        screen: GroupPage
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        title: "Hot Spot",
            headerStyle:{
                backgroundColor: '#FF5555',
                height:160,
                borderWidth: 0

            },
            
    }
})

export default HomeStack