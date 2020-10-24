import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'

import HomeStack from './homeStack'
import profileStack from './profileStack'



const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: HomeStack,

    },
    Profile:{
        screen: profileStack,
    }
    
})

export default createAppContainer(RootDrawerNavigator)