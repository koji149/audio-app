import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon, Badge, Root, Text, Button } from "native-base";
/* screens */
import MainTabScreen from '../screens/mainScreens/MainTabScreen';
import SearchScreen from '../screens/otherScreens/SearchScreen';
import RecordingScreen from '../screens/otherScreens/RecordingScreen';
import NotificationScreen from '../screens/otherScreens/NotificationScreen';
import UserTabScreen from '../screens/userScreens/UserTabScreen';
import OtherUserScreen from '../screens/userScreens/OtherUserScreen';
import OtherUserListScreen from '../screens/userScreens/OtherUserListScreen';
import EditProfileScreen from '../screens/userScreens/EditProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainTabScreen}
        options={{
          title: <Text style={{color: '#fff'}}>Audio-App</Text>,
          headerStyle: {
            backgroundColor: '#87ceeb',
          },
        }}
      />
      <Stack.Screen 
        name="OtherUserPage" 
        component={OtherUserScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#87ceeb',
          },
          headerBackTitle: 'Back'
        }}
      />
    </Stack.Navigator>
  );
};

const SeachStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{headerShown: false}}
    />
    </Stack.Navigator>
  );
};

const RecordingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recording"
        component={RecordingScreen}
        options={{
          title: <Text style={{color: '#fff'}}>Recording</Text>,
          headerStyle: {
            backgroundColor: '#87ceeb',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: <Text style={{color: '#fff'}}>Notification</Text>,
          headerStyle: {
            backgroundColor: '#87ceeb',
          },
        }}
      />
      <Stack.Screen 
        name="OtherUserPage" 
        component={OtherUserScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#87ceeb',
          },
          headerBackTitle: 'Back'
        }}
      />
    </Stack.Navigator>
  );
};

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="User"
      component={UserTabScreen}
      options={{
        title: <Text style={{color: '#fff'}}>My Page</Text>,
        headerStyle: {
          backgroundColor: '#87ceeb',
        },
      }}
    />
      <Stack.Screen 
        name="OtherUserPage" 
        component={OtherUserScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#87ceeb',
          },
          headerBackTitle: 'Back'
        }} 
      />
      <Stack.Screen 
        name="OtherUserList" 
        component={OtherUserListScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#87ceeb',
          },
          headerBackTitle: 'Back'
        }} 
      />
      <Stack.Screen 
        name="EditProfile" 
        component={EditProfileScreen}
        options={{
          title: <Text style={{color: '#fff'}}>Edit</Text>,
          headerStyle: {
            backgroundColor: '#87ceeb',
          },
          headerBackTitle: 'Back'
        }} 
      />
    </Stack.Navigator>
  );
};

const screenOption = ({route}) => ({
  tabBarIcon: () => {
    let iconName;
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Search':
        iconName = 'search';
        break;
      case 'Recording':
        iconName = 'mic';
        break;
      case 'Notification':
        iconName = 'ios-notifications';
        break;
      case 'User':
        iconName = 'md-person';
        break;
    }
    return <Icon name={iconName} />;
  },
});

export default AppNavigator = () => {
  return (
    <Root>
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Home" component={MainStack} />
        <Tab.Screen name="Search" component={SeachStack} />
        <Tab.Screen name="Recording" component={RecordingStack} />
        <Tab.Screen name="Notification" component={NotificationStack} />
        <Tab.Screen name="User" component={UserStack} />
      </Tab.Navigator>
    </NavigationContainer>
    </Root>
  );
};