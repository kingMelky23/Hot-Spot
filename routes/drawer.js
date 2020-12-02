import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer, createSwitchNavigator,} from 'react-navigation'
import {useFocusEffect} from "react-navigation-hooks"
import HomeStack from './homeStack'
import profileStack from './profileStack'
import NotificationStack from './notificationStack'
import MyGroups from './myGroupsStack'
import AuthStack from './authStack'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'

import SignoutStack from './SignoutStack'


const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: HomeStack,

    },
    Profile:{
        screen: profileStack,
    },
    Notifications:{
        screen: NotificationStack
    },
    MyGroups:{
        screen: MyGroups
    },
    SignOut:{
        screen: SignoutStack
    }
    
})

export default createAppContainer(createSwitchNavigator( {
    AuthLoading: AuthLoadingScreen,
    App: RootDrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }))

