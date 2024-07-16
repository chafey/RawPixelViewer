function extractAttributesFromFileName(fileName) {
    const firstDash = fileName.indexOf('-');
    if(firstDash) {
        fileName = fileName.substr(firstDash + 1);
    }
    const lastPeriod = fileName.lastIndexOf('.');
    if(lastPeriod) {
        fileName = fileName.substr(0, lastPeriod);
    }
    const pieces = fileName.split('-');
    if(pieces.length < 5) {
        return;
    }

    return {
        width: parseInt(pieces[0]),
        height: parseInt(pieces[1]),
        pixelSize: parseInt(pieces[2]),
        signed: parseInt(pieces[3]),
        pixelFormat: parseInt(pieces[4]) === 3 ? "RGB" : "Grayscale",
    }

}