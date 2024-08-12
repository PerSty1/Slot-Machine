document.getElementById('spinButton').addEventListener('click', function() {
    const items = document.querySelectorAll('.slot__item');
    items.forEach(item => {
        let randomIndex = Math.floor(Math.random() * 5); // 5 можливих позицій для прокруту
        let translateY = -100 * randomIndex; // Розмір зображення
        item.style.transform = `translateY(${translateY}px)`;
    });
});
