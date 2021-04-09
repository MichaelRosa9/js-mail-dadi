
//player
var player1 = Math.floor(Math.random() * 6) +1;
console.log("Player dice roll: " + player1);
//computer
var npc = Math.floor(Math.random() * 6) +1;
console.log("computer: " + npc);

//result game
if(player1 > npc){
  console.log("You win!");
} else if(npc > player1){
  console.log("You loose!");
}else{
  console.log("It's a tie!");
}