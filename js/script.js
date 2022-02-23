for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.writeln('FizzBuzz');
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        document.writeln('Fizz');
        console.log('Fizz');
    } else if (i % 5 == 0) {
        document.writeln('Buzz');
        console.log('Buzz');
    } else {
        document.writeln(i)
        console.log(i)
    }
}

