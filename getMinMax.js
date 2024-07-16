const getMinMax = (buffer) => {
  const result = {
    min: 65535,
    max: -65535,
  };

  for (let i = 0; i < buffer.length; i++) {
    if (buffer[i] > result.max) {
      result.max = buffer[i];
    }
    if (buffer[i] < result.min) {
      result.min = buffer[i];
    }
  }
  return result;
};
