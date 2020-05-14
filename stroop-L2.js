var i=0;
var score=0;
var val=0;
var rand=0;
var question;
var ques;
// document.getElementById('st').onclick = start;
function display(){
  meaning=["Red","Green","Yellow","Blue"];
  question=["Red?","Green?","Yellow?","Blue?"];
  var in_1=Math.floor(Math.random() * question.length);
  var in_2=Math.floor(Math.random() * meaning.length);
  mean=meaning[in_2];
  rand=getRandomColor();
  ques=question[in_1].fontcolor(rand);
  document.getElementById("mean").innerHTML=mean;
  document.getElementById("q").innerHTML=ques;
  // $("#color").css("background-color", rand);
  // document.getElementById("disp").innerHTML=rand;
}
function yes(){
  if(rand.includes('#FF') && mean.includes('Red'))
    {
        score=score+1;
       document.getElementById("score").innerHTML=score;
    }
  else if(rand.includes('#00FF') && mean.includes('Green'))
    {
      score=score+1;
      document.getElementById("score").innerHTML=score;
    }
  else if(rand.includes('#ffff') && mean.includes('Yellow'))
    {
      score=score+1;
      document.getElementById("score").innerHTML=score;
    }
  else if(rand.includes('#0000') && mean.includes('Blue'))
    {
      score=score+1;
      document.getElementById("score").innerHTML=score;
    }
 
  else
    {
      score=score-1;
      document.getElementById("score").innerHTML=score;
      
    }
  display();
}
function no(){
  if(rand.includes('#FF') && mean.includes('Red'))
    {
        score=score-1;
       document.getElementById("score").innerHTML=score;
    }
  else if(rand.includes('#00FF') && mean.includes('Green'))
    {
      score=score-1;
      document.getElementById("score").innerHTML=score;
    }
  else if(rand.includes('#ffff') && mean.includes('Yellow'))
    {
      score=score-1;
      document.getElementById("score").innerHTML=score;
    }
  else if(rand.includes('#0000') && mean.includes('Blue'))
    {
      score=score-1;
      document.getElementById("score").innerHTML=score;
    }
  else
    {
      score=score+1;
      document.getElementById("score").innerHTML=score;
    }
  display();
}

function getRandomColor() {
  var color=["#FF0000","#00FF00","#0000FF","#ffff00"];
  var index=Math.floor(Math.random() * color.length);
  color=color[index];
  return color;
}
function start(clicked){
  document.querySelector("#start").style.display="none";
  document.querySelector("#st_main").style.display="block";
  display();
}