var sRock = "r, ";
var sPaper = "p, "; 
var sScissors = "s"; 
var vRPS = "";
var vNumber = "";
var text = '42px';
var integer = parseInt(text, 10);
let person = prompt("How many games would you like to play?", vNumber);

/*let userchoice = prompt("Do you pick, rock, paper, or scissors? " + "(enter " + sRock + sPaper + sScissors + ")", vRPS);*/

/*
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
const game = [[["Rock", 0], ["Paper", 1], ["scissors", 2]]]
*/
for (let i = 0; i < person; i++) {
    /*alert (i);*/
    /*let return1 = -1;*/
    let computerChoice = Math.floor(Math.random() * 3);
    alert (computerChoice);
    let RPS = prompt("Do you pick, rock, paper, or scissors? " + "(enter " + sRock + sPaper + sScissors + ")", vRPS);
    alert(RPS);
    if(RPS == "p") {
        let return1=1;}
        if(RPS == "r") {
            let return1=0;
        } else {
            if(RPS == "s") {
                let return1=2;
        }
        
    }
    alert(return1)
    /*Rock = 0; Paper = 1; Scrissors = 2*/

    if (return1 === computerChoice) alert ("tie")

}

let i = 0;

if (person != null) {
  document.getElementById("person").innerHTML =
  sRock + sPaper + sScissors;
}
