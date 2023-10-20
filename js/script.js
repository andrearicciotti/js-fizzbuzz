// LOGICA DEL PROGRAMMA
let number;
let numberType;
let fizzOrBuzz;
let result = "";

for (i = 1; i <= 100; i++) {
    number = i;
    console.log(number);
    
    if (i % 2 === 0) {
        numberType = "ms_even";
        console.log(numberType);
    } else if (i % 2 === 1) {
        numberType = "ms_odd";
        console.log(numberType);
    }

    if (number % 3 === 0 && number % 5 === 0) {
        fizzOrBuzz = "ms_fizz-buzz";
        console.log(fizzOrBuzz);
    } else if (number % 3 === 0) {
        fizzOrBuzz = "ms_fizz";
        console.log(fizzOrBuzz);
    } else if (number % 5 === 0) {
        fizzOrBuzz = "ms_buzz";
        console.log(fizzOrBuzz);
    } else {
        fizzOrBuzz = "";
    }
    

    // PREPARAZIONE MESSAGGIO
    result += `<div class="ms_col ${numberType} ${fizzOrBuzz}"><span class="d-inline-block ms_text fw-semibold fs-6">${number}</span><span class="d-inline-block ms_text fw-semibold fs-6">${numberType}</span><span class="d-inline-block ms_text fw-semibold fs-6">${fizzOrBuzz}</span></div>`;
    console.log(result);


    // // OUTPUT MESSAGGIO
    const rowElement = document.querySelector(".row");
    rowElement.innerHTML = result;




}



