
"use strict";

const acc = document.getElementsByClassName("accordion");
const panels = document.getElementsByClassName("content-panel");
let i;
let length = acc.length;
let elementBefore;

for (i = 0; i < length; i++) {
  acc[i].addEventListener("click", function () {
    //hideAllAccordions();
    this.classList.toggle("active");
    elementBefore = this.nextElementSibling;
    let panel = this.nextElementSibling;
    let img = this.querySelector("img");
    console.log(img);
    img.classList.toggle("arrowRotate");


    if (panel.style.maxHeight) {

      panel.style.maxHeight = null;
    } else {

      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });


}

function hideAllAccordions() {
  for (i = 0; i < panels.length; i++) {
    let img = acc[i].querySelector("img");
    img.classList.remove("arrowRotate");
    acc[i].classList.toggle("active", false);
    panels[i].style.maxHeight = null;
  }

}