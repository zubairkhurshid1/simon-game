let gameSeq = [];
let userSeq = [];
let btns = ["red", "blue", "yellow", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let allBtns = document.querySelectorAll('.btn');
let body = document.querySelector('body');

function run() {
    if (started == false) {
            console.log("Game Started");
            started = true;
            clickable();
            levelUp();
        }}

function clickable(){
    for (btn of allBtns){
        btn.addEventListener('click', btnPess);
    }}

    function levelUp() {
        userSeq =[];
        level++;
        h3.innerHTML=" ";
        h2.innerHTML="Level "+level;
        let randIdx = Math.floor(Math.random()*4);
        let randCol = btns[randIdx];
        let randbtn = document.querySelector(`.${randCol}`);
        gameSeq.push(randCol);
        console.log(gameSeq);
        btnFlash(randbtn);
    }

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function btnPess() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");  
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);   
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function checkAns(idx){
  
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000); 
        }
    }
    else{
        console.log(`Game Over!  Press any key`)
        h3.innerHTML = `Game Over! Your score was <b>${level}</b>`;
        h2.innerHTML = `Press Start button`;
        body.style.backgroundColor ="rgb(224, 130, 130)";
          setTimeout(reset,450);
          unclickable();
          scr();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    started=false;
body.style.backgroundColor ="white";
}

function unclickable(){
    for (btn of allBtns){
        btn.removeEventListener('click', btnPess);
    }
}

let score = document.querySelector('.highscore')
let highScore = 0

function scr(){
if(level>highScore){
    highScore = level;
    score.innerHTML="HIGH SCORE: "+ highScore;
}}