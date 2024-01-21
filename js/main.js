document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow
document.getElementById('red').onclick = partyRed
document.getElementById('orange').onclick = partyOrange
document.getElementById('pink').onclick = partyPink


function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyYellow() {
  document.querySelector('body').style.backgroundColor = 'rgba(255,255,0,1)'
  document.querySelector('body').style.color = 'white'
}

function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgba(255,0,0,1)'
  document.querySelector('body').style.color = 'white'
}

function partyOrange() {
  document.querySelector('body').style.backgroundColor = 'rgba(255,127,0,1)'
  document.querySelector('body').style.color = 'white'
}

function partyPink() {
  document.querySelector('body').style.backgroundColor = 'rgba(255,0,255,1)'
  document.querySelector('body').style.color = 'white'
}




document.getElementById('pulse').onclick = partyPulse;

function partyPulse() {
  const body = document.querySelector('body');
  body.style.animation = 'pulse 1s infinite';
}


document.getElementById('blur').onclick = partyBlur;

function partyBlur() {
  const body = document.querySelector('body');
  body.style.filter = 'blur(5px)';
}


document.getElementById('strobe').onclick = partyStrobe;

function partyStrobe() {
  const body = document.querySelector('body');
  let isWhite = true;

  setInterval(() => {
    if (isWhite) {
      body.style.backgroundColor = '#fff';
    } else {
      body.style.backgroundColor = '#000'; // Set the alternate color
    }
    isWhite = !isWhite;
  }, 100); // Adjust the interval (in milliseconds) based on your desired strobe speed
}