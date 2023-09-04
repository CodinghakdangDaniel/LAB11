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

    // const content1 =
    // document.getElementById('content1')

    // rock.addEventListener('click',() =>{    
    // document.getElemenyById('content1').innerHTML = "Rock"
    // });
    

function setInnerHTML2() {
    const content2 =    
    document.getElementById('content1');
    // document.getElementById('content2');
    content2.innerHTML = "paper";
}

function setInnerHTML3() {
    const content3 =    
    document.getElementById('content1');
    content3.innerHTML = "scissors";
}

var rock = 1;
var paper = 2;
var scissors = 0;


var array = [1, 2, 0];
var randomValue = [Math.floor(Math.random() * array.length)];

const content4 =
    document.getElementById('content4')

const btn =
    document.getElementById('fightBtn')



btn.addEventListener('click', function () {
   
    if (rock === console.log(randomValue)) {
        content4.innerHTML = "Computer chose: scissors";
        document.getElementById('content5').innerHTML = "This game is a DRAW! <br> 무승부!";
    }
        else if (rock < console.log(randomValue)) {
            content4.innerHTML = "Computer chose: paper";
            document.getElementById('content5').innerHTML = "You LOSE <br> 패배!";
    }
        else {
            content4.innerHTML = "Computer chose: scissors";
            document.getElementById('content5').innerHTML = "You WIN <br> 승리!";
        };
})