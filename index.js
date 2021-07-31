var readLineSync=require('readline-sync');


intro();
var score=0;


// function for introduction
function intro()
{
var username=readLineSync.question("Hello,May I know your name plaese?");
console.log("\n");
console.log("welcome "+username+"!!");
console.log("\n")
console.log("Do you want to check how well you know your friend Kanupriya?");
}


var name=readLineSync.question("(yes or no): ");


// if user write yes then they'll enter the quiz
if(name==="yes")
{ console.log('\n')
  console.log("perfect ,let's see how well you know your friend")
  console.log("------------------------------"); 

  quiz();

var obj1={
  name:"aditi",
  score:3
}
var obj2={
  name:"varshita",
  score:2
}
console.log("-------------------------------");
console.log("scoreboard:"+obj1.name+":"+obj1.score+"\n"+obj2.name+":"+obj2.score);
}


else
{
  console.log("sorry to see you leaving ");
  }



//function for questions 
 function quiz()
 {
   var arr=["black","lily","jacksparrow"];
  var favColor=readLineSync.question("what is her favourite colour? ");
  console.log("\n");
  if(favColor===arr[0])
  {score++;}
  
 var petName=readLineSync.question("what is her pet name? ");
  console.log("\n");
 if(petName===arr[1])
 {score++;}

  var favMovieCharacter=readLineSync.question("what is the name of her favourite movie character? ");
   console.log("\n");
  if(favMovieCharacter===arr[2])
  {score++;}
  
  console.log("------------------------------")
  console.log("total score="+score);
  console.log("\n");
  
 
 //array for correct answers 
console.log("let's check the correct answers")
console.log("-------------------------------")
// for loop to print the correct ans.
for(var i=0;i<arr.length;i++)
{
  
  console.log(arr[i]);
}
}