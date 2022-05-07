const makeBigger = () => {
   // alert('make bigger!');
   p_size += 5
   h_size += 5

   document.querySelector('p').style.fontSize = p_size + 'px';
   document.querySelector('h1').style.fontSize = h_size + 'px';
};

const makeSmaller = () => {
   // alert('make smaller!');
   p_size -= 5
   h_size -= 5

   document.querySelector('p').style.fontSize = p_size + 'px';
   document.querySelector('h1').style.fontSize = h_size + 'px';
};

let p_size = 15;
let h_size = 25;

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
