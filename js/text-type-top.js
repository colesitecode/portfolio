const typedText = document.querySelector(".typed-text-top");
const cursor = document.querySelector(".cursor-top");

const textArrayTop = ["Front-End Web Developer", "Web Designer"];
const typingDelayTop = 200;
const erasingDelayTop = 100;
const newTextDelayTop = 2000; // Delay between current and next text
let textArrayIndexTop = 0;
let charIndexTop = 0;

function type() {
  if (charIndexTop < textArrayTop[textArrayIndexTop].length) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent += textArrayTop[textArrayIndexTop].charAt(charIndexTop);
    charIndexTop++;
    setTimeout(type, typingDelayTop);
  } 
  else {
    cursor.classList.remove("typing");
  	setTimeout(erase, newTextDelayTop);
  }
}

function erase() {
	if (charIndexTop > 0) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent = textArrayTop[textArrayIndexTop].substring(0, charIndexTop-1);
    charIndexTop--;
    setTimeout(erase, erasingDelayTop);
  } 
  else {
    cursor.classList.remove("typing");
    textArrayIndexTop++;
    if(textArrayIndexTop>=textArrayTop.length) textArrayIndexTop=0;
    setTimeout(type, typingDelayTop + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArrayTop.length) setTimeout(type, newTextDelayTop + 250);
});