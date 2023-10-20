// LOGICA DEL PROGRAMMA
for (i = 1; i <= 100; i++) {
    console.log(i);
    let numberType;
    if (i % 2 === 0) {
        numberType = "even";
        console.log(numberType);
    } else {
        numberType = "odd";
        console.log(numberType);
    }

    if (i % 3 === 0 && i % 5 === 0) {
        fizzOrBuzz = "FizzBuzz";
        console.log(fizzOrBuzz);
    } else if (i % 3 === 0) {
        fizzOrBuzz = "Fizz";
        console.log(fizzOrBuzz);
    } else if (i % 5 === 0) {
        fizzOrBuzz = "Buzz";
        console.log(fizzOrBuzz);
    }
}

// PREPARAZIONE MESSAGGIO
const result = numberType + fizzOrBuzz;


