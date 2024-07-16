const getHistogram = (width, height, pixelData, minMax) => {
    const histogram = [];
    const dynamicRange = minMax.max - minMax.min;
    for (let i = 0; i <= dynamicRange; i++) {
      histogram[i] = 0;
    }
    const hOffset = width / 4 ;
    const vOffset = height / 4;
    let numPixels = 0;
    for (let y = vOffset; y < height - vOffset; y++) {
      for (let x = hOffset; x < width - hOffset; x++) {
        const index = y * width + x;
        const pixel = pixelData[index];
        const bin = pixel - minMax.min;
        histogram[bin]++;
        numPixels++;
      }
    }

    let firstBin = 0;
    for (; firstBin < dynamicRange; firstBin++) {
      if (histogram[firstBin]) {
        break;
      }
    }
    let lastBin = dynamicRange;
    for (; lastBin >= 0; lastBin--) {
      if (histogram[lastBin]) {
        break;
      }
    }
    let midBin = 0;
    let pixelCount = 0;
    for (; midBin < dynamicRange; midBin++) {
      pixelCount += histogram[midBin];
      if (pixelCount > numPixels / 2) {
        break;
      }
    }

    return {
      histogram,
      numPixels,
      firstBin,
      lastBin,
      midBin,
    };
  };