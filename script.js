var myName = prompt('이름을 입력해 주세요');

if (myName == null) {
    text = "User cancelled the prompt.";
}

else (document.getElementById("myName").innerHTML = myName);

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");


function setInnerHTML() {
    const content1 =    
    document.getElementById('content1');
    content1.innerHTML = "<div style='color: red'>Rock</div>";
    // content1.innerHTML = 'Rock';
}

    // const content2 =
    // document.getElementById('content2')

    // content2.addEventListener('click',() =>{    
    // document.getElemenyById('content2') = "Hello"
    // });


// function setInnerHTML() {
//     const content2 =    
//     document.getElementById('content1');
//     content2.innerHTML = "<div style='color: red'>Scissors</div>";
// }

// function setInnerHTML() {
//     const content3 =    
//     document.getElementById('content1');
//     content3.innerHTML = "<div style='color: red'>Paper</div>";
// }