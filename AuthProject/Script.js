document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    // Simple client-side validation
    if (username === '' || password === '') {
        document.getElementById('message').innerText = 'All fields are required!';
        return;
    }

    // Save user info in local storage (simple simulation)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    document.getElementById('message').innerText = 'User registered successfully!';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Fetch stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        document.getElementById('message').innerText = 'Login successful!';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password!';
    }
});
