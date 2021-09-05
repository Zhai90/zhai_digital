// Hey! Don't touchie this stuff...
console.log("Script.JS is still under development.");

// Makes Navbar logo spin wooooooO!
function hover(element) {
  element.setAttribute(
    "src",
    "https://cdn.glitch.com/1b609a0f-db84-4803-9927-b6db99f31462%2F3dgifmaker12190.gif?v=1629477573566"
  );
}

function unhover(element) {
  element.setAttribute(
    "src",
    "https://cdn.glitch.com/1b609a0f-db84-4803-9927-b6db99f31462%2Fimageonline-co-roundcorner.png?v=1629418720119"
  );
}

//Navbar logo END

// Enable Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Overlay effect
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function overlaytrue() {
  document.getElementById("specialthxcont").style.display = "block";
}

function overlayfalse() {
  document.getElementById("specialthxcont").style.display = "none";
}

//Overlay Effect END
