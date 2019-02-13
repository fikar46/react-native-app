import React from 'react';
import { createBottomTabNavigator, createAppContainer ,TabNavigator } from 'react-navigation';
import Chat from './Chat'
import User from './User'
import Timeline from './Timeline'
import {Icon} from 'react-native-elements'

export default createBottomTabNavigator({
    Guru: {
        screen:User,
        navigationOptions:{
            tabBarLabel:"Guru",
            tabBarIcon: ({tintColor}) => <Icon name='account-circle' color={tintColor} size={35}/>,
        },
    },
    Obrolan: {
      screen:Chat,
        navigationOptions:{
            tabBarLabel:"Chat",
            tabBarIcon: ({tintColor}) => <Icon name='chat' color={tintColor} size={35}/>,
        },
    },
    Timeline: {
      screen:Timeline,
        navigationOptions:{
            tabBarLabel:"Timeline",
            tabBarIcon: ({tintColor}) => <Icon name='list' color={tintColor} size={35}/>,
        },
    },
});

