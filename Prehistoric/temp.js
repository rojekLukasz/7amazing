const img1_1 = document.querySelector('#img1_1');
const img2_1 = document.querySelector('#img2_1');
const img3_1 = document.querySelector('#img3_1');
const leftIcon1 = document.querySelector('#leftIcon1');
const rightIcon1 = document.querySelector('#rightIcon1');

leftIcon1.addEventListener('click', function() {
  if (img1_1.style.display === 'block'){
  img1_1.style.display = 'none';
  img3_1.style.display = 'block'
  }else if (img3_1.style.display === 'block'){
    img3_1.style.display = 'none';
  img2_1.style.display = 'block'
  }else if (img2_1.style.display === 'block'){
    img2_1.style.display = 'none';
  img1_1.style.display = 'block'
  }
})

// rightIcon1.addEventListener('click', function() {
//   if (img1.style.display === 'block'){
//   img1.style.display = 'none';
//   img2.style.display = 'block'
//   }else if (img2.style.display === 'block'){
//     img2.style.display = 'none';
//   img3.style.display = 'block'
//   }else if (img3.style.display === 'block'){
//     img3.style.display = 'none';
//   img1.style.display = 'block'
//   }
// })
// for (let i = 0; i < img1.length; i++) {
//   leftIcon[i].addEventListener('click', function() {
//     if (img1[i].style.display === 'block'){
//     img1[i].style.display = 'none';
//     img3[i].style.display = 'block'
//     }else if (img3[i].style.display === 'block'){
//       img3[i].style.display = 'none';
//     img2[i].style.display = 'block'
//     }else if (img2[i].style.display === 'block'){
//       img2[i].style.display = 'none';
//     img1[i].style.display = 'block'
//     }
//   })
// }

// Api key: 4e5df4075d9195ca31e1b3452e71b178

const keyAPI = '4e5df4075d9195ca31e1b3452e71b178';

let loc = 'Marlborough,GB';

let passInString = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}&units=metric`;
console.log(passInString);



fetch(passInString)
  .then((res) => res.json())
  .then((data) => (responseData = data))
  .then(() => {
    console.log(responseData);
    document.querySelector('.weatherDiscription').innerHTML = 'The current weather: ' + responseData.weather[0].description + '. ';
    document.querySelector('.iconWeather').innerHTML = `<img src="https://openweathermap.org/img/wn/${responseData.weather[0].icon}.png" alt="The weather icon" width="70" height="60">`
    document.querySelector('.temp').innerHTML = 'Temp: ' + responseData.main.temp.toFixed(0) + '°C';
    let mphWind = responseData.wind.speed * 2.23693629;
    document.querySelector('.wind').innerHTML = 'Wind: ' + mphWind.toFixed(1) + ' mph'
  })
