// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();            // stop the default page refresh

        // Grab & trim user inputs
        const username = document.getElementById('username').value.trim();
        const email    = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        /* === VALIDATION RULES === */

        // Username: at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email: must contain “@” and “.”
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password: at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        /* === FEEDBACK DISPLAY === */

        feedbackDiv.style.display = 'block';   // make the box visible

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.backgroundColor = '#d4edda'; // green-ish
            feedbackDiv.style.color = '#155724';
            form.reset();                      // optional: clear the form
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.backgroundColor = '#f8d7da'; // red-ish
            feedbackDiv.style.color = '#721c24';
        }
    });
});
