var myName = prompt('이름을 입력해 주세요');

if (myName == null) {
    text = "User cancelled the prompt.";
}

else (document.getElementById("myName").innerHTML = myName);

function setInnerHTML1() {
    const content1 =    
    document.getElementById('content1');
    content1.innerHTML = "rock";
}

function setInnerHTML2() {
    const content1=    
    document.getElementById('content1');
    content1.innerHTML = "paper";
}

function setInnerHTML3() {
    const content1 =    
    document.getElementById('content1');
    content1.innerHTML = "scissors";
}

var content4 = document.getElementById('content4')

const btn = document.getElementById('fightBtn')

// 1= rock 
// 2= paper 
// 0= scissors 

btn.addEventListener('click', function () {
    const content1=    
    document.getElementById('content1');
    var array = [1, 2, 0];
    var randomValue = Math.floor(Math.random() * array.length);
    var comChoice;

    switch (randomValue) {
        case 1:
            comChoice = 'rock';
            break;
        case 2:
            comChoice = 'paper';
            break;
        case 0:
            comChoice = 'scissors';
            break;
    }

    if (content1.innerHTML === 'rock' && randomValue === 1 || content1.innerHTML === 'paper' && randomValue === 2 || content1.innerHTML === 'scissors' && randomValue === 0) {
        document.getElementById('content4').innerHTML = "Computer chose: " + comChoice;
        document.getElementById('content5').innerHTML = "This game is a DRAW! <br> 무승부!";
    }
        else if (content1.innerHTML === 'rock' && randomValue === 2 || content1.innerHTML === 'paper' && randomValue === 0 || content1.innerHTML === 'scissors' && randomValue === 1) {
            document.getElementById('content4').innerHTML = "Computer chose: " + comChoice;
            document.getElementById('content5').innerHTML = "You LOSE <br> 패배!";
    }
        else if (content1.innerHTML === 'rock' && randomValue === 0 || content1.innerHTML === 'paper' && randomValue === 1 || content1.innerHTML === 'scissors' && randomValue === 2) {
            document.getElementById('content4').innerHTML = "Computer chose: " + comChoice;
            document.getElementById('content5').innerHTML = "You WIN <br> 승리!";
        };
})