const form = document.getElementById('form');
form.addEventListener('submit', handlesubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(math.random()* this.max);
    }
};
let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
        attempt.innerHTML = 'tentativa: ' + value;
};

function handlesubmit(e){ 
    e.preventDefault();

    let kick = document.getElementById('kick').value;
    
    if(!kick) {
        alert ('digite algum valor!')
        return;
    }
};
 updateAttempt(attempt, ++Guess.attemptsNumber);



    if(numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parabéns, você cagou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();
        
    } else if(numberDrawn > kick){
        status.innerHTML = 'O número é Maior!';
        status.style.color = '#de4251';
        clear();
    
    }else if(numberDrawn < kick) {
        status.innerHTML = 'O número é menor';
        status.style.color = '#de4251';
        clear();
    }


function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart(){
    document.location.reload(true);
};

function clear() {
  ;  document.getElementById('kick').value = '';
};
