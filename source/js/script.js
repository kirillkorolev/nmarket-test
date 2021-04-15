const flat = document.querySelector(`.flat`);
const closeButton = flat.querySelector(`.js-close-button`);

const addHiddenClass = (block, hiddenClass) => {
  if (!block.classList.contains(hiddenClass)) {
    block.classList.add(hiddenClass);
  }
};

closeButton.addEventListener(`click`, () => {
  addHiddenClass(flat, `flat--hidden`);
});
