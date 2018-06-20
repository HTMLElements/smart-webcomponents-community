document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let inputWrapper = document.createElement('div');
    inputWrapper.setAttribute('class', 'search');
    inputWrapper.innerHTML = '<div class="wrap"><input id="searchField" type="text" placeholder="I am searching for" value="" autocomplete="off"></div>';
    document.body.insertBefore(inputWrapper, document.body.childNodes[1]);

    let input = inputWrapper.getElementsByTagName('input')[0];
    let timer = null;
    input.onkeydown = function (event) {
        if (timer != undefined) clearTimeout(timer);
        let search = function () {
            let searchString = input.value;
            let items = document.getElementsByClassName('documentation-option-type-click');
            Array.from(items).forEach(filter);

            function filter(item) {
                let itemText = item.textContent.trim();
                let match = itemText.toUpperCase().indexOf(searchString.toUpperCase()) != -1;
                if (!match) {
                    item.parentNode.style.display = 'none';
                    item.parentNode.nextSibling.nextSibling.style.display = 'none';
                }
                else {
                    item.parentNode.style.display = 'flex';
                    item.parentNode.nextSibling.nextSibling.style.display = 'flex';
                }
            }
        }

        timer = setTimeout(function () {
            search();
        }, 500);
        if (event.keyCode == 13) {
            search();
        }
    };

    let selectedClassItems = document.getElementsByClassName('documentation-option-type-click');
    let selectedClassItemsCount = selectedClassItems.length;

    for (let i = 0; i < selectedClassItemsCount; i++) {
        selectedClassItems[i].onclick = toggleItem;
    }

    function toggleItem(event) {
        let togglerParentId = event.target.id;
        let itemNumber = togglerParentId.substring(14);
        let item = document.getElementsByClassName('property-content')[itemNumber];

        if (!item) {
            return;
        }
        if (item.style.display !== 'block') {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    }

    let fc_cmt = 'fc-cmt';
    let fc_html = 'fc-html';
    let fc_quot = 'fc-quot';
    let fc_kwds = 'fc-kwds';

    function formatCode(precode) {
        let textlines = precode.split(/\r|\n/);
        let linecount = 1;
        let newcode = '';
        let keywords = 'debugger|export|function|return|null|for|set|undefined|var|let|document|with|true|false|switch|this|case';
        for (let b = 0; b < textlines.length; b++) {
            let code = textlines[b];
            code = code.replace(/\f|\n/g, '');
            if (code.indexOf('if (') == -1 && code.indexOf('for (') == -1) {
                code = code.replace(/&/g, '&amp;');
                code = code.replace(/</g, '&lt;');
                code = code.replace(/>/g, '&gt;');
            }
            code = code.replace(/('.+')/g, '<span class="' + fc_quot + '">$1</span>');
            code = code.replace(/('.+')/g, '<span class="' + fc_quot + '">$1</span>');
            code = code.replace(/&lt;(\S.*?)&gt;/g, '<span class="' + fc_html + '">&lt;$1&gt;</span>');
            code = code.replace(/&lt;!--/g, '<span class="' + fc_cmt + '">&lt;!--');
            code = code.replace(/--&gt;/g, '--&gt;</span>');

            code = colourKeywords(keywords, code);
            if (code.indexOf('//') >= 0) {
                code = '<span class="code-slashes">' + code + '</span>';
            }

            newcode += code + '<div/>';
            newcode = newcode.replace(/"{/g, '\'{');
            newcode = newcode.replace(/}"/g, '}\'');
            newcode = newcode.replace(/"\[/g, '\'[');
            newcode = newcode.replace(/\]"/g, ']\'');
            newcode = newcode.replace(/&amp;quot;/g, '"');
            newcode = newcode.replace(/=""/g, '');
            newcode = newcode.replace(/\=\'\[\"\s/g, '\=\"\[\'');
            newcode = newcode.replace(/\]\'\</g, '\]\"\<');
            linecount++;
        }

        return '<code class="code new-code">' + newcode + '</code>';
    }

    function colourKeywords(keywords, codeline) {
        let wordre = new RegExp('(' + keywords + ') ', 'gi');
        return codeline.replace(wordre, '<span class="' + fc_kwds + '">$1 </span>');
    }

    let pres = document.getElementsByTagName('PRE');
    for (let a = 0; a < pres.length; a++) {
        let elem = pres[a];
        if (elem.className.toLowerCase() == 'code') {
            elem.innerHTML = formatCode(elem.innerHTML);
        }
    }
});