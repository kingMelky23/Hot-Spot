import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import {createMaterialBottomTabNavigator} from'react-navigation-material-bottom-tabs'

import JoinRequests from '../screens/JoinRequests'
import GroupChat from '../screens/GroupChat'
import GroupPage from '../screens/GroupPage'
import MyGroups from '../screens/MyGroups'
import Header from '../shared/header'
import PlainHeader from '../shared/plainHeader'

const GroupScreenTab = createMaterialBottomTabNavigator(
    {
        GroupPage:{screen:GroupPage},
        GroupChat:{screen:GroupChat}
    },
    {
        initialRouteName: 'GroupPage',
        activeColor: '#f0edf6',
        inactiveColor: '#DD1111',
        barStyle: { backgroundColor: '#FF5555', height:70 },
      }
)

const Requests = createMaterialBottomTabNavigator(
    {
        MyGroups:{screen: MyGroups},
        JoinRequests:{screen:JoinRequests}
    },
    {
        initialRouteName: 'MyGroups',
        activeColor: '#f0edf6',
        inactiveColor: '#DD1111',
        barStyle: { backgroundColor: '#FF5555', height:70 },
      }
)

const screens = {
    MyGroups: {
        screen: Requests,
        navigationOptions: ({navigation})=>{
            return{
                headerTitle: ()=> <Header navigation={navigation} title='My Groups'/>

            }
        }
    },
    Group: {
        screen: GroupScreenTab,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: () => <PlainHeader navigation={navigation} title="Event" />,
            headerLeft: () => null
          };
        },
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