// Fetch user data from the API and display it
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading text
        dataContainer.innerHTML = '';

        // Build an unordered list
        const userList = document.createElement('ul');

        users.forEach(function (user) {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Add list to the page
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Fetch error:', error);
    }
}

// Run only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
