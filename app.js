const welcomePage = document.querySelector('#welcomePage');
const startButton = document.querySelector('#startButton');
const main = document.querySelector('main');

startButton.addEventListener('click', function() {
  welcomePage.style.display = 'none';
  main.style.display = 'block'
})


