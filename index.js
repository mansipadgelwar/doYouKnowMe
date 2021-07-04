var readlineSync = require('readline-sync');  
const chalk = require('chalk');

var topScoreList = [
  {
   name : "Janvi",
   score : 10
 },
 {
   name : "vaibhavi",
   score : 8
 },
 {
   name : "Mugdha",
   score: 7
 }  
]

var question = [
  {
    question : "How many siblings do I have?\n a. 2 \n b. 1 \n c. 3 \n d. 0\n",
    correctOption : "b",   
    answer : "I have an younger sister."
  },
  {
    question : "What is my birth year?\n a. 1996 \n b. 1999 \n c. 1998 \n d. 1997\n",
    correctOption :"c",
    answer : "I was born on 06/05/1998."
  },
  {
    question : "Do I prefer coffee or tea?\n a. Coffee \n b. Tea \n c. Both\n d. Neither\n",
    correctOption :"b",
    answer : "I am chai person always."
  },{
    question : "What childish thing do I still enjoy?\n a. Making paper boats \n b. Eating chalk \n c. Popping bubble wrap \n d. None\n",
    correctOption :"c",
    answer : "I still enjoy popping bubble wraps. "
  },{
    question : "Which instrument I can play?\n a. Guitar \n b. Piano \n c. Ukulele \n d. Flute \n",
    correctOption :"c",
    answer : "I can play ukulele"
  },{
    question : "Do I prefer spicy food over sweet, or sweet over spicy?\n a. spicy over sweet \n b. Sweet over Spicy \n c. None \n d. Both\n",
    correctOption : "a",
    answer : "Spicy over sweet anytime."
  },{
    question : "What is my #1 favourite fast food to eat?\n a. Burger \n b. Pizza \n c. French Fries \n d. Chicken wings\n ",
    correctOption : "b",
    answer : "Pizzzzzzzzza is love."
  },
  {
    question : "What was my hobby that I loved growing up?\n a. Singing \n b. Dancing \n c. Painting \n d.Reading\n",correctOption: "b",
    answer : "Dancing"
  },
  {
    question : "What was my favourite subject in school?\n a. Maths \n b. Science \n c. Sanskrit \n d. Hindi\n",
    correctOption :"a",
    answer : "Maths was my favourite subject in school."
  },{
    question : "What genre of music is my favourite?\n a. Rock \n b. Heavy Metal \n c. Pop Music \n d. Dance Music \n",
    correctOption : "d",
    answer : "Dance Music it is."
  },
]

var score = 0;

var userName = readlineSync.question("What is your name? ");

console.log(chalk.red.bgWhite.bold( "\nWelcome "+userName+" to the HOW WELL DO YOU KNOW ME quiz"));

console.log(chalk.red.bgWhite.bold("\n---------------QUIZ BEGINS---------------\n"));

function play(question,correctOption,answer){

  console.log(chalk.white.bgMagenta.bold("\n-------------- Q U E S T I O N --------------\n"));

  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === correctOption.toUpperCase()){
    console.log("You are right!");
    score = score + 1;
  }
  else{
    console.log(chalk.red.bold("You are wrong!\n"));
    score = score - 1;
    console.log(chalk.red.bgWhite.bold(answer + "\n"));
  }
  console.log(chalk.yellow("Current score: "+ score));
}

for(let i=0;i<question.length;i++){
  var currentQuestion = question[i];
  play(currentQuestion.question,currentQuestion.correctOption,currentQuestion.answer);
}

function topScorer(){
    for(var i=0;i<topScoreList.length;i++){
      var currentScore = topScoreList[i];
      if(score > currentScore.score){
        console.log(chalk.white.bgRed.bold("Hurray! you have beat one of the top scorers. Send me screenshot of your score and I will update the top scorer list."));
        break;
      }
    }
  }

  topScorer();

  function showTopScores(topScoreList){
     for(let i=0;i<topScoreList.length;i++){
       console.log(topScoreList[i].name + ":" + topScoreList[i].score);
     }
  }

  console.log("\nHere's the list of top scorers.\n");
  showTopScores(topScoreList);

