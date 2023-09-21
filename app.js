var btn = document.querySelector("#strike");
var reset = document.querySelector("#reset");
var scb_1 = document.querySelector("#score-team1");
var scb_2 = document.querySelector("#score-team2");
var wick_1 = document.querySelector("#wickets-team1")
var wick_2 = document.querySelector("#wickets-team2")
const values=[0,1,2,3,4,5,6,"W"]
var team1= 1;
var ballcount = 0;
var score_1 = 0;
var w_1= 0 ;
var score_2 = 0;
var w_2= 0 ;
var temp = 0;
var temp1 = 0;
const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");


function updatescore(){
    scb_1.innerText = score_1;
    wick_1.innerText = w_1;
    scb_2.innerText = score_2;
    wick_2.innerText = w_2;
}

function gameover(score_1,score_2){
    gameOverAudio.play();
    if(score_1>score_2){
        alert("INDIA WON "+ score_1)
    }
    else if(score_2>score_1){
        alert("PAKISTAN WON "+ score_2)
    }
    else if(score_1 === score_2){
        alert("TIE")
    }
}


function name(){
    return values[(Math.floor(Math.random()*8))]
}



btn.addEventListener("click",()=>{
    strikeAudio.pause();
    strikeAudio.currentTime=0;
    strikeAudio.play();
    if (team1==1){
        ballcount+=1;
        temp = name();
        document.querySelector(`#team1-superover .ball:nth-child(${ballcount})`).innerText = temp;
        if(temp != "W"){
            score_1 += temp;
        }
        else if(temp == "W"){
            w_1 += 1;
        } 
        updatescore();
        console.log(score_1);
        if(ballcount==6){
            ballcount=0;
            team1 = 2;
        }
    }
    else if(team1 ==2){
        ballcount+=1;
        temp1 = name();
        document.querySelector(`#team2-superover .ball:nth-child(${ballcount})` ).innerText = temp1;
        if(temp1 != "W"){
            score_2 += temp1;
        }
        else if(temp1 == "W"){           
            w_2 += 1;
        }   
        if(score_1 < score_2 || ballcount === 6 || w_2 === 2){
            gameover(score_1,score_2)
    } 
    }
    
    updatescore();


});

reset.addEventListener ("click",() =>{
    window.location.reload();
});
