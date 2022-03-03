const welcomePage = document.querySelector('#welcomePage');
const startButton = document.querySelector('#startButton');
const main = document.querySelector('main');

startButton.addEventListener('click', function() {
  welcomePage.style.display = 'none';
  main.style.display = 'block'
})

const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");

burger.addEventListener("click", function() {
  if (navbar.style.display === 'flex') {
    navbar.style.display = 'none'
  } else {navbar.style.display = 'flex'}
})

