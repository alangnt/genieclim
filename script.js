// Créons l'infinite slider contenant les 5 images
const slider = document.querySelector('.slider');

if (slider) {
    const images = slider.querySelectorAll('img');
    const totalImages = images.length;
    let currentImageIndex = 0;

    // Fonction pour animer le passage à l'image suivante
    function animateToNextImage() {
        const currentImage = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        const nextImage = images[currentImageIndex];

        currentImage.style.transition = 'transform 0.5s ease-out';
        nextImage.style.transition = 'transform 0.5s ease-out';

        currentImage.style.transform = 'translateX(-100%)';
        nextImage.style.transform = 'translateX(0)';

        setTimeout(() => {
            currentImage.style.transition = 'none';
            currentImage.style.transform = 'translateX(100%)';
        }, 500);
    }

    // Fonction pour animer le passage à l'image précédente
    function animateToPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        const currentImage = images[currentImageIndex];
        const nextImage = images[(currentImageIndex + 1) % totalImages];

        currentImage.style.transition = 'none';
        currentImage.style.transform = 'translateX(-100%)';

        setTimeout(() => {
            currentImage.style.transition = 'transform 0.5s ease-out';
            nextImage.style.transition = 'transform 0.5s ease-out';

            currentImage.style.transform = 'translateX(0)';
            nextImage.style.transform = 'translateX(100%)';
        }, 50);
    }

    // Configuration initiale
    images.forEach((img, index) => {
        img.style.position = 'absolute';
        img.style.left = '0';
        img.style.top = '0';
        img.style.transform = index === 0 ? 'translateX(0)' : 'translateX(100%)';
    });

    // Ajout des événements pour les boutons de navigation
    const nextButton = document.querySelector('.next-button');
    const previousButton = document.querySelector('.previous-button');

    nextButton.addEventListener('click', animateToNextImage);
    previousButton.addEventListener('click', animateToPreviousImage);
}

// Créons le menu mobile
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');

menuIcon.addEventListener('click', () => {
    mobileNavMenu.classList.add('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    mobileNavMenu.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
});

