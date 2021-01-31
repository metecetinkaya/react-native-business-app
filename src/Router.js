import React from 'react';
import { Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Icon from 'react-native-vector-icons/Ionicons'

import Home from './screens/Home'
import Contacts from './screens/Contacts'
import ContactsDetail from './screens/ContactsDetail'
import Settings from './screens/Settings'
import SettingsModal from './components/SettingsModal'
import DrawerMenu from './components/DrawerMenu'

const ContactStack = createStackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            title: 'Contacts',
        }
    },
    ContactsDetail: {
        screen: ContactsDetail,
        navigationOptions: {
        }
    }
}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center'
    }
})

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Contacts',
            tabBarLabel: 'Anasayfa',
            tabBarIcon: ({ tintColor }) => (<Icon name='md-home' size={26} color={tintColor} />)
        }
    },
    Contacts: {
        screen: ContactStack,
        navigationOptions: {
            tabBarLabel: 'Kişiler',
            tabBarIcon: ({ tintColor }) => (<Icon name='md-people' size={26} color={tintColor} />)
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Ayarlar',
            tabBarIcon: ({ tintColor }) => (<Icon name='md-settings' size={26} color={tintColor} />)
        }
    }
}, {
    tabBarOptions: { // tabbar ayarlarının olduğu kısım
        activeTintColor: '#2ecc71',  // aktif olduğunda görünen renk
        showLabel: false,            // icon altındaki yazılar
    }
});

const ModalStack = createStackNavigator({
    Tabs: {
        screen: TabNavigator
    },
    SettingsModal: {
        screen: SettingsModal
    }
}, {
    mode: 'modal',
    headerMode: 'none'
})

const DrawerNavigator = createDrawerNavigator({
    ModalStack: {
        screen: ModalStack
    },
})


export default createAppContainer(DrawerNavigator);