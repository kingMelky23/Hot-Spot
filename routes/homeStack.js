import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Event from "../screens/EventPage";
import GroupPage from "../screens/GroupPage";
import Header from "../shared/header";
import Home from "../screens/Home";
import PlainHeader from '../shared/plainHeader'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Hot Spot" />,
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
  GroupPage: {
    screen: GroupPage,
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
