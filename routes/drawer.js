import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'

import HomeStack from './homeStack'
import profileStack from './profileStack'
import NotificationStack from './notificationStack'
import MyGroups from './myGroupsStack'



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
    }
    
})

export default createAppContainer(RootDrawerNavigator)