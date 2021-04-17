import logoImg from './assets/logo-on-white-bg.png';

const img = document.createElement('img');
img.src = logoImg;
img.classList.add('logo-style');

document.getElementById('imgContainer').appendChild(img);