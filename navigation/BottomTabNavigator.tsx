/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {View} from "react-native"
import Colors from '../constants/Colors';
import Header from "../components/Layout/Header";
import useColorScheme from '../hooks/useColorScheme';

import Home from '../screens/Home';
import Search from '../screens/Search';
import SearchResults from '../screens/SearchResults';
import Login from '../screens/Login';
import Register from '../screens/Register';

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={25} style={{ marginBottom: -3 }} {...props} />;
}
const customTabBarStyle = {
    activeTintColor: '#0091EA',
    inactiveTintColor: 'gray',
    style: {backgroundColor: 'white' },
}

const AppStack = createStackNavigator();
export default function AppNavigator(){
  return(
    <AppStack.Navigator
      //initialRouteName="Onboarding"
    >
      <AppStack.Screen name="Login" options={{headerShown: false}} component={Login} />
      <AppStack.Screen name="Register" options={{headerShown: false}} component={Register} />
      <AppStack.Screen name="Home" options={{headerShown: false}} component={BottomTabNavigator} />
    </AppStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  return (
      <BottomTab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      tabBarOptions={customTabBarStyle}
      shifting="false">
      <BottomTab.Screen
      name="Home"
      options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home-outline" color={color} />,
      }}
      component={TabOneNavigator} />
      <BottomTab.Screen
      name="Offers"
      options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-star-outline" color={color} />,
      }}
      component={TabTwoNavigator} />
      <BottomTab.Screen
      name="Search"
      options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search-outline" color={color} />,
      }}
      component={TabTwoNavigator} />
      <BottomTab.Screen
      name="Favourite"
      options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-heart-outline" color={color} />,
      }}
      component={TabTwoNavigator} />
      <BottomTab.Screen
      name="Profile"
      options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person-outline" color={color} />,
      }}
      component={TabTwoNavigator} />
      </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Home"
        component={Home}
        options={{ 
          header: ({ scene, previous, navigation }) => {
            return ( <Header navigation={navigation} scene={scene} backButton={previous ? true : false} /> );
          }
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Search"
        component={Search}
        options={{
        header: ({ scene, previous, navigation }) => {
            return ( <Header navigation={navigation} scene={scene} backButton={previous ? true : false} /> );
          } }}
      />
      <TabTwoStack.Screen
        name="SearchResults"
        component={SearchResults}
        options={{
        header: ({ scene, previous, navigation }) => {
            return ( <Header navigation={navigation} scene={scene} backButton={previous ? true : false} /> );
          } }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabTwoParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabTwoParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false
        }}
      />
    </TabFourStack.Navigator>
  );
}