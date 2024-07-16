function load(url) {
  urlPath = url;
  fetch(url)
    .then((response) => {
      return response.arrayBuffer();
    })
    .then((arrayBuffer) => {
      const rawPixelData = arrayBuffer;
      const attrs = extractAttributesFromFileName(url);
      console.log(attrs);
      displayImage(rawPixelData, attrs);
    });
}

const registerSelectInputHandlers = () => {
  document
    .getElementById("imageSelector")
    .addEventListener("change", (e) => {
      load(e.target.options[e.target.selectedIndex].value);
    });
};
