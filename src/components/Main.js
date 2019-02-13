import React from 'react';
import { createStackNavigator } from 'react-navigation';
// import LoginForm from './LoginForm';
import Authentication from './authentication'
import MainMenu from './MainMenu';

export default createStackNavigator(
    {
        Login: {
            screen: Authentication
        },
        MainMenu: {
            screen: ({ navigation }) => <MainMenu screenProps={{ rootNavigation: navigation }} />
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
);