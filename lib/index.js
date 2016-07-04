
/**
  * TextOverflowClamp.js
  *
  * Updated 2013-05-09 to remove jQuery dependancy.
  * But be careful with webfonts!
 */
var index;

index = function(win, doc) {
  var ce, clamp, ctn, line, lineCount, lineStart, lineText, lineWidth, measure, text, wasNewLine, wordStart;
  clamp = void 0;
  measure = void 0;
  text = void 0;
  lineWidth = void 0;
  lineStart = void 0;
  lineCount = void 0;
  wordStart = void 0;
  line = void 0;
  lineText = void 0;
  wasNewLine = void 0;
  ce = doc.createElement.bind(doc);
  ctn = doc.createTextNode.bind(doc);
  measure = ce('span');
  (function(s) {
    s.position = 'absolute';
    s.whiteSpace = 'pre';
    s.visibility = 'hidden';
  })(measure.style);
  clamp = function(el, lineClamp) {
    if (!el.ownerDocument || !el.ownerDocument === doc) {
      return;
    }
    lineStart = wordStart = 0;
    lineCount = 1;
    wasNewLine = false;
    lineWidth = el.clientWidth;
    text = (el.textContent || el.innerText).replace(/\n/g, ' ');
    while (el.firstChild !== null) {
      el.removeChild(el.firstChild);
    }
    el.appendChild(measure);
    text.replace(RegExp('', 'g'), function(m, pos) {
      if (lineCount === lineClamp) {
        return;
      }
      measure.appendChild(ctn(text.substr(lineStart, pos - lineStart)));
      if (lineWidth < measure.clientWidth) {
        if (wasNewLine) {
          lineText = text.substr(lineStart, pos + 1 - lineStart);
          lineStart = pos + 1;
        } else {
          lineText = text.substr(lineStart, wordStart - lineStart);
          lineStart = wordStart;
        }
        line = ce('span');
        line.appendChild(ctn(lineText));
        el.appendChild(line);
        wasNewLine = true;
        lineCount++;
      } else {
        wasNewLine = false;
      }
      wordStart = pos + 1;
      measure.removeChild(measure.firstChild);
    });
    el.removeChild(measure);
    line = ce('span');
    (function(s) {
      s.display = 'block';
      s.overflow = 'hidden';
      s.textOverflow = 'ellipsis';
      s.whiteSpace = 'nowrap';
      s.width = '100%';
    })(line.style);
    line.appendChild(ctn(text.substr(lineStart)));
    el.appendChild(line);
  };
  win.clamp = clamp;
};

if (typeof self !== "undefined" && self !== null) {
  module.exports = index;
} else {
  module.exports = function() {};
}
