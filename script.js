document.addEventListener('DOMContentLoaded', function() {
    const carGrid = document.getElementById('car-grid');

    const cars = [
        {
            name: 'Gran Max',
            image: 'granmaxx.jpeg',
            price: 'Rp 450.000/hari',
            link: 'mobil1.html'
        },
        {
            name: 'Suzuki Carry',
            image: 'suzukicarry.jpeg',
            price: 'Rp 500.000/hari',
            link: 'detail.html'
        },
        {
            name: 'Honda CR-V',
            image: 'HondaCR-V.jpeg',
            price: 'Rp 3.800.000/hari',
            link: 'detail.html'
        },
        {
            name: 'Nissan X-Trail',
            image: 'NissanX-Trail.jpeg',
            price: 'Rp 4.200.000/hari',
            link: 'detail.html'
        },
        // Tambahan 5 mobil
        {
            name: 'Honda Brio',
            image: 'HondaBrio.jpeg',
            price: 'Rp 250.000/hari',
            link: 'detail.html'
        },
        {
            name: 'Toyota Avanza',
            image: 'ToyotaAvanza.jpeg',
            price: 'Rp 300.000/hari',
            link: 'detail.html'
        },
        {
            name: 'Mitsubishi Pajero Sport',
            image: 'MitsubishiPajeroSport.jpeg',
            price: 'Rp 900.000/hari',
            link: 'detail.html'
        },
        {
            name: 'BMW Series (3, 5, atau 7)',
            image: 'BMW Series(3, 5, atau 7).jpeg',
            price: 'Rp 4.000.000/hari',
            link: 'detail.html'
        },
        {
            name: 'Toyota HiAce (Minibus)',
            image: 'ToyotaHiAce(Minibus).jpeg',
            price: 'Rp 1.200.000/hari',
            link: 'detail.html'
        }
    ];

    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');

        carCard.innerHTML = `
            <div class="car-image-container">
                <img src="${car.image}" alt="${car.name}" class="car-image">
            </div>
            <h3 class="car-title">${car.name}</h3>
            <p class="car-price">${car.price}</p>
            <a href="${car.link}" class="rent-btn">Detail</a>
        `;

        carGrid.appendChild(carCard);
    });
});
