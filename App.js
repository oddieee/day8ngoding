import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import UserList from './src/screens/UserList';

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{flex:1}}>
      <UserList />
    </SafeAreaView>
    </>
  );