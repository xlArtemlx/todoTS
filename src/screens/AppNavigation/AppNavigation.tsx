import  React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {List} from '../List/List'
import {Profile} from '../Profile/Profile'
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab =  createMaterialTopTabNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
          tabBarOptions={{
            activeTintColor: '#888888',
            
            labelStyle: {
                marginBottom: 0
            },
            showIcon:true,
            showLabel:false,
            indicatorStyle: {
                top: 0,
                backgroundColor: '#A52A2A',
               
            },
           style:{
               backgroundColor:'#fdf1d6'
           },
           pressColor:'#A52A2A',
        }}
        
      >
            <Tab.Screen 
            name="List" 
            component={List}
            options={{
                tabBarIcon: ({focused}) => {
                    return <Icon name='book'size={24} color={focused?'#A52A2A': '#888888'}/>
                },
            }}
            
            />

            <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                tabBarIcon: ({focused}) => {
                    return  <Icon name='user'size={24} color={focused?'#A52A2A': '#888888'}/>

                },
            }}
            />

      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = {
    Icon: {
        width: 27,
        height: 27,
    },
};