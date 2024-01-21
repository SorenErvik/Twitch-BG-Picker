//Grabbing Category Tabs
document.getElementById('colors').onclick = colorReveal
document.getElementById('effects').onclick = effectReveal
document.getElementById('wallpapers').onclick = wallpaperReveal
document.getElementById('reset').onclick = resetAllEffects

// Grabbing colors
document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow
document.getElementById('red').onclick = partyRed
document.getElementById('orange').onclick = partyOrange
document.getElementById('brown').onclick = partyBrown

//Grabbing effects
document.getElementById('pulse').onclick = partyPulse;
document.getElementById('blur').onclick = partyBlur;

//Grabbing wallpapers
document.getElementById('bg-1').onclick = bg1;
document.getElementById('bg-2').onclick = bg2;
document.getElementById('bg-3').onclick = bg3;
document.getElementById('bg-4').onclick = bg4;
document.getElementById('bg-5').onclick = bg5;
document.getElementById('bg-6').onclick = bg6;
document.getElementById('bg-7').onclick = bg7;
document.getElementById('bg-8').onclick = bg8;
document.getElementById('bg-9').onclick = bg9;
document.getElementById('bg-10').onclick = bg10;

//Reveal Functions
function colorReveal() {
  // Get all elements with the class 'colors'
  const colorElements = document.querySelectorAll('.colors');

  // Toggle the 'hidden' class for each 'colors' element
  colorElements.forEach((element) => {
    element.classList.toggle('hidden');
  });
}

function effectReveal() {
  // Get all elements with the class 'effects'
  const effectElements = document.querySelectorAll('.effects');

  // Toggle the 'hidden' class for each 'effects' element
  effectElements.forEach((element) => {
    element.classList.toggle('hidden');
  });

}

function wallpaperReveal() {
  // Get all elements with the class 'wallpapers'
  const wallpaperElements = document.querySelectorAll('.wallpapers');

  // Toggle the 'hidden' class for each 'wallpapers' element
  wallpaperElements.forEach((element) => {
    element.classList.toggle('hidden');
  });

}

function resetAllEffects() {
  const body = document.querySelector('body');

  // Reset background color and image
  body.style.backgroundColor = '';
  body.style.backgroundImage = '';

  // Reset additional styles
  body.style.animation = '';
  body.style.filter = '';
}

// Color Functions
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

function partyBrown() {
  document.querySelector('body').style.backgroundColor = 'rgb(75, 44, 8)'
  document.querySelector('body').style.color = 'white'
}

// Effects functions
function partyPulse() {
  const body = document.querySelector('body');
  body.style.animation = 'pulse 1s infinite';
}

function partyBlur() {
  const body = document.querySelector('body');
  body.style.filter = 'blur(5px)';
}

// Wallpaper functions
function bg1() {
  document.querySelector('body').style.backgroundImage = 'url("/img/bg-1.jpeg")';
  document.querySelector('body').style.backgroundRepeat = 'no-repeat';
  document.querySelector('body').style.backgroundSize = 'cover';
  document.querySelector('body').style.backgroundPosition = 'center';
  document.querySelector('body').style.height = '100vh';
}

function bg2() {
  document.querySelector('body').style.backgroundImage = 'url("/img/bg-2.avif")';
  document.querySelector('body').style.backgroundRepeat = 'no-repeat';
  document.querySelector('body').style.backgroundSize = 'cover';
  document.querySelector('body').style.backgroundPosition = 'center';
}

function bg3() {
  document.querySelector('body').style.backgroundImage = 'url("/img/bg-3.jpg")';
  document.querySelector('body').style.backgroundRepeat = 'no-repeat';
  document.querySelector('body').style.backgroundSize = 'cover';
  document.querySelector('body').style.backgroundPosition = 'center';
}

function bg4() {
  document.querySelector('body').style.backgroundImage = 'url("/img/bg-4.jpg")';
  document.querySelector('body').style.backgroundRepeat = 'no-repeat';
  document.querySelector('body').style.backgroundSize = 'cover';
  document.querySelector('body').style.backgroundPosition = 'center';
}

function bg5() {
  document.querySelector('body').style.backgroundImage = 'url("/img/bg-5.jpg")';
  document.querySelector('body').style.backgroundRepeat = 'no-repeat';
  document.querySelector('body').style.backgroundSize = 'cover';
  document.querySelector('body').style.backgroundPosition = 'center';
}

function bg6() {
  document.querySelector('body').style.backgroundImage = 'url("/img/bg-6.jpg")';
  document.querySelector('body').style.backgroundRepeat = 'no-repeat';
  document.querySelector('body').style.backgroundSize = 'cover';
  document.querySelector('body').style.backgroundPosition = 'center';
}

function bg7() {
  document.querySelector('body').style.backgroundImage = 'url("/img/bg-7.jpg")';
  document.querySelector('body').style.backgroundRepeat = 'no-repeat';
  document.querySelector('body').style.backgroundSize = 'cover';
  document.querySelector('body').style.backgroundPosition = 'center';
}

function bg8() {
  document.querySelector('body').style.backgroundImage = 'url("/img/bg-8.jpg")';
  document.querySelector('body').style.backgroundRepeat = 'no-repeat';
  document.querySelector('body').style.backgroundSize = 'cover';
  document.querySelector('body').style.backgroundPosition = 'center';
}

function bg9() {
  document.querySelector('body').style.backgroundImage = 'url("/img/bg-9.png")';
  document.querySelector('body').style.backgroundRepeat = 'no-repeat';
  document.querySelector('body').style.backgroundSize = 'cover';
  document.querySelector('body').style.backgroundPosition = 'center';
}

function bg10() {
  document.querySelector('body').style.backgroundImage = 'url("/img/bg-10.jpg")';
  document.querySelector('body').style.backgroundRepeat = 'no-repeat';
  document.querySelector('body').style.backgroundSize = 'cover';
  document.querySelector('body').style.backgroundPosition = 'center';
}