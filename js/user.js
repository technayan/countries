const loadUser = async () => {
    const res = await fetch ('https://randomuser.me/api/')
    const data = await res.json();
    console.log(data.results[0]);
    showUser(data.results[0]);
}

const showUser = (users) => {
    const buddyContainer = document.getElementById('buddy-container');
    
        const userContainer = document.createElement('div');
        userContainer.classList.add('col');
        userContainer.innerHTML = `
        <div class="card h-100">
        <img src="${users.picture.large}" class="card-img-top user-img mx-auto mt-3" alt="">
        <div class="card-body">
          <h5 class="card-title text-center">${users.name.title} ${users.name.first} ${users.name.last}</h5>
          <p class="card-text"><strong>Email:</strong> ${users.email}</p>
          <p class="card-text"><strong>Phone:</strong> ${users.phone}</p>
          <p class="card-text"><strong>Address:</strong> ${users.location.street.number}, ${users.location.street.name}, ${users.location.city}, ${users.location.state}, ${users.location.country}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Registered ${users.registered.age} years ago.</small>
        </div>
      </div>
        `;
        buddyContainer.appendChild(userContainer);

        
    
} 

