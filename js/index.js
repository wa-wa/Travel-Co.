const intro = document.querySelector("#intro");
const centerWord = document.querySelector(".centerWord");
const travelWordBackground = document.querySelector(".travelWordBackground");
const aboutWordBackground = document.querySelector(".aboutWordBackground");
const pageCounter = document.querySelector(".pageCounter");
const socialLinks = document.querySelector(".socialLinks");
const topNav = document.querySelector(".topNav");
const aboutImage = document.querySelector(".about-Image");

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);

let xScrollPosition;
let yScrollPosition;

function scrollLoop() {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;

  setTranslate(0, yScrollPosition * .10, intro);
  setTranslate(0, yScrollPosition * -0.6, centerWord);
  setTranslate(0, yScrollPosition * -0.5, topNav);
  setTranslate(0, yScrollPosition * -0.5, socialLinks);
  setTranslate(0, yScrollPosition * .4, travelWordBackground);
  setTranslate(0, yScrollPosition * .4, aboutWordBackground);

  requestAnimationFrame(scrollLoop);
  // console.log(scrollLoop);
}

function scrollCounter() {
  const windowH =  window.scrollY;
  if (windowH <= 300) {
    pageCounter.innerHTML = '01 / 04';
  } else if (windowH <= 1000){
    aboutWordBackground.style.transition = 1 + 's' + ' ease-out';
    aboutWordBackground.style.color = '#BEC4D2';
    aboutWordBackground.style.opacity = ".05";
    aboutWordBackground.style.zindex = "-10";

    pageCounter.innerHTML = '02 / 04';
  } else if (windowH <= 1650 ) {
    pageCounter.innerHTML = '03 / 04';
    aboutWordBackground.style.opacity = "0";
    aboutWordBackground.style.transition = 1 + 's' + ' ease-out';

    travelWordBackground.style.transition = 1 + 's' + ' ease-out';
  } else if (windowH >= 1700 ) {
    pageCounter.innerHTML = '04 / 04';
  }
  console.log(windowH);
}

window.addEventListener('scroll', scrollCounter);

function fadeInContent() {

}
