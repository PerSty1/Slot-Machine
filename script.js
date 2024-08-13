const images = [
    'images/lemon.png',
    'images/watermelon.png',
    'images/cherries.png'
];

document.getElementById('spinButton').addEventListener('click', function() {
    const slots = document.querySelectorAll('.slot__item img');
    slots.forEach(slot => {
        const randomIndex = Math.floor(Math.random() * images.length);
        slot.src = images[randomIndex];
    });
});
