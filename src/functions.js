const removeAllChildren = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};
const createAccordion = () => {
  const accordion = document.querySelectorAll('.accordion');
  for (let i = 0; i < accordion.length; i += 1) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  }
};

export {
  removeAllChildren, createAccordion,
};
