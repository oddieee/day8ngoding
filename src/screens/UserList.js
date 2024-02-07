import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const deleteUser = async (userId) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                console.log('User Deleted Successfully');
            } else {
                console.log('Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user', error);
        }
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>List of Users</Text>
            <FlatList
                data={users}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                        <Text style={styles.userTitle}>{item.title}</Text>
                        <Text>Body: {item.body}</Text>
                        <Button
                        title="Delete"
                        onPress={() => deleteUser(item.id)}
                          />                                            
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    userItem: {
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 8,
    },
    userTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

export default UserList;
