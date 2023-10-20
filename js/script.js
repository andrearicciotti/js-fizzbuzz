// LOGICA DEL PROGRAMMA
let number;
let numberType;
let fizzOrBuzz;
let result = "";

for (i = 1; i <= 100; i++) {
    number = i;
    // console.log(number);
    
    if (i % 2 === 0) {
        numberType = "even";
        // console.log(numberType);
    } else if (i % 2 === 1) {
        numberType = "odd";
        // console.log(numberType);
    }

    if (number % 3 === 0 && number % 5 === 0) {
        fizzOrBuzz = "fizz-buzz";
        // console.log(fizzOrBuzz);
    } else if (number % 3 === 0) {
        fizzOrBuzz = "fizz";
        // console.log(fizzOrBuzz);
    } else if (number % 5 === 0) {
        fizzOrBuzz = "buzz";
        // console.log(fizzOrBuzz);
    } else {
        fizzOrBuzz = "";
    }
    

    // PREPARAZIONE MESSAGGIO
    result += `<div class="ms_col ms_${numberType} ms_${fizzOrBuzz}"><span class="d-inline-block ms_text fw-bold">${number}</span><span class="d-inline-block ms_text fw-bold">${numberType}</span><span class="d-inline-block ms_text fw-bold">${fizzOrBuzz}</span></div>`;
    // console.log(result);


    // // OUTPUT MESSAGGIO
    const rowElement = document.querySelector(".row");
    rowElement.innerHTML = result;




}



