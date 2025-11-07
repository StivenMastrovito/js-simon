/*
Visualizzare in pagina 5 numeri casuali.
 Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono
 e appaiono invece 5 input in cui l'utente deve inserire i numeri 
 che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri,
 il software dice quanti e quali dei numeri
  da indovinare sono stati individuati.
*/

// OUTPUT
const num1Output = document.getElementById("num1Output");
const num2Output = document.getElementById("num2Output");
const num3Output = document.getElementById("num3Output");
const num4Output = document.getElementById("num4Output");
const num5Output = document.getElementById("num5Output");
const num6Output = document.getElementById("num6Output");
const num7Output = document.getElementById("num7Output");
const numOutput = document.getElementById("numOutput");

// INPUT
const startBtn = document.getElementById("start");
const controlBtn = document.getElementById("control");
const timer = document.querySelector(".timer");
const numInput = document.getElementById("numInput");
const form = document.querySelector("form");
let facile = document.querySelector(".facile");
let medio = document.querySelector(".medio");
let difficile = document.querySelector(".difficile");
let numInputDiv = document.getElementById("numInputDiv");
let num6InputClass = document.querySelector(".num6Input");
let num7InputClass = document.querySelector(".num7Input");
const difficolta = document.querySelector(".difficolta");

let randomNum = [];
let numGioco = 5;
let numGiocoWin = 5; 
let numNumeri = 5;

facile.addEventListener("click", function () {
    num6Output.classList.add("d-none");
    num7Output.classList.add("d-none");
    num6InputClass.classList.add("d-none");
    num7InputClass.classList.add("d-none");
    numNumeri = 5;
    numGioco = 5;
    numGiocoWin = 5;
    facile.disabled = true;
    medio.disabled = false;
    difficile.disabled = false;
    facile.classList.add("bg-success");
    medio.classList.remove("bg-success");
    difficile.classList.remove("bg-success");

})

medio.addEventListener("click", function () {
    num6Output.classList.remove("d-none");
    num7Output.classList.add("d-none");
    num6InputClass.classList.remove("d-none");
    num7InputClass.classList.add("d-none");
    numNumeri = 6;
    numGioco = 6;
    numGiocoWin = 6;
    facile.disabled = false;
    medio.disabled = true;
    difficile.disabled = false;
    facile.classList.remove("bg-success");
    medio.classList.add("bg-success");
    difficile.classList.remove("bg-success");
})

difficile.addEventListener("click", function () {
    num6Output.classList.remove("d-none");
    num7Output.classList.remove("d-none");
    num6InputClass.classList.remove("d-none");
    num7InputClass.classList.remove("d-none");
    numGioco = 7;
    numNumeri = 7;
    numGiocoWin = 7;
    facile.disabled = false;
    medio.disabled = false;
    difficile.disabled = true;
    facile.classList.remove("bg-success");
    medio.classList.remove("bg-success");
    difficile.classList.add("bg-success");
})





startBtn.addEventListener("click", function () {
    difficolta.classList.add("d-none");
    randomNum = [];
    for (let i = 0; i < numGioco; i++) {
        randomNum.push(Math.floor(Math.random() * 9) + 1);
    }
    num1Output.innerText = randomNum[0];
    num2Output.innerText = randomNum[1];
    num3Output.innerText = randomNum[2];
    num4Output.innerText = randomNum[3];
    num5Output.innerText = randomNum[4];
    if (numGioco === 7) {
        num6Output.innerText = randomNum[5];
        num7Output.innerText = randomNum[6];
    }else if(numGioco === 6) {
        num6Output.innerText = randomNum[5];
    }
    numOutput.classList.remove("d-none");
    startBtn.classList.add("d-none");
    controlBtn.classList.remove("d-none");
    timer.classList.remove("d-none");
    let count = 2;
    const intervalId = setInterval(() => {
        if (count > 0) {
            timer.innerHTML = count;
            count--;
        } else {
            clearInterval(intervalId);
            timer.innerHTML = "TEMPO SCADUTO<br> INSERISCI I NUMERI";
            numOutput.classList.add("d-none");
            numInput.classList.remove("d-none");
            timer.style.width = "auto";
        }
    }, 1000);
})
let risultato = document.querySelector(".risultato");
const errore = document.querySelector(".errore");
let result = 0;
let numeroWin = "";
let numeroUser = "";

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const num1Input = document.getElementById("num1Input").value;
    const num2Input = document.getElementById("num2Input").value;
    const num3Input = document.getElementById("num3Input").value;
    const num4Input = document.getElementById("num4Input").value;
    const num5Input = document.getElementById("num5Input").value;
    let num6Input = 1;
    let num7Input = 1;
    if (numGioco === 7) {
        num7Input =  document.getElementById("num7Input").value;
        num6Input = document.getElementById("num6Input").value;
    }else if(numGioco === 6) {
        num7Input.value = document.getElementById("num6Input").value;
    }
    const numUser = [num1Input, num2Input, num3Input, num4Input, num5Input, num6Input, num7Input];
    if ((((numUser[0] <= 0 || numUser[0] > 9) || (numUser[1] <= 0 || numUser[1] > 9)) || ((numUser[2] <= 0 || numUser[2] > 9) || (numUser[3] <= 0 || numUser[3] > 9))) || (((numUser[4] <= 0 || numUser[4] > 9) || (numUser[5] <= 0 || numUser[5] > 9)) || (numUser[6] <= 0 || numUser[6] > 9))) {
        errore.innerHTML = "Inserisci numeri validi da 1 a 9";
        errore.classList.remove("d-none");
    } else {
        errore.classList.add("d-none");
        let correctNum = [];
        numGioco = numNumeri;
        result = 0;
        numeroWin = "";
        numeroUser = "";
        for (let i = 0; i < numGioco; i++) {
            numeroWin += " " + randomNum[i];
            numeroUser += " " + numUser[i];
            for (let j = 0; j < numGioco; j++) {
                console.log(randomNum[i], numUser[j]);
                if (randomNum[i] === parseInt(numUser[j])) {
                    console.log("corretto");

                    randomNum.splice(i, 1);
                    numUser.splice(j, 1);
                    result++;
                    correctNum.push[randomNum[i]];
                    i--;
                    j--;
                    numGioco--;
                    break;
                }
            }
        }
        const winLose = document.querySelector(".winLose");
    const numeroWinOutput = document.querySelector(".numeroWinOutput");
    const numeroUserOutput = document.querySelector(".numeroUserOutput");

    //  const winLose = document.createElement("h2");
    //  const numeroWinOutput = document.createElement("h3");
    //  const numeroUserOutput = document.createElement("h3");
    risultato.classList.remove("d-none");
    if (result === numGiocoWin) {
        console.log("Hai vinto");
        //  risultato.append("winLose");
        //  risultato.append("numeroWinOutput");
        //  risultato.append("numeroUserOutput");
        winLose.innerHTML = "Complimenti hai vinto!!!!";
        winLose.classList.add("haivinto");
        numeroWinOutput.innerHTML = "Numero vincente: <br>" + numeroWin;
        numeroUserOutput.innerHTML = "Il tuo numero: <br>" + numeroUser;
    } else {
        winLose.innerHTML = "Mi dispiace hai perso";
        winLose.classList.add("haiperso");
        numeroWinOutput.innerHTML = "Numero vincente: " + numeroWin;
        numeroUserOutput.innerHTML = "Il tuo numero: " + numeroUser;
    }

    timer.classList.add("d-none");
    form.classList.add("d-none");
    rigioca.classList.remove("d-none");
    timer.innerHTML = "9";

    console.log(numeroWin, numeroUser, result, numGiocoWin);

    }
    
})

const rigioca = document.querySelector(".rigioca");

rigioca.addEventListener("click", function () {
    risultato.classList.add("d-none");
    startBtn.classList.remove("d-none");
    rigioca.classList.add("d-none")
    num1Input.value = "";
    num2Input.value = "";
    num3Input.value = "";
    num4Input.value = "";
    num5Input.value = "";
    num6Input.value = "";
    num7Input.value = "";
    difficolta.classList.remove("d-none");
})