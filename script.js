const getUsersButton = document.getElementById('get-users-btn');
const userCardGrid = document.getElementById('user-card-grid');
const loader = document.getElementById('loader');

getUsersButton.addEventListener('click', getUsers);

function getUsers() {
    loader.classList.add('show');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            loader.classList.remove('show');
            renderUserCards(data);
        })
        .catch(error => {
            loader.classList.remove('show');
            console.error(error);
        });
}

function renderUserCards(users) {
    userCardGrid.innerHTML = '';
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <img src="https://via.placeholder.com/100" alt="${user.name}">
            <h2>${user.name}</h2>
            <p>${user.email}</p>
        `;
        userCardGrid.appendChild(userCard);
    });
}