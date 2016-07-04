js-text-overflow
===================


Install
---------------------
```
npm i --save git+http://gitlab.airtake.me:10080/DC3/WebAPIUtils.git
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
