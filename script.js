/*---------------------COOKIES-------------------*/

var cook = document.querySelector(".cookie");
var closecook = document.querySelector(".cookie button");

function cookies() {
  cook.style.bottom = "0";
  cook.style.transition = "0.3s";
}

closecook.addEventListener("click", () => {
  cook.style.bottom = "-90px";
  cook.style.transition = "0.3s";
});

/*--------------------STICKY NAV-----------------*/

const nav = document.getElementById("nav");
const main = document.getElementById("main");
const mainTop = main.offsetTop;

function stickyNavigation() {
  if (window.scrollY >= mainTop) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

window.addEventListener('scroll', stickyNavigation);

/*----------------APPEAR ON SCROLL S1-----------------*/

const writing = document.querySelector(".writing .text");
const title = document.querySelector(".writing .title");
const carousel = document.querySelector(".carousel");
const text = document.querySelector(".undertext");
const textTop = text.offsetTop;

function aosOne() {
  if (window.scrollY >= textTop ) {
    writing.style.opacity = "1";
    writing.style.transform = "none";
    title.style.opacity = "1";
    title.style.transform = "none";
    title.style.transitionDelay = "0.8s";
    carousel.style.opacity = "1";
    carousel.style.transform = "none";
  }
};

window.addEventListener('scroll', aosOne);

/*----------------APPEAR ON SCROLL S2-----------------*/

const ptitle = document.querySelector(".paintings .title");
const ptext = document.querySelector(".paintings .text");
const wrTop = writing.offsetTop;

function aosTwo() {
  if (window.scrollY >= wrTop ) {
    ptitle.style.opacity = "1";
    ptitle.style.transform = "none";
    ptext.style.opacity = "1";
    ptext.style.transform = "none";
    ptext.style.transitionDelay = "0.8s";
  }
};

window.addEventListener('scroll', aosTwo);

/*----------------APPEAR ON SCROLL S3-----------------*/

const secThree = document.querySelector(".section3");
const sec3Top = secThree.offsetTop;
const contactTitle = document.querySelector(".section3 .title3");

function aosThree() {
  if (window.scrollY >= sec3Top ) {
    contactTitle.style.opacity = "1";
    contactTitle.style.transform = "none";
  }
};

window.addEventListener('scroll', aosThree);

/*----------------OPEN RESPONSIVE MENU-----------------*/

var opener = document.querySelector(".opener");
var burgr = document.querySelector(".burgr");

burgr.addEventListener("click", () => {
  opener.style.display = "block";
  opener.style.animationName = "open";
  opener.style.right = "0";

});

var burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  opener.style.display = "block";
  opener.style.animationName = "open";
  opener.style.right = "0";
});

/*-------------------CLOSE RESPONSIVE MENU-----------*/

var closing = document.querySelector("#closing");

closing.addEventListener('click', () => {
  opener.style.animationName = "close";
  opener.style.right = "100vw";
});

function closenow() {
  opener.style.animationName = "close";
  opener.style.right = "100vw";
};

/*--------------------CAROUSEL---------------------*/

var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("nextBtn");
var cerc = document.querySelectorAll("cerc");



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var slidex = document.getElementsByClassName("slidex");
  var cerc = document.getElementsByClassName("cerc");
  if (n > slidex.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slidex.length
  }
  for (i = 0; i < slidex.length; i++) {
    slidex[i].style.display = "none";
  }
  for (i = 0; i < cerc.length; i++) {
    cerc[i].className = cerc[i].className.replace(" activat", "");
  }
  slidex[slideIndex - 1].style.display = "block";
  cerc[slideIndex - 1].className += " activat";
}

/*---------------------IMAGE MODALS---------------------*/

//Modal
var modal = document.querySelector(".modal");
var modalImg = document.querySelector(".modalImg");
var modalTitle = document.querySelector(".modalTitle");
var modalDetails = document.querySelector(".modalDetails");

//Images
var paint = document.getElementsByClassName("paint");
var paintImgs = document.getElementsByClassName("paintImgs");

//Activate Modal, Image and Caption
function superfun(i) {
  modalImg.src = i.src;
  modalTitle.innerHTML = i.title;
  modalDetails.innerHTML = i.alt;
  modal.style.zIndex = "99";
  modal.style.opacity = "1";
  modal.style.transition = "0.5s";
};

//Deactivate Modal
modal.addEventListener('click', () => {
  modal.style.zIndex = "-1";
  modal.style.opacity = "0";
});

/*---------------------LEGALS-------------------------*/

//Modal
var black = document.querySelector(".legals");
var policies = document.querySelector(".legals .policies");
var terms = document.querySelector(".legals .terms");
var copies = document.querySelector(".legals .copies");

//Activate Modal
function openpolicies() {
  black.style.zIndex = "999";
  black.style.transition = "0.5s";
  black.style.opacity = "1";
  policies.style.zIndex = "9999";
  policies.style.transition = "0.5s";
  policies.style.opacity = "1";
  policies.style.display = "block";
}

function openterms() {
  black.style.zIndex = "999";
  black.style.transition = "0.5s";
  black.style.opacity = "1";
  terms.style.zIndex = "9999";
  terms.style.transition = "0.5s";
  terms.style.opacity = "1";
  terms.style.display = "block";
}

function opencopies() {
  black.style.zIndex = "999";
  black.style.transition = "0.5s";
  black.style.opacity = "1";
  copies.style.zIndex = "9999";
  copies.style.transition = "0.5s";
  copies.style.opacity = "1";
  copies.style.display = "block";
}

//Deactivate Modal
black.addEventListener('click', () => {
  black.style.zIndex = "-1";
  black.style.opacity = "0";
  policies.style.zIndex = "-1";
  policies.style.transition = "0.5s";
  policies.style.opacity = "0";
  policies.style.display = "none";
  terms.style.zIndex = "-1";
  terms.style.transition = "0.5s";
  terms.style.opacity = "0";
  terms.style.display = "none";
  copies.style.zIndex = "-1";
  copies.style.transition = "0.5s";
  copies.style.opacity = "0";
  copies.style.display = "none";
});