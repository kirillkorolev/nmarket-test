"use strict";

var flat = document.querySelector(".flat");
var closeButton = flat.querySelector(".js-close-button");

var addHiddenClass = function addHiddenClass(block, hiddenClass) {
  if (!block.classList.contains(hiddenClass)) {
    block.classList.add(hiddenClass);
  }
};

closeButton.addEventListener("click", function () {
  addHiddenClass(flat, "flat--hidden");
});