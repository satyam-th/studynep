// Show a message to the user
function showMessage(message, type) {
    // Find the message box element
    const box = document.getElementById('messageBox');
    box.textContent = message; // Set the message text
    box.className = 'message-box ' + type; // Add a class for styling
    box.style.display = 'block'; // Show the box

    // Hide the box after 3 seconds
    setTimeout(function() {
        box.style.display = 'none';
    }, 3000);
}

// Show the signup form and hide the login form
function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('formTitle').textContent = 'Sign Up';
    document.getElementById('messageBox').style.display = 'none';

    // Clear all signup fields
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupFullName').value = '';
    document.getElementById('signupAddress').value = '';
    document.getElementById('signupPassword').value = '';
    document.getElementById('confirmPassword').value = '';
}

// Show the login form and hide the signup form
function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('formTitle').textContent = 'Login';
    document.getElementById('messageBox').style.display = 'none';

    // Clear login fields
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}

// When user clicks signup
function handleSignup() {
    // Get all input values
    const username = document.getElementById('signupUsername').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const fullName = document.getElementById('signupFullName').value.trim();
    const address = document.getElementById('signupAddress').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Check if any field is empty
    if (!username || !email || !fullName || !address || !password || !confirmPassword) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        showMessage('Passwords do not match.', 'error');
        document.getElementById('confirmPassword').value = '';
        return;
    }

    // Check if email is valid
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Check if username already exists
    if (localStorage.getItem(username)) {
        showMessage('Username already exists. Please choose a different one.', 'error');
        return;
    }

    // Save user data in localStorage
    const user = {
        password: password,
        email: email,
        fullName: fullName,
        address: address
    };
    localStorage.setItem(username, JSON.stringify(user));
    showMessage('Signup successful! You can now log in.', 'success');

    // Clear fields
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupFullName').value = '';
    document.getElementById('signupAddress').value = '';
    document.getElementById('signupPassword').value = '';
    document.getElementById('confirmPassword').value = '';

    // Switch to login form after signup
    setTimeout(showLogin, 1500);
}

// When user clicks login
function handleLogin() {
    // Get input values
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    // Check if fields are empty
    if (!username || !password) {
        showMessage('Please enter both username and password.', 'error');
        return;
    }

    // Get user data from localStorage
    const userString = localStorage.getItem(username);

    // If user not found
    if (!userString) {
        showMessage('Invalid username or password.', 'error');
        document.getElementById('loginPassword').value = '';
        return;
    }

    // Check password
    const user = JSON.parse(userString);
    if (user.password === password) {
        showMessage('Login successful!', 'success');
        // You can redirect or show protected content here
    } else {
        showMessage('Invalid username or password.', 'error');
    }

    // Clear password field
    document.getElementById('loginPassword').value = '';
}