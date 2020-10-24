import React from 'react'
import { createStackNavigator } from "react-navigation-stack";

import GroupPage from '../screens/GroupPage'
import MyGroups from '../screens/MyGroups'
import Header from '../shared/header'
import PlainHeader from '../shared/plainHeader'


const screens = {
    MyGroups: {
        screen: MyGroups,
        navigationOptions: ({navigation})=>{
            return{
                headerTitle: ()=> <Header navigation={navigation} title='My Groups'/>
            }
        }
    },
    GroupPage: {
        screen: GroupPage,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: () => <PlainHeader navigation={navigation} title="Event" />,
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