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



//FIGURE OUT HOW TO LOAD MEGAMAN HERE3
var heroImage = 'images/megaman.png';
$('#hero_img').attr('src', heroImage);

var heroHealth = 100
var healthUpdate = 0
var baddieHealthUpdate = 0
var baddieHealth = 0



//baddieSelector works dont touch/////////////////////////////////////////////

// on game load run whichBaddie
function baddieSelctor(){
  var enemyChoice = Math.floor(Math.random() * baddie.length);
    $('#baddie .name').text(baddie[enemyChoice][0]);
    $('#baddie .baddie_health').text('Health: ' + baddie[enemyChoice][2]);
    $('#baddie_img').attr('src', baddie[enemyChoice][1]);
};
 var whichBaddie = baddieSelctor(); //trying to use this to get
  //around scope issue with enemy choice here and also in attk func

//////////Don't touch this part////////////////////////////////////////////////////////////////////


 function baddieAttack(){
    console.log('bad guy attacks')
      var badGuyAttack = Math.floor(Math.random() * 25);

      healthUpdate = $(heroHealth - badGuyAttack);

      $('#status_text').text(whichBaddie + ' does ' + badGuyAttack + ' damage!');
      $('.baddieHealth').text('Health: ' + baddieHealthUpdate);

      isGameOver();
    };





  //button manipulators
    //random percent heal
      function healBtn(){
        console.log('used health for turn')
        var rndmHealth = Math.floor((Math.random() * 20) + 10);

        healthUpdate = $(rndmHealth + heroHealth);

        $('.hero_health').text('Health: ' + (healthUpdate));
        $('#status_text').text('restoring ' + rndmHealth + ' health')

        isGameOver();

        setTimeout(baddieAttack, 5000);

        };

      //random percent damage
      function normAtk(){
        console.log('normal attk thrown')

        var attackMiss = Math.floor((Math.random) * 10);
         if (attackMiss < 3){
          var damage = Math.floor((Math.random) * 25);

           $('#status_text').text(baddie + ' does ' + damage + 'damage!');

           baddieHealthUpdate = (baddieHealth - damage)


         }else{

          $('#status_text').text('you missed!')

         }

        isGameOver();
        setTimeout(baddieAttack, 5000);

       };






      //random percent heavy damage
      function heavyAtk(){
        console.log('heavy attack thrown')
        var heavyAtkMiss = Math.floor(((Math.random) * 35) + 1);

        var hvyDamage = Math.floor(((Math.random) * 40) + 30);

        if (heavyAtkMiss >= 35){
          $('#status_text').text('you missed!');
        }else{
          $('#status_text').text('epic attack! you did' + hvyDamage + 'damge');
          baddieHealthUpdate = (baddieHealth - hvyDamage)
        }
        isGameOver();
        setTimeout(baddieAttack, 5000);
      };



      //is game over function should include the

      //set time out is seperate function from game over?

      //platinum edition--make button appear if
      //2 consecutive critical hits--insta kill button!

      //loop through is it a win?
      function isGameOver(){
        console.log('running gameover func')
        if (baddieHealth <=0){
          $('#status_text').text('Game Over: you win!');
        } else if (heroHealth <=0){
          $('#status_text').text('you lose bitch');
      } else{

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
    baddieSelctor();
    //eventListeners();
  });


})();
