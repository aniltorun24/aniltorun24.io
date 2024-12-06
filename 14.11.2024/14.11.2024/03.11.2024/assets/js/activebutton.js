const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function updateIndicator(index) {
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Örneğin, bir sonraki düğmeye tıklanıldığında çalıştırılacak olay
document.querySelector('.carousel').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % indicators.length;
    updateIndicator(currentIndex);
});
