js-text-overflow
===================


Install
---------------------
```
npm i --save git+https://github.com/xiaoDC/js-text-overflow.git
```



Build
---------------------
```
npm run build
```



Usage
-------------
``` coffeescript

listOfLinkNeedTextOverflow = document.querySelectorAll '.js-textOverflow'
clamp = require('js-text-overflow')(window, document);


for el in listOfLinkNeedTextOverflow
  clamp el, 2

```
