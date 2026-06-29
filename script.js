const random=Math.floor(Math.random()*100)+1;

function checkGuess(){

let guess=document.getElementById("guess").value;

let result=document.getElementById("result");

if(guess==random)
    result.innerHTML="🎉 You Win";
else if(guess<random)
    result.innerHTML="Too Low";
else
    result.innerHTML="Too High";

}
