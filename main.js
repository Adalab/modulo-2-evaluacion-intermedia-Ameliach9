'use strict';

//variables
const chooseRace = document.querySelector('.js-choose-race');
const button = document.querySelector('.js-button');
const battle = document.querySelector('.js-battle');

const raceSurenosMalos = 2;
const raceOrcos = 2;
const raceGoblins = 2;
const raceHuargos = 3;
const raceTrolls = 5;
const numberPC = getRandomNumber(5);
console.log(`Mi número aleatorio es ${numberPC}`);



//funciones 
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

function userChoice(){
    const selectValue = parseInt(select.value);
    return selectValue;
    }


//asignar valor a cada raza mala

const chooseEvilRace = () => { 
    const randomNumber = getRandomNumber(5); 
    console.log(randomNumber); 
    if(randomNumber === 1){
         raceSurenosMalos;

    } else if (randomNumber === 2) {
         raceOrcos;

    } else if (randomNumber === 3) {
         raceGoblins;

    } else if (randomNumber === 4) {
         raceHuargos;

    } else if (randomNumber === 5) {
         raceTrolls
    }
};


function compareResult(){
    if (userChoice < chooseEvilRace){
        battle.innerHTML = '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo';
    }else if (userChoice === chooseEvilRace){
        battle.innerHTML = 'Empate';
    }else{
        battle.innerHTML = '¡Ha ganado el Ejército del Bien! Enhorabuena';
    }
}

function handleClick(e){ 
    e.preventDefault(); 
    userChoice();
    chooseEvilRace ();
    compareResult()
};




button.addEventListener('click', handleClick);