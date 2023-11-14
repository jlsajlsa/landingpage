document.addEventListener("DOMContentLoaded", function() {
    // Agregar el nombre de la seccion
    changeTitleText();
    
    // Click al boton del menu collapsable
    clickMainTitle();
});

let slideIndex = 0;

function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage');

    modal.style.display = 'flex';
    modalImg.src = imageSrc;
    slideIndex = getCurrentIndex(imageSrc);
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const modalImg = document.getElementById('modalImage');
    const images = document.querySelectorAll('.gallery img');

    if (n >= images.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = images.length - 1;
    }

    modalImg.src = images[slideIndex].src;
}

function getCurrentIndex(imageSrc) {
    const images = document.querySelectorAll('.gallery img');
    for (let i = 0; i < images.length; i++) {
        if (images[i].src === imageSrc) {
            return i;
        }
    }
    return 0;
}