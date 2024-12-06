function changeLanguage(language) {
    // Sayfadaki tüm elemanları seçiyoruz
    const elements = document.querySelectorAll("[data-en]");

    // Her eleman için döngü yaparak dil seçimine göre yazıyı değiştiriyoruz
    elements.forEach((element) => {
        // Seçilen dile göre elementin data attribute'unu kullan
        element.textContent = element.getAttribute(`data-${language}`);
    });
}