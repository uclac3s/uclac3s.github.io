/*!
 Simple JavaScript Template Engine - v0.1

 Multi-line String support from -- https://github.com/sindresorhus/multiline

 MIT License
 */

(function ($) {
    'use strict';

    // start matching after: comment start block => optional whitespace => newline
    // stop matching before: last newline => optional whitespace => comment end block
    var reCommentContents = /\/\*\s*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//;

    var multiline = function (fn) {
        if (typeof fn !== 'function') {
            throw new TypeError('Expected a function.');
        }

        return reCommentContents.exec(fn.toString())[1];
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = multiline;
    } else {
        $.multiline = multiline;
    }
})(this);


(function () {

    const maxTmplVarCnt = 10;
    const sectionStarts = '[template:';

    function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    }

    function findCount(tmpl) {
        for (var i=0; i<maxTmplVarCnt; i++) {
            if (tmpl.indexOf('{'+ i +'}') == -1) {
                break;
            }
        }
        return i;
    }

    function processTemplate(section) {
        const secs = document.getElementsByClassName(section);
        if (secs.length != 1) {
            throw new Error(section + ' has ' + secs.length + ' matches, not 1.');
        }

        var template = secs[0].outerHTML.toString();
        var maxCnt = findCount(template);
        var parentNode = secs[0].parentNode;
        parentNode.removeChild(secs[0]);

        var cnt = 0;
        var elem = template;

        return function (item) {
            // template replacement
            elem = replaceAll(elem, '{'+ cnt +'}', item);
            cnt += 1;

            if (cnt == maxCnt) {
                // add child node
                var tmpNode = document.createElement('div');
                tmpNode.innerHTML = elem;
                parentNode.appendChild(tmpNode.firstChild);
                // reset to template
                elem = template;
                cnt = 0;
            }
        };
    }

    function nextLine() {
        if (lineIndex < lines.length) {
            lineIndex += 1;
            return lines[lineIndex-1];
        } else {
            return null;
        }
    }

    // read
    var lineIndex = 0;
    var lines = multiline(data).split('\n').filter(function (l) {
        l = l.trim();
        // filter out empty lines and comments
        return l != '' && l[0] != '#';
    }).map(function (l) {
        return l.trim();
    });

    // process
    var func = null;
    while (true) {
        var line = nextLine();
        var controlLine = false;
        if (line == null) {
            break;
        }
        if (line.slice(0, sectionStarts.length) == sectionStarts) {
            func = processTemplate(line.slice(1, line.length-1));
            controlLine = true;
        }
        if (!controlLine) {
            func(line);
        }
    }

})();