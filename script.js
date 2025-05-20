const images = [
  'img/iphone-15-model-carrossel1.webp',
  'img/iphone-15-model-carrossel2.webp'
];

const img = document.querySelector('#carrousel');
const button = document.querySelector('#img-button');

let currentIndex = 0;

button.addEventListener('click', () => {
  img.style.transform = 'translateX(-100px)';
  img.style.opacity = '0';

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];

    
    img.style.transform = 'translateX(100px)';
    img.style.opacity = '0';

    setTimeout(() => {
      img.style.transform = 'translateX(0)';
      img.style.opacity = '1';
    }, 10);
  }, 300);
});