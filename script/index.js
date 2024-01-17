const slider = document.getElementsByClassName('slider')
const food = ['burger', 'salat', 'desert', 'stake', 'zakus', 'pizza']

for (let i = 0; i < 6; i++) {
   document.write(`
      <img src="img/${food[i]}.jfif">
      <figcaption style="text-align: center;">${food[i]}</figcaption>
      `);
}

console.log(slider)
console.log(food)