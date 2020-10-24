import React from 'react'
import { createStackNavigator } from "react-navigation-stack";

import MyGroups from '../screens/MyGroups'
import Header from '../shared/header'


const screens = {
    MyGroups: {
        screen: MyGroups,
        navigationOptions: ({navigation})=>{
            return{
                headerTitle: ()=> <Header navigation={navigation} title='MyGroups'/>
            }
        }
    },
}

const MyGroupsStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        title: "Hot Spot",
            headerStyle:{
                backgroundColor: '#FF5555',
                height:100
            }
    }
})

export default MyGroupsStack