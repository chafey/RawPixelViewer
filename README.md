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
2. CT1-512-512-16-0-1.raw
2. 512-512-16-0-1.raw
