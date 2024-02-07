const updateUserInfo = async (userId, newData) => {
    try {
    const response = await fecth('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'PUT',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
    });
    
    const updatedUser = await response.json();
    consule.log('User Updated:', updatedUser);
    } catch (error) {
    consule.error ('Error updating user', error);
    }
};