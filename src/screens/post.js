import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const AddUser = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const handleAddUser = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
                name: userName,
                email: userEmail,
            });
         
            console.log('User Added:', response.data);
        
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={userName}
                onChangeText={text => setUserName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={userEmail}
                onChangeText={text => setUserEmail(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
                <Text style={styles.buttonText}>Add User</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '80%',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    addButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default AddUser;