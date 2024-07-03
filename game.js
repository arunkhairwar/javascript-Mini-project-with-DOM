let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ["red", "yellow", "green", "purple"];
let h2 = document.querySelector("h2");

//Started the game by pressing any key
document.addEventListener("keypress", function (event) {
  if (started == false) {
    console.log("game started");
    started = true;
  }

  levelUp();
});

//Function to flash the by changing the bacground color for 0.25 sec. 
function btnFlash(btn) {
  btn.classList.add("Flash");
  setTimeout(function () {
    btn.classList.remove("Flash");
  }, 250);
}

//created level Up function to increase the level
function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 4); //generate random number
  let randColor = btns[randIdx]; //select the color from btns array using that random number
  let randBtn = document.querySelector(`.${randColor}`); //acces the button class and select to change the background color
  btnFlash(randBtn); //flash by btn by changing it background color
  gameSeq.push(randColor);


}

function checkAns() {
  console.log("your level is: ", level);
}
// function will excute after pressing any button. which have the class .btn  
function btnPress() {
   console.log(this);
   let btn = this; 
   btnFlash(btn);

   let userColor = btn.getAttribute("id"); // red, yellow, green, purple
   console.log(userColor); 
   userSeq.push(userColor);
 

   checkAns();

}

let allBtn = document.querySelectorAll(".btn");

for(btn of allBtn) {
    btn.addEventListener("click", btnPress);//add event listen on all the .btn class
}

