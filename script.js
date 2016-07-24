"use strict";
(function(){
  console.log('it works')

//enemy selector here
//need iterator to select randomly
// var whichBaddie= ''
var baddie = [
    ['Link', 'images/link1.png', 100],
    ['Bowser', 'images/bowser1.png', 150],
    ['Ganondorf', 'images/ganondorf.png', 175],
    ['Samus', 'images/samus1.png', 125],
    ['Fox', 'images/fox1.png', 130],
    ['Kong', 'images/kong1.png', 150],
];


//Your names have confused you.  Go back through and follow connections.
//what are you trying to "say"


//I am trying to solve  why my damage, health, and enemy attacks are not
//adding and subtracting.
//the moves work, and logic runs back and forth and time out function works
//but no math, and enemy names are not logging --return object object
//

//solve this by figureing out your random number generators

//solve name obj shit by figuring out how variables change hands and check scope

//FIGURE OUT HOW TO LOAD MEGAMAN HERE3
var heroImage = 'images/megaman.png';
$('#hero_img').attr('src', heroImage);

var heroHealthAtLoad = 100
var heroHealthAfterMove = 0

var enemyName = ''
var enemyImage = ''
var enemyHealthAtLoad = 0
var enemyHealthAfterMove = 0



//baddieSelector works dont touch/////////////////////////////////////////////

// on game load run whichBaddie
function enemySelctor(){
  var enemyChoice = Math.floor(Math.random() * baddie.length);
    enemyName = (baddie[enemyChoice][0]);
    enemyHealthAtLoad = (baddie[enemyChoice][2]);
    enemyImage = ('src', baddie[enemyChoice][1]);
};
 // var whichBaddie = enemyChoice; //trying to use this to get
  //around scope issue with enemy choice here and also in attk func

//////////Don't touch this part////////////////////////////////////////////////////////////////////


 function enemyAttack(){
    console.log(enemyName + ' attacks')
      var badGuyAttackDamage = Math.floor(Math.random() * 25);

      heroHealthAfterMove = (heroHealthAtLoad - badGuyAttackDamage);
      heroHealthAtLoad = heroHealthAfterMove;

      // $('#status_text').text(whichBaddie + ' does ' + badGuyAttack + ' damage!');
      console.log(enemyName + ' does ' + badGuyAttackDamage + ' damage!');
      // $('.baddieHealth').text('Health: ' + baddieHealthUpdate);
      console.log('Megaman Health: ' + heroHealthAtLoad);
      isGameOver();

    };

 function normAtk(){
        console.log('normal attack thrown')

        // var attackMiss = Math.floor((Math.random) * 10);
        //  if (attackMiss < 3){
          var heroAttackDamage = Math.floor(Math.random() * 20);

           // $('#status_text').text('Megaman does ' + damage + 'damage!');

           enemyHealthAfterMove = (enemyHealthAtLoad - heroAttackDamage);
           enemyHealthAtLoad = enemyHealthAfterMove;

           console.log('Megaman does ' + heroAttackDamage + ' damage!')

           console.log(enemyName + ' health is ' + enemyHealthAfterMove)

         // }else{

         //  $('#status_text').text('you missed!')

         // }

        isGameOver();
        setTimeout(enemyAttack, 3000);

       };




  //button manipulators
    //random percent heal
      function healBtn(){
        console.log('used health for turn')
        var rndmHealthValue = Math.floor((Math.random() * 20) + 10);
        console.log('heal restores ' + rndmHealthValue + ' health to Megaman');

        heroHealthAfterMove = (heroHealthAtLoad + rndmHealthValue);
        heroHealthAtLoad = heroHealthAfterMove;

        // $('.hero_health').text('Health: ' + (heroHealthAfterMove));
        // $('#status_text').text('restoring ' + rndmHealthValue + ' health')
        console.log('Megamans new health total is ' + heroHealthAtLoad)
        isGameOver();

        setTimeout(enemyAttack, 3000);

        };



      //random percent damage







      //random percent heavy damage
      function heavyAtk(){
        console.log('heavy attack thrown')
        // var heavyAtkMiss = Math.floor((Math.random) * 35);

        // if (heavyAtkMiss >= 35){
        var hvyDamage = Math.floor(Math.random() * 40);


          // $('#status_text').text('you missed!');
        // }else{
        //   $('#status_text').text('epic attack! you did' + hvyDamage + 'damge');
          enemyHealthAfterMove = (enemyHealthAtLoad - hvyDamage);
          enemyHealthAtLoad = enemyHealthAfterMove;
          console.log('Heavy attk does ' + hvyDamage + ' damage. ' + enemyName + ' health is ' + enemyHealthAfterMove)

        isGameOver();
        setTimeout(enemyAttack, 3000);
      };



      //is game over function should include the

      //set time out is seperate function from game over?

      //platinum edition--make button appear if
      //2 consecutive critical hits--insta kill button!

      //loop through is it a win?
      function isGameOver(){

        console.log('running gameover func')
        if (heroHealthAtLoad <= 0){
          console.log('game over, you lose');
          // $('#status_text').text('Game Over: you win!');
        } else if (enemyHealthAfterMove <= 0){

          console.log('you win Bitch!');
          // make buttons go away
          // $('#status_text').text('you lose bitch');
      }
    };

// };
// //win counter--is win count 3? y? you win!
// //not 3? keep playing

  $('#heal_btn').on('click', healBtn);
  $('#attack_btn').on('click', normAtk);
  $('#heavy_atk').on('click', heavyAtk);


//event listeners tied to actions here
  $(document).ready(function(){
    enemySelctor();
    //eventListeners();
  });


})();
