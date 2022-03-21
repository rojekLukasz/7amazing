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
//   if (img1_1.style.display === 'block'){
//   img1_1.style.display = 'none';
//   img2_1.style.display = 'block'
//   }else if (img2_1.style.display === 'block'){
//     img2_1.style.display = 'none';
//   img3_1.style.display = 'block'
//   }else if (img3_1.style.display === 'block'){
//     img3_1.style.display = 'none';
//   img1_1.style.display = 'block'
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
