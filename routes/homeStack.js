import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Event from "../screens/EventPage";
import GroupPage from "../screens/GroupPage";
import JoinGroup from '../screens/JoinGroup'
import Header from "../shared/header";
import Home from "../screens/Home";
import Login from '../screens/Login'
import PlainHeader from '../shared/plainHeader'
import LoginHeader from '../shared/loginHeader'


const screens = {
  Login:{
    screen: Login,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <LoginHeader navigation={navigation} title="Hot Spot" />,
        
      };
    },

  },
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
      };
    },
  },
  JoinGroup: {
    screen: JoinGroup,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <PlainHeader navigation={navigation} title="Event" />,
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
