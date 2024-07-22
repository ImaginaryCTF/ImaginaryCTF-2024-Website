particlesJS.load('particles-js', 'particles.json');

function isValid(hash) {
  if (["#portfolio", "#about", "#contacts"].includes(hash)) return true;
  return false;
}

function hideAll() {
  var items = document.getElementsByClassName("content");
  for (let e of items) {
    e.style.display = "none";
  }
}

function showItem(event) {
  var hash = window.location.hash;
  if (!isValid(hash)) return;
  hash = hash.substring(1);
  hideAll();
  var element = document.getElementById(hash);
  element.style.display = "block";
  fitOnScreen();
}

function fitOnScreen() {
  var elems = document.getElementsByClassName("content");
  for (let elem of elems) {
    if (elem.style.display == "block") {
        var h = elem.offsetHeight ;
        wh = window.innerHeight;
        if (h + 200 > wh) elem.classList.remove("centered");
        else elem.classList.add("centered");
    }
  }
}

function main() {
  showItem();
}

//RIP Internet Explorer
document.addEventListener("DOMContentLoaded", main);
window.addEventListener("hashchange", showItem);
window.addEventListener("resize", fitOnScreen);