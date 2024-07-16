

// this function gets called once the user drops the file onto the div
function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  // Get the FileList object that contains the list of files that were dropped
  var files = evt.dataTransfer.files;

  // this UI is only built for a single file so just dump the first one
  var file = files[0];
  console.log(file);

  var fileReader = new FileReader();
  fileReader.onload = function (e) {
    const rawPixelData = e.target.result;
    let attrs = extractAttributesFromFileName(file.name);
    if(!attrs) {
        attrs = guessAttributesFromFileSize(file.size);
    }
    displayImage(rawPixelData, attrs);
    document.getElementById('imageSelector').value = "";
  };
  fileReader.readAsArrayBuffer(file);
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = "copy"; // Explicitly show this is a copy.
}

const registerFileDropEventHandlers = (element) => {
  // Setup the dnd listeners.
  element.addEventListener("dragover", handleDragOver, false);
  element.addEventListener("drop", handleFileSelect, false);
};
