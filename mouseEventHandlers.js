const registerMouseEventHandlers = (element) => {
  // add event handlers to mouse move to adjust window/center
  element.addEventListener("mousedown", function (e) {
    let lastX = e.pageX;
    let lastY = e.pageY;

    function mouseMoveHandler(e) {
      const deltaX = e.pageX - lastX;
      const deltaY = e.pageY - lastY;
      lastX = e.pageX;
      lastY = e.pageY;

      let viewport = cornerstone.getViewport(element);
      viewport.voi.windowWidth += deltaX / viewport.scale;
      viewport.voi.windowCenter += deltaY / viewport.scale;
      cornerstone.setViewport(element, viewport);
    }

    function mouseUpHandler() {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    }

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  });
};
