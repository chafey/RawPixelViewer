hookElementChanged = (id) => {
  document.getElementById(id).addEventListener("change", (event) => {
    displayImage();
  });
};

const registerInputEventHandlers = () => {
  hookElementChanged("width");
  hookElementChanged("height");
  hookElementChanged("pixelSize");
  hookElementChanged("signedness");
  hookElementChanged("pixelFormat");
};
