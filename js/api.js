const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => showData(data))
}



const showData = (data) => {
    const container = document.getElementById('users');
    
    
    for (const user of data) {
        const userContainer = document.createElement('div');
        userContainer.classList.add('user');
        userContainer.innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        <p>${user.phone}</p>
    `;
    container.appendChild(userContainer);
    console.log(user);
    }
}