var year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

var btnYesR1 = document.getElementById("btnYesR1");
var btnNoR1 = document.getElementById("btnNoR1");
var btnYesR2 = document.getElementById("btnYesR2");
var btnNoR2 = document.getElementById("btnNoR2");
var btnR3 = document.getElementById("btnR3");

var mR1 = document.getElementById("mR1");
var mR2 = document.getElementById("mR2");
var mR3 = document.getElementById("mR3");

btnYesR1.addEventListener("click", function () {
  mR1.classList.add("hidden");
  mR2.classList.remove("hidden");
});
btnNoR1.addEventListener("click", function () {
  window.location.href = "https://smartmedicareadvantage.com/";
});
btnYesR2.addEventListener("click", function () {
  window.location.href = "https://smartmedicareadvantage.com/";
});
btnNoR2.addEventListener("click", function () {
  mR2.classList.add("hidden");
  mR3.classList.remove("hidden");
});

