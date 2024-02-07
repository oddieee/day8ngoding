
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import UserList from './src/screens/UserList';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import post from './src/screens/post'
import Delete from './src/utils/Delete'
import Update from './src/utils/Update'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='UserList'>
        <Stack.Screen name="UserList" component={UserList}/>
        <Stack.Screen name="Post" component={post}/>
        <Stack.Screen name="Update" component={Update}/>
        <Stack.Screen name ="Delete" component={Delete} />
      </Stack.Navigator>
    </NavigationContainer>

    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{flex:1}}>
      <UserList />
    </SafeAreaView>
    </>
  );
};