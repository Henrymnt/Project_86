import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import createMaterialBottomTabNavigator from '@react-navigation/material-bottom-tabs react-native-paper'
import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'

import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () =>{
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconname;
                    if(route.name === 'Feed'){
                        iconname = focused
                        ? 'book'
                        : 'book-outline'
                    } else if (route.name === 'CreatePost'){
                        iconName= focused ? 'create' : 'create-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                }
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }}>
            <Tab.Screen name= "Feed" component= {Feed}/>
            <Tab.Screen name= "Create Post" component= {CreatePost}/>
        </Tab.Navigator>
    )
}
export default BottomTabNavigator