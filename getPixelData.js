const getPixelData = (
    rawPixelData,
    width,
    height,
    bytesPerComponent,
    componentsPerPixel,
    signed
  ) => {
    // special case for RGB data
    if (
      componentsPerPixel === 3 &&
      bytesPerComponent === 1 &&
      signed === false
    ) {
      const pixelData = new Uint8Array(width * height * 4);
      const rawPixelDataAsUint8 = new Uint8Array(rawPixelData);
      let pixelDataIndex = 0;
      let rawPixelDataIndex = 0;
      for (let numPixels = 0; numPixels < width * height; numPixels++) {
        pixelData[pixelDataIndex++] =
          rawPixelDataAsUint8[rawPixelDataIndex++];
        pixelData[pixelDataIndex++] =
          rawPixelDataAsUint8[rawPixelDataIndex++];
        pixelData[pixelDataIndex++] =
          rawPixelDataAsUint8[rawPixelDataIndex++];
        pixelData[pixelDataIndex++] = 255; // Alpha channel
      }
      return pixelData;
    }
    if (signed) {
      if (bytesPerComponent === 1) {
        return new Int8Array(rawPixelData);
      } else {
        return new Int16Array(rawPixelData);
      }
    } else {
      if (bytesPerComponent === 1) {
        return new Uint8Array(rawPixelData);
      } else {
        return new Uint16Array(rawPixelData);
      }
    }
  };