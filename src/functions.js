const removeAllChildren = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};
const createAccordion = () => {
  const accordion = document.querySelectorAll('.accordion');
  const menuDropDown = document.querySelector('.menu-dropdown');
  const menuUp = document.querySelector('.menu-up');
  for (let i = 0; i < accordion.length; i += 1) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        menuDropDown.classList.remove('no-display');
        menuUp.classList.add('no-display');
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
        menuUp.classList.remove('no-display');
        menuDropDown.classList.add('no-display');
      }
    });
  }
};

export {
  removeAllChildren, createAccordion,
};
