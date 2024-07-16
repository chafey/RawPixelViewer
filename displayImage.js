let rawPixelData = new ArrayBuffer(512 * 512 * 2 * 4);

const displayImage= (newRawPixelData, attrs) => {
    if(newRawPixelData) {
        rawPixelData = newRawPixelData;
    }
    console.log(attrs);
    if (attrs) {
      document.getElementById("width").value = attrs.width;
      document.getElementById("height").value = attrs.height;
      document.getElementById("pixelSize").value = attrs.pixelSize;
      document.getElementById("signedness").value = attrs.signed
        ? "Signed"
        : "Unsigned";
      document.getElementById("pixelFormat").value = attrs.pixelFormat;
    }

    const width = parseInt(document.getElementById("width").value);
    const height = parseInt(document.getElementById("height").value);
    const pixelSize = parseInt(document.getElementById("pixelSize").value);
    const signed = document.getElementById("signedness").value === "Signed";
    const pixelFormat = document.getElementById("pixelFormat").value;
    const componentsPerPixel = pixelFormat === "RGB" ? 3 : 1;
    const bytesPerComponent = pixelSize <= 8 ? 1 : 2;

    let pixelData = getPixelData(
      rawPixelData,
      width,
      height,
      bytesPerComponent,
      componentsPerPixel,
      signed
    );

    const minMax = getMinMax(pixelData);

    const wwwc = guessWWWC(width, height, pixelData, minMax, bytesPerComponent);

    const minPixelValue = minMax.min;
    const maxPixelValue = minMax.max;

    const image = {
      imageId: Math.random(),
      minPixelValue: minPixelValue,
      maxPixelValue: maxPixelValue,
      slope: 1.0,
      intercept: 0,
      windowCenter: wwwc.windowCenter,
      windowWidth: wwwc.windowWidth,
      render:
        componentsPerPixel === 3
          ? cornerstone.renderColorImage
          : cornerstone.render,
      getPixelData: () => {
        return pixelData;
      },
      rows: height,
      columns: width,
      height: height,
      width: width,
      color: pixelFormat == "RGB",
      columnPixelSpacing: 0.8984375,
      rowPixelSpacing: 0.8984375,
      sizeInBytes: rawPixelData.byteLength
    };
    cornerstone.displayImage(element, image);
    cornerstone.fitToWindow(element);
    let viewport = cornerstone.getViewport(element);
    viewport.voi.windowWidth = wwwc.windowWidth;
    viewport.voi.windowCenter = wwwc.windowCenter;
    cornerstone.setViewport(element, viewport);
  };