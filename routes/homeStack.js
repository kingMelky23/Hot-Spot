import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"

import Event from "../screens/EventPage";
import GroupPage from "../screens/GroupPage";
import JoinGroup from '../screens/JoinGroup'
import Header from "../shared/header";
import Home from "../screens/Home";
import Login from '../screens/Login'
import PlainHeader from '../shared/plainHeader'
import ChatRoom from '../screens/ChatRoom'

const EventScreenTab = createMaterialBottomTabNavigator(
  {
    EventScreen:{
      screen: Event,
    },
    ChatRoom:{
      screen: ChatRoom,
    }
  },
  {
    initialRouteName: 'EventScreen',
    activeColor: '#f0edf6',
    inactiveColor: '#DD1111',
    barStyle: { backgroundColor: '#FF5555', height:80 },
    tabBarOptions:{
      keyboardHidesTabBar:true
    }
  }
)

const screens = {
  
  HomePage: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Hot Spot" />,
        headerLeft: () => null
      };
    },
  },
  EventPage: {
    screen: Event,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <PlainHeader navigation={navigation} title="Event" />,
        headerLeft: () => null
      };
    },
  },
  JoinGroup: {
    screen: JoinGroup,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <PlainHeader navigation={navigation} title="Event" />,
        headerLeft: () => null
      };
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    title: "Hot Spot",
    headerStyle: {
      backgroundColor: "#FF5555",
      height: 100,
      borderWidth: 0,
    },
  },
});

export default HomeStack;
