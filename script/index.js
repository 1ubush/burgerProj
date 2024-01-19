const slider = document.getElementById('slider');
const food = ['burger', 'salat', 'desert', 'stake', 'zakus', 'pizza'];
foodIndex = 0;

for (let i = 0; i < 6; i++) {
   slider.innerHTML +=
      `<div class="slider-content">
         <img src="img/${food[i]}.jfif">
         <figcaption style="text-align: center;">${food[i]}</figcaption>
      </div>`
   };

leftButton = document.getElementById('moveLeft');
rightButton = document.getElementById('moveRight').onclick = function () {
   
};

console.log(slider);
console.log(food);