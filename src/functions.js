const removeAllChildren = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

export {
  removeAllChildren,
};
