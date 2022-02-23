let squares = document.querySelector('.squares');

for (let i = 1; i <= 100; i++) {
        let elemento = document.createElement('div');
        elemento.classList.add('box', 'blue');
        elemento.innerHTML = i;
    if (i % 3 == 0 && i % 5 == 0) {
        elemento.classList.add('red');
        elemento.innerHTML = 'FizzBuzz';  
    } else if (i % 3 == 0) {
        elemento.classList.add('green');
        elemento.innerHTML = 'Fizz';   
    } else if (i % 5 == 0) {
        elemento.classList.add('yellow');
        elemento.innerHTML = 'Buzz';  
    } 
    squares.append(elemento);
}



 

