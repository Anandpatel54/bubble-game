var timer = 60;
var score = 0;
var hitrn = 0



function makebubble(){
    var clutter = "";

    for(var i = 1; i<=160; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#bottom").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#bottom").innerHTML = `<h1>Game Over</h1>`
            /*document.querySelector("#bottom").style.backgroundColor = " rgb(120, 211, 120)"*/
        }
    },1000)
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitvar").textContent = hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}

document.querySelector("#bottom").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent)
    if(clickednum === hitrn){
        increaseScore()
        getNewHit()
        makebubble()
    }
});


makebubble();
runTimer();
getNewHit();


