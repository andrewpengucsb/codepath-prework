//Global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of clue sequence

//Global Variables
var pattern = [2,1,4,3,4,2,2,4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.3; //must be btwn 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound

//function to start the game
function startGame(){
  //initialize game vraiables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  
  //swap start and stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

//function to stop the game
function stopGame(){
  gamePlaying = false;
  
  //swap start and stop buttons again
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

//function to show the rules
function showRules(){
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("rulesBtn").classList.add("hidden");
  document.getElementById("returnBtn").classList.remove("hidden");
  document.getElementById("introText").classList.add("hidden");
  document.getElementById("rulesText").classList.remove("hidden");
}

//function to return to the main menu
function hideRules(){
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("rulesBtn").classList.remove("hidden");
  document.getElementById("returnBtn").classList.add("hidden");
  document.getElementById("introText").classList.remove("hidden");
  document.getElementById("rulesText").classList.add("hidden");
}
//sound synthesis functions
const freqMap = {
  1: 120,
  2: 200,
  3: 280,
  4: 360
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//functions for lighting or clearing a button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//function to play a clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//function to play the sequence of clues
function playClueSequence(){
  guessCounter = 0;
  clueHoldTime = clueHoldTime-progress*25;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0; i<=progress; i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) //set a timeout to play the clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}

//logic for checking player guesses
function guess(btn){
  console.log("user guessed: "+ btn);
  //check if playing
  if(!gamePlaying){
    return;
  }
  
  //game logic
  if(btn == pattern[guessCounter]){
    if(guessCounter == progress){
      if(progress == pattern.length-1){
        winGame();
      }
      else {
        progress++;
        playClueSequence();
      }
    }
    else {
      guessCounter++;
    }
  }
  else {
    loseGame();
  }
}

//call if player loses 
function loseGame(){
  stopGame();
  alert("Game Over! You Lost!");
}

//call if player win
function winGame(){
  stopGame();
  alert("Congrats! You won!");
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)