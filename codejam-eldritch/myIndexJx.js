import ancientsData from './data/ancients.js';
import cardsDataGreen from './data/mythicCards/green/index.js';
import cardsDataBrown from './data/mythicCards/brown/index.js';
import cardsDataBlue from './data/mythicCards/blue/index.js';

/* Variables for tracker start */

let greenStageOne = document.querySelector('.stageOneGreen');
let BrownStageOne = document.querySelector('.stageOneBrown');
let BlueStageOne = document.querySelector('.stageOneBlue');

let greenStageTwo = document.querySelector('.stageTwoGreen');
let BrownStageTwo = document.querySelector('.stageTwoBrown');
let BlueStageTwo = document.querySelector('.stageTwoBlue');

let greenStageThree = document.querySelector('.stageThreeGreen');
let BrownStageThree = document.querySelector('.stageThreeBrown');
let BlueStageThree = document.querySelector('.stageThreeBlue');

let numOfGreenCardsStage1 = 0;
let numOfBrownCardsStage1 = 0;
let numOfBlueCardsStage1 = 0;

let numOfGreenCardsStage2 = 0;
let numOfBrownCardsStage2 = 0;
let numOfBlueCardsStage2 = 0;

let numOfGreenCardsStage3 = 0;
let numOfBrownCardsStage3 = 0;
let numOfBlueCardsStage3 = 0;



/* Variables for tracker end */


/* ----------------- Ancient choice start ----------------- */
let ancientsNumber = 0;

let azathoth = document.querySelector('.image1');
let cthulhu = document.querySelector('.image2');
let iogSothoth = document.querySelector('.image3');
let shubNiggurath = document.querySelector('.image4');

function trackerUpdate (num) {
   numOfGreenCardsStage1 = ancientsData[num].firstStage.greenCards
   greenStageOne.textContent = numOfGreenCardsStage1;
   numOfBrownCardsStage1 = ancientsData[num].firstStage.brownCards
   BrownStageOne.textContent = numOfBrownCardsStage1;
   numOfBlueCardsStage1 = ancientsData[num].firstStage.blueCards
   BlueStageOne.textContent = numOfBlueCardsStage1;

   numOfGreenCardsStage2 = ancientsData[num].secondStage.greenCards
   greenStageTwo.textContent = numOfGreenCardsStage2;
   numOfBrownCardsStage2 = ancientsData[num].secondStage.brownCards
   BrownStageTwo.textContent = numOfBrownCardsStage2;
   numOfBlueCardsStage2 = ancientsData[num].secondStage.blueCards;
   BlueStageTwo.textContent = numOfBlueCardsStage2;
   
   numOfGreenCardsStage3 = ancientsData[num].thirdStage.greenCards
   greenStageThree.textContent = numOfGreenCardsStage3;
   numOfBrownCardsStage3 = ancientsData[num].thirdStage.brownCards
   BrownStageThree.textContent = numOfBrownCardsStage3;
   numOfBlueCardsStage3 = ancientsData[num].thirdStage.blueCards;
   BlueStageThree.textContent = numOfBlueCardsStage3;
}

function azathothChoice () {
   ancientsNumber = 0;
   trackerUpdate(ancientsNumber)
}

function cthulhuChoice () {
   ancientsNumber = 1;
   trackerUpdate(ancientsNumber)
   console.log(numOfBlueCardsStage3)
}

function iogSothothChoice () {
   ancientsNumber = 2;
   trackerUpdate(ancientsNumber)
}

function shubNiggurathChoice () {
   ancientsNumber = 3;
   trackerUpdate(ancientsNumber)
}

azathoth.addEventListener('click', azathothChoice);
cthulhu.addEventListener('click', cthulhuChoice);
iogSothoth.addEventListener('click', iogSothothChoice);
shubNiggurath.addEventListener('click', shubNiggurathChoice);

/* ----------------- Ancient choice end ----------------- */


/* Form Deck start */

let acum = 0;
let deck = [];

let buttonShafle = document.querySelector('.shafle_button');

function shuffle(array) {
   array.sort(() => Math.random() - 0.5);
}




function deckForm () {

   
   let deckFirstStage = [];
   let deckSecondStage = [];
   let deckThirdStage = [];
   shuffle(cardsDataBrown);
   shuffle(cardsDataGreen);
   shuffle(cardsDataBlue);


   for (let i=0 ; i < (ancientsData[ancientsNumber].firstStage.greenCards); i++ ) {
      deckFirstStage.push(cardsDataGreen[i])
      cardsDataGreen.splice(i, 1)
   }

   for (let i=0 ; i < (ancientsData[ancientsNumber].firstStage.brownCards); i++ ) {
      deckFirstStage.push(cardsDataBrown[i])
      cardsDataBrown.splice(i, 1)
   }

   for (let i=0 ; i < (ancientsData[ancientsNumber].firstStage.blueCards); i++ ) {
      deckFirstStage.push(cardsDataBlue[i])
      cardsDataBlue.splice(i, 1)
   }

   


   for (let i=0 ; i < (ancientsData[ancientsNumber].secondStage.greenCards); i++ ) {
      deckSecondStage.push(cardsDataGreen[i])
      cardsDataGreen.splice(i, 1)
   }

   for (let i=0 ; i < (ancientsData[ancientsNumber].secondStage.brownCards); i++ ) {
      deckSecondStage.push(cardsDataBrown[i])
      cardsDataBrown.splice(i, 1)
   }

   for (let i=0 ; i < (ancientsData[ancientsNumber].secondStage.blueCards); i++ ) {
      deckSecondStage.push(cardsDataBlue[i])
      cardsDataBlue.splice(i, 1)
   }


   for (let i=0 ; i < (ancientsData[ancientsNumber].thirdStage.greenCards); i++ ) {
      deckThirdStage.push(cardsDataGreen[i])
      cardsDataGreen.splice(i, 1)
   }

   for (let i=0 ; i < (ancientsData[ancientsNumber].thirdStage.brownCards); i++ ) {
      deckThirdStage.push(cardsDataBrown[i])
      cardsDataBrown.splice(i, 1)
   }

   for (let i=0 ; i < (ancientsData[ancientsNumber].thirdStage.blueCards); i++ ) {
      deckThirdStage.push(cardsDataBlue[i])
      cardsDataBlue.splice(i, 1)
   }


   console.log('певрый этап до шафла', deckFirstStage);
   deckFirstStage = _.shuffle(deckFirstStage);
   console.log('певрый этап после шафла', deckFirstStage);

   console.log('второй этап до шафла', deckSecondStage);
   deckSecondStage = _.shuffle(deckSecondStage);
   console.log('второй этап после шафла', deckSecondStage);

   console.log('третий этап до шафла', deckThirdStage);
   deckThirdStage = _.shuffle(deckThirdStage);
   console.log('третий этап после шафла', deckThirdStage);

   deck = [...deckFirstStage, ...deckSecondStage, ...deckThirdStage];
   console.log('колода', deck);
   acum = deck.length - 1;
   
}
/* Form Deck end */


/* Show Deck  to user start */
let takeCards = document.querySelector('.cards_shirt');
let showCard = document.querySelector('.show_cards');


buttonShafle.addEventListener('click', deckForm); //формируем колоду

takeCards.onclick = function  () {

   console.log(` url(./assets/MythicCards/${deck[acum].color}/${deck[acum].id}.png`)
   showCard.style.background = `center / contain url(./assets/MythicCards/${deck[acum].color}/${deck[acum].id}.png`;


   // tracker start
   if (deck[acum].color === 'green' && numOfGreenCardsStage3 !== 0) { //check first stage green

      numOfGreenCardsStage3 -= 1;
    
      greenStageThree.textContent = numOfGreenCardsStage3;
   } else if (deck[acum].color === 'green' && numOfGreenCardsStage2 !== 0) { //check second stage green
      numOfGreenCardsStage2 -= 1;      
      greenStageTwo.textContent = numOfGreenCardsStage2;
   } else if (deck[acum].color === 'green' && numOfGreenCardsStage1 !== 0){
      console.log(numOfGreenCardsStage3)
      numOfGreenCardsStage1 -= 1;      
      greenStageOne.textContent = numOfGreenCardsStage1;
   }
   
   if (deck[acum].color === 'brown' && numOfBrownCardsStage3 !== 0) { //check first stage brown
      numOfBrownCardsStage3 -= 1;
      BrownStageThree.textContent = numOfBrownCardsStage3;
   } else if (deck[acum].color === 'brown' && numOfBrownCardsStage2 !== 0) { //check second stage brown
      numOfBrownCardsStage2 -= 1;
      BrownStageTwo.textContent = numOfBrownCardsStage2;
   } else if (deck[acum].color === 'brown' && numOfBrownCardsStage1 !== 0){
      numOfBrownCardsStage1 -= 1;      
      BrownStageOne.textContent = numOfBrownCardsStage1;
   }

   if (deck[acum].color === 'blue' && numOfBlueCardsStage3 !== 0) { //check first stage blue
      numOfBlueCardsStage3 -= 1;
      BlueStageThree.textContent = numOfBlueCardsStage3;
   } else if (deck[acum].color === 'blue' && numOfBlueCardsStage2 !== 0) { //check second stage blue
      numOfBlueCardsStage2 -= 1;
      BlueStageTwo.textContent = numOfBlueCardsStage2;
   } else if (deck[acum].color === 'blue' && numOfBlueCardsStage1 !== 0) {
      console.log(numOfBlueCardsStage3)
      numOfBlueCardsStage1 -= 1;      
      BlueStageOne.textContent = numOfBlueCardsStage1;
   }

   if (acum === 0) {
      takeCards.style.background = 'rgba(0, 0, 0, 0)'
   }
   // tracker end


   




   acum -= 1


}

/* Show Deck  to user end */






