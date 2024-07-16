const guessAttributesFromFileSize = (fileSize) => {
    if (fileSize == 524288) {
      // CT or MR
      return {
        width: 512,
        height: 512,
        pixelSize: 16,
        signed: true,
        pixelFormat: "Grayscale",
      };
    } else if (fileSize === 2097152) {
      // XA
      return {
        width: 1024,
        height: 1024,
        pixelSize: 16,
        signed: true,
        pixelFormat: "Grayscale",
      };
    } else if (fileSize === 921600) {
      // US
      return {
        width: 640,
        height: 480,
        pixelSize: 8,
        signed: false,
        pixelFormat: "RGB",
      };
    }
  };