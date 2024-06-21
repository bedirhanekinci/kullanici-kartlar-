document.addEventListener('DOMContentLoaded', async () => {
    

    const container = document.getElementById('user-cards-container');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        

        const users = await response.json();
        console.log('kullanıcılar:', users);  

        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <h2><i class="fas fa-user"></i> ${user.name}</h2>
                <div class="section">
                    <i class="fas fa-id-badge"></i> ID: ${user.id}<br>
                    <i class="fas fa-user"></i> Username: ${user.username}
                </div>
                <div class="section">
                    <i class="fas fa-envelope"></i> Email: ${user.email}<br>
                    <i class="fas fa-phone"></i> Phone: ${user.phone}<br>
                    <i class="fas fa-globe"></i> Website: ${user.website}
                </div>
                <div class="section">
                    <i class="fas fa-location-dot"></i> Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}
                </div>
                <div class="section">
                    <i class="fas fa-building"></i> Company: ${user.company.name}
                </div>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error('Veriler alınırken hata oluştu:', error);
        container.innerHTML = '<p>Veriler alınırken bir hata oluştu.</p>';
    }
});
