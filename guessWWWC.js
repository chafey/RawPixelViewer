const guessWWWC = (width, height, pixelData, minMax, bytesPerComponent) => {
    if(bytesPerComponent === 1) {
      return {
        windowWidth: 256,
        windowCenter: 127
      }
    }
    const histogram = getHistogram(width, height, pixelData, minMax);
    const windowWidth = histogram.lastBin - histogram.firstBin;

    return {
      windowWidth: windowWidth,
      windowCenter: histogram.midBin + minMax.min,
    };
  };
