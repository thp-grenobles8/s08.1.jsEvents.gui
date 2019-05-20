

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

// F6
document.querySelectorAll(".card")
.forEach(function (card) {
  card.querySelector("button")
  .addEventListener("mouseover", function () {
    card.querySelector("p")
    .classList.toggle("collapse");
    let img = card.querySelector("img");
    if (img.style.width === "20%") {
      img.style.width = "100%";
    } else {
      img.style.width = "20%";
    }
  });
});

// F7
document.querySelectorAll("section a")[1]
.addEventListener("click", function () {
  let row = document.querySelector(".album .row")
  row.insertBefore(
    row.lastElementChild,
    row.firstChild
  );
})

// F8
document.querySelectorAll("section a")[0]
.addEventListener("click", function (ev) {
  ev.preventDefault(); // pour le lien
  let row = document.querySelector(".album .row")
  row.appendChild(
    row.firstElementChild
  );
})

// F9
document.querySelector(".navbar-brand")
.addEventListener("keypress", function (ev) {
  let body = document.body
  switch (ev.key) {
    case "a":
      body.classList = ""
      body.classList.add("col-4")
      break;
    case "y":
      body.classList = ""
      body.classList.add("col-4","offset-md-4")
      break;
    case "p":
      body.classList = ""
      body.classList.add("col-4","offset-md-8")
      break;
    case "b":
      body.classList = ""
      break;
  }
})
