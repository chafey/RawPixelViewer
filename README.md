# RawPixelViewer

Web App that lets you view raw pixel data

Access it [here](https://chafey.github.io/RawPixelViewer/index.html)

The app will attemnpt to parse out the image attributes from the dropped file name according to the following scheme:

```
$(IGNORED)-$(COLUMNS)-$(ROWS)-$(BITSALLOCATED)-$(PIXELREPRESENTATION)-$(SAMPLESPERPIXEL).$(IGNORED)
```
$(IGNORED) is ignored so you can have a descriptive name in front of the first dash (-) and any extension you want following the period (.)

The following filenames are treated the same:

1. 512-512-16-0-1
2. CT1-512-512-16-0-1
3. CT1-512-512-16-0-1.raw
4. 512-512-16-0-1.raw

## Possible Future Enhancements

1. Generate DICOM P10 file
2. Add input box for "offset" to skip initial N bytes. 
3. Checkbox for big/little endian
4. Add support for clipboard for pasting pixel data?
5. Auto detect multi-part mime header and set offset automatically?
6. Support for color data > 8 bits allocated
7. Support for other photometric interpretations (YBR)
8. Add checkbox to invert grayscale images
7. Add zoom/pan support
8. Smarter auto detect logic?  (e.g. attempt to detect bits allocated, signedness)
9. More file size to attribute mappings
10. 