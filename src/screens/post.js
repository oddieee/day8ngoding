import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity,  StyleSheet} from "react-native";
import axios from 'axios';

const AddUser = () =>{
    const [username, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    
}


const createNewUser = async () => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            name: userName,
            email: userEmail,
        });
     
        console.log('User Added:', response.data);
    
    } catch (error) {
      console.error('Error adding user:', error);
    }

    return(
        <View style={StyleSheet.container}>
            <TextInput
            style={style.input}
            placeholder="Enter Name"
            value={userName}
            onChange={text => setUserName(text)}
        />
        <TextInput
            style={style.input}
            placeholder="Enter Email"
            value={userEmail}
            onChange={text => setUserEmail(text)}
        />
        <TouchableOpacity style={StyleSheet.addButton} onPress={handleAdduser}>
            <Text style={StyleSheet.buttonText}>Add User</Text>
        </TouchableOpacity>
        </View>
    )

};

