"use strict";
(function(){
  console.log('it works')
// //win counter--is win count 3? y? you win!
// //not 3? keep playing
// var entireGameRun =function(){
  // entireGameRun = 0;
  // for (var i =0; i < entireGameRun; i++){
  //   console.log(entireGameRun[i]);
  //   if (entireGameRun <=3){
  //     entireGameRun();
  //   }else{
  //     ('.button').style.display='none';

  //   }
  // }


//tried wrapping game function in a function to acheive start
//button and also to run the win counter.  didn't work. huge failure.


//enemy selector here
var baddie = [
    ['Link', 'images/link1.png', 100],
    ['Bowser', 'images/bowser1.png', 150],
    ['Ganondorf', 'images/ganondorf.png', 200],
    ['Samus', 'images/samus1.png', 115],
    ['Fox', 'images/fox1.png', 100],
    ['Kong', 'images/kong1.png', 175],
];



//FIGURE OUT HOW TO LOAD MEGAMAN HERE3
// $(document).ready(function(){
//   //run megaman entrance animation
// })



var heroImage = 'images/megaman-image.png';
$('#hero_img').attr('src', heroImage);

var heroHealthAtLoad = 100
var heroHealthAfterMove = 0

var enemyName = '';
var enemyHealthAtLoad = 150;
var enemyImage = ''



var enemyHealthAtLoad = 0;
// $('.baddie_health').text(enemyHealthAtLoad)
var enemyHealthAfterMove = ''


// on game load run whichBaddie
function enemySelctor(){
  var enemyChoice = Math.floor(Math.random() * baddie.length);

      enemyName = (baddie[enemyChoice][0]);
      $('#baddie_name').text(enemyName);
      enemyHealthAtLoad = (baddie[enemyChoice][2]);
      $('#baddie_health').text('Health: ' + enemyHealthAtLoad);
      enemyImage = ('src', baddie[enemyChoice][1]);
      $('#baddie_img').attr('src', enemyImage);
  };




//the enemy's attack function
 function enemyAttack(){
    console.log(enemyName + ' attacks')
      var badGuyAttackDamage = Math.floor(Math.random() * 25);

      heroHealthAfterMove = (heroHealthAtLoad - badGuyAttackDamage);
      heroHealthAtLoad = heroHealthAfterMove;

      $('#status_text').text(enemyName + ' does ' + badGuyAttackDamage + ' damage!');

      $('.hero_health').text('Health: ' + heroHealthAtLoad);

      isGameOver();

    $('.button').toggle("fold");
      //show function here
    };

//megaman normal attack function
 function normAtk(){
        // console.log('normal attack thrown')



        // var attackMiss = Math.floor((Math.random) * 10);
        //  if (attackMiss < 3){
          var heroAttackDamage = Math.floor(Math.random() * 20);

           enemyHealthAfterMove = (enemyHealthAtLoad - heroAttackDamage);
           enemyHealthAtLoad = enemyHealthAfterMove;

           $('#status_text').text('Megaman does ' + heroAttackDamage + ' damage!');

           $('#baddie_health').text('Health: ' + enemyHealthAtLoad);

         // }else{

         //  $('#status_text').text('you missed!')
          //hide button function here
         // }
         //whenever I activate this section I lose fighter images. wtf!@!@#

        isGameOver();
        setTimeout(enemyAttack, 3000);
        $('.button').toggle("fold");

       };




//megaman heal button
      function healBtn(){

        // $('.buttons').hide();

        $('#status_text').text('Megaman used health')
        var rndmHealthValue = Math.floor((Math.random() * 20) + 10);


        heroHealthAfterMove = (heroHealthAtLoad + rndmHealthValue);
        heroHealthAtLoad = heroHealthAfterMove;

        // $('.hero_health').text('heal restores ' + rndmHealthValue + ' health to Megaman');
        $('#status_text').text('restoring ' + rndmHealthValue + ' health');

        isGameOver();
        //hide button function
        setTimeout(enemyAttack, 3000);
        $('.button').toggle("fold");
        };



//megaman heavy damage attack function
//none of my miss values work.  attack ranges would not work. I suck.
      function heavyAtk(){

        // console.log('heavy attack thrown')
        // var heavyAtkMiss = Math.floor((Math.random) * 35);

        // if (heavyAtkMiss >= 35){
        var hvyDamage = Math.floor(Math.random() * 40);


          // $('#status_text').text('you missed!');
        // }else{
          enemyHealthAfterMove = (enemyHealthAtLoad - hvyDamage);
          enemyHealthAtLoad = enemyHealthAfterMove;

         $('#status_text').text('Attack does ' + hvyDamage + ' damage. ');
         $('#baddie_health').text('Health: ' + enemyHealthAtLoad);

        isGameOver();

        setTimeout(enemyAttack, 3000);
        $('.button').toggle("fold");
      };


      //platinum edition
      //--make button appear if
      //2 consecutive critical hits--insta kill button!

//gameover function, runs every turn
      function isGameOver(){

        if (heroHealthAtLoad <= 0){
          $('.hero_health').text('Health: 0');
          $('#status_text').text('GAME OVER, you lose');
          // $('#baddie_img').rotate(180);
          $('.button').hide(); //why won't my buttons hide at gameover!!!!
        } else if (enemyHealthAfterMove <= 0){

          $('#baddie_health').text('Health: 0');
          $('#status_text').text('YOU WIN');
          $('#baddie_img').rotate(180);
          $('.button').hide();//figure out how to make this work
          // make buttons go away
          // $('#status_text').text('you lose bitch');
      }
    };



  $('#heal_btn').on('click', healBtn);
  $('#attack_btn').on('click', normAtk);
  $('#heavy_atk').on('click', heavyAtk);


//event listeners tied to actions here
  $(document).ready(function(){
    enemySelctor();
    eventListeners();
  });

})();

