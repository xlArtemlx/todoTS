import  React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {List} from '../List/List'
import {Profile} from '../Profile/Profile'

const Tab =  createMaterialTopTabNavigator();


export function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#255F92',
            tabStyle: {
                backgroundColor: '#FFFFFF',
                top: -3,
                borderTopWidth: 1,
                borderColor: '#D3D3D3'
            },
            labelStyle: {
                marginBottom: 3
            },
            showIcon:true
            
        }}
      >
            <Tab.Screen 
            name="List" 
            component={List}
            options={{
                tabBarIcon: ({focused}) => {
                    let icStyle = focused ?  styles.focus :  styles.unFocus
                    return <Image style={{...styles.Icon, ...icStyle}} source={require('../../images/todo-list.png')}/>
                },
            }}
            
            />

            <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                tabBarIcon: ({focused}) => {
                    let icStyle = focused ?  styles.focus :  styles.unFocus
                    return <Image style={{...styles.Icon, ...icStyle}} source={require('../../images/avatar.png')}/>
                },
            }}
            />

      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = {
    Icon: {
        width: 25,
        height: 25,
    },
    focus:{
        opacity: 1,
        tintColor: '#4169E1'
    },
    unFocus:{
        opacity: 0.5,
        tintColor: '#6d6d74'
    }
};