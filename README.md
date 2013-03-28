fileStorage
================================

fileStorage is a cross browser api for dynamic file storage. It detects the storage capabilities of the browser and picks the best available option. 

Storage options are:

* Filesystem API (Chrome)
* indexedDB (Chrome, Firefox, IE)
* WebSQL (Safari/Safari Mobile)
* Ram (Works offline, but is temporary)
* None (just a pre-loader)

When possible, Web Workers are used to handle loading and saving the files.

Not yet compatible with older browsers.

Getting Started
-------------------------

Create a new store, letting it choose the best option:

```javascript
store = new fileStorage.storage();

store.batch(["/index.html", "/imgs/logo.jpg"], function() {
  console.log("complete")
});
```

Retrieve a url from the store:

```javascript
var iframe = document.querySelector('iframe');
store.get("/index.html", function(url) {
  iframe.src = url;
});
```

Links
-------------------------

Filesystem api links are relative, so no need to replace them.
For other methods you will need to replace all of the links in a document with their stored url.

```javascript
var srcs, resources;

if(store.getStorageType() == "filesystem") return;

srcs = this.doc.querySelectorAll('[src]');
resources = Array.prototype.slice.call(srcs);

resources.forEach(function(link){
  var src = link.getAttribute("src");
    
  store.get(src, function(url){
    link.setAttribute("src", url);
  });
  
});
```