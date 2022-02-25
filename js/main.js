const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Front-End Web Developer", "Web Designer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



// $('.skill-per').each(function(){
//     var $this = $(this);
//     var per = $this.attr('per');
//     $this.css("width",per);

//     /*--$({animatedValue: 0}).animate({animatedValue: per},{
//         duration: 1000,
//         step: function(){
//             $this.attr('per', Math.floor(this.animatedValue));
//         },
//         complete: function(){
//          $this.attr('per', Math.floor(this.animatedValue) );
//         }
//     });----*/
// });






var li_elements = document.querySelectorAll(".nav-menu ul li");
var item_elements = document.querySelectorAll(".change");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function(item) {
      item.style.display = "none";
    });
    if (li_value == "about") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "resume") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "work") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "contacts") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}

