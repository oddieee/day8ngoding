const createNewUser = async () => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
    
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: 'john', email: 'john@example.com'})
        });
     
    
    const newUser = await response.json();
    console.log('New User Created:', newUser);
    
    } catch (error) {
      console.error('Error creating user:', error);
    }
}