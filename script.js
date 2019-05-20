
// F1 F1bis
var clickCount = 0
document.getElementsByTagName("footer")[0]
.addEventListener("click", function () {
  clickCount ++;
  console.log("clic numéro " + clickCount);
});

// F2
document.querySelector("button.navbar-toggler")
.addEventListener("click", function () {
  document.querySelector("#navbarHeader")
  .classList.toggle("collapse");
});

// F3
let card1 = document.querySelectorAll(".card")[0]
let editButton1 = card1.querySelectorAll("button")[1]
editButton1.addEventListener("click", function () {
  card1.style.color = "red";
});

// F4
let card2 = document.querySelectorAll(".card")[1]
let editButton2 = card2.querySelectorAll("button")[1]
editButton2.addEventListener("click", function () {
  if (card2.style.color === "green") {
    card2.style.color = "";
  } else {
    card2.style.color = "green";
  }
});

// F5
document.querySelector(".navbar")
.addEventListener("dblclick", function () {
  let styleSheet = document.styleSheets[0];
  if (styleSheet.disabled === true) {
    styleSheet.disabled = false;
  } else {
    styleSheet.disabled = true;
  }
});
