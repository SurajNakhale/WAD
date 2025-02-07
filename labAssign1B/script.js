
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate inputs
    if (!name || !email || !password) {
        alert('All fields are required!');
        return;
    }

    // Mock AJAX POST request
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);

        // Store data in local storage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        // Redirect to display page
        window.location.href = 'display.html';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
 


