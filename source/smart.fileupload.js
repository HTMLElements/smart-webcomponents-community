
/* Smart HTML Elements v4.1.0 (2019-Aug) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-file-upload",class extends Smart.BaseElement{static get properties(){return{accept:{value:null,type:"string?"},appendTo:{value:null,type:"any"},autoUpload:{value:!1,type:"boolean"},directory:{value:!1,type:"boolean"},dropZone:{value:null,type:"any"},hideFooter:{value:!1,type:"boolean"},itemTemplate:{value:null,type:"any"},messages:{value:{en:{browse:"Browse",uploadFile:"Upload File",cancelFile:"Cancel File",pauseFile:"Pause File",uploadAll:"Upload All",cancelAll:"Cancel All",pauseAll:"Pause All",totalFiles:"Total files: ",connectionError:"{{elementType}}: File Upload requires connection to the server.",wrongItemIndex:"{{elementType}}: There is no file with such an index in the list of uploaded files.",tooLongFileName:"{{elementType}}: File name is too long."}},type:"object",extend:!0},multiple:{value:!1,type:"boolean"},name:{value:"",type:"string"},responseHandler:{value:null,type:"function?",reflectToAttribute:!1},setHeaders:{value:null,type:"function?",reflectToAttribute:!1},showProgress:{value:!1,type:"boolean"},validateFile:{value:null,type:"function?",reflectToAttribute:!1},uploadUrl:{value:"",type:"string",reflectToAttribute:!1}}}static get listeners(){return{"browseButton.click":"browse","browseInput.change":"_browseInputChangeHandler","selectedFiles.click":"_selectedFilesClickHandler","uploadAllButton.click":"uploadAll","cancelAllButton.click":"cancelAll","pauseAllButton.click":"pauseAll","dropZone.dragenter":"_dropZoneHandler","dropZone.dragleave":"_dropZoneHandler","dropZone.dragover":"_dropZoneHandler","dropZone.drop":"_dropZoneHandler",resize:"_handleComponentsByAvailableHeight"}}static get requires(){return{"Smart.Button":"smart.button.js","Smart.ProgressBar":"smart.progressbar.js"}}template(){return`<div id="container">
                    <div id="fileUploadHeader" class ="smart-file-upload-header">
                        <smart-button class ="smart-browse-button" id="browseButton" disabled="[[disabled]]" theme="[[theme]]"></smart-button>
                        <input type="file" class ="smart-browse-input" id="browseInput" name="[[name]]" animation="[[animation]]" disabled="[[disabled]]" unfocusable="[[unfocusable]]" multiple="[[multiple]]" webkitdirectory="[[directory]]" mozdirectory="[[directory]]" />
                    </div>
                    <div id="fileUploadContainer" class ="smart-file-upload-container">
                        <div id="dropZone" class ="smart-drop-zone"></div>
                        <div id="selectedFiles" class ="smart-selected-files"></div>
                    </div>
                    <div id="totalFiles" class ="smart-total-files smart-hidden">Total flies: 0</div>
                    <div id="fileUploadFooter" class ="smart-file-upload-footer smart-hidden">
                        <smart-button class ="smart-upload-all-button success" id="uploadAllButton" animation="[[animation]]" disabled="[[disabled]]" unfocusable="[[unfocusable]]"" theme="[[theme]]"></smart-button>
                        <smart-button class ="smart-cancel-all-button error" id="cancelAllButton" animation="[[animation]]" disabled="[[disabled]]" unfocusable="[[unfocusable]]" theme="[[theme]]"></smart-button>
                        <smart-button class ="smart-pause-all-button primary" id="pauseAllButton" animation="[[animation]]" disabled="[[disabled]]" unfocusable="[[unfocusable]]" theme="[[theme]]"></smart-button>
                    </div>
                </div>`}propertyChangedHandler(a,b,c){const d=this;super.propertyChangedHandler(a,b,c);"accept"===a?d.$.browseInput.accept=c:"dropZone"===a||"appendTo"===a?d._handleContainers():"messages"===a||"locale"===a?d._updateTextValues():"multiple"===a?(d.$.browseButton.disabled=!!(!d.multiple&&0<d._selectedFiles.length||d.disabled),!c&&1<d._selectedFiles.length&&(d._selectedFiles.splice(1),d._renderSelectedFiles())):"itemTemplate"===a?0<d._items.length&&(d._renderSelectedFiles(),d._handleComponentsByAvailableHeight()):void 0}attached(){super.attached();const a=this;a._handleContainers()}detached(){super.detached();const a=this;a.$.fileUploadContainer.contains(a.$.dropZone)||a.$.fileUploadContainer.insertBefore(a.$.dropZone,a.$.fileUploadContainer.firstChild),a.$.fileUploadContainer.contains(a.$.selectedFiles)||a.$.fileUploadContainer.appendChild(a.$.selectedFiles)}ready(){super.ready();const a=this;a._setInitialValues(),a._updateTextValues(),a._handleContainers(),a._handleComponentsByAvailableHeight()}browse(){const a=this;a.disabled||!a.multiple&&0<a._selectedFiles.length||a.$.browseInput.click()}cancelAll(){const a=this;if(!(a.disabled||0===a._items.length)){for(let b=a._items.length-1;0<=b;b--)a.cancelFile(a._items[b].index);a.$.browseButton.disabled=!!(!a.multiple&&0<a._selectedFiles.length||a.disabled)}}cancelFile(a){const b=this;if(!("number"!=typeof a||b.disabled||0===b._selectedFiles.length)){const c=b._getFileItem(a,!0);if(!c)return void b.error(b.localize("wrongItemIndex",{elementType:b.nodeName.toLowerCase()}));const d=b._items.indexOf(c);b.$.selectedFiles.removeChild(c),c&&c.xhr&&c.xhr.abort(),b._selectedFiles.splice(d,1),b._items.splice(d,1),b.$.fireEvent("uploadCanceled",{filename:c.file.name,type:c.file.type,size:c.file.size,index:c.index}),b.$.browseButton.disabled=!!(!b.multiple&&0<b._selectedFiles.length||b.disabled),0===b._selectedFiles.length&&b.$.fileUploadFooter.classList.add("smart-hidden"),b._handleComponentsByAvailableHeight()}}pauseAll(){const a=this;if(!(a.disabled||0===a._items.length))for(let b,c=a._items.length-1;0<=c;c--)b=a._items[c],b.xhr&&b.xhr.abort()}pauseFile(a){const b=this;if(!("number"!=typeof a&&"string"!=typeof a||b.disabled||0===b._items.length)){const c=b._getFileItem(a,!0);return c?void(c.classList.remove("smart-uploading-start"),c&&c.xhr&&c.xhr.abort(),b.$.fireEvent("uploadPaused",{filename:c.file.name,type:c.file.type,size:c.file.size,index:c.index})):void b.error(b.localize("wrongItemIndex",{elementType:b.nodeName.toLowerCase()}))}}uploadAll(){const a=this;if(!(a.disabled||0===a._items.length))for(let b=a._items.length-1;0<=b;b--)a._items[b].uploading||a.uploadFile(a._items[b].index)}uploadFile(a){const b=this;let c=!1;if("number"!=typeof a||b.disabled||0===b._selectedFiles.length)return;const d=b._getFileItem(a,!0);if(!d)return;let e=new FormData,f=b.showProgress?d.getElementsByTagName("smart-progress-bar")[0]:null,g=d.file;d.classList.remove("smart-pause","smart-error"),d.classList.add("smart-uploading-start"),e.append("userfile[]",g);let h=new XMLHttpRequest;h.open("POST",b.uploadUrl),b.setHeaders&&"function"==typeof b.setHeaders&&b.setHeaders(h,g),b.$.fireEvent("uploadStarted",{filename:d.file.name,type:d.file.type,size:d.file.size,index:d.index}),h.upload.onprogress=function(a){c||(c=!0,d.classList.remove("smart-uploading-start"),d.classList.add("smart-uploading"),d.uploading=!0,d.xhr=h),f&&(f.value=Math.round(100*(a.loaded/a.total))),d.classList.remove("smart-pause","smart-error")},h.onabort=function(){d.classList.remove("smart-uploading-start","smart-uploading"),d.classList.add("smart-pause"),d.addEventListener("animationend",function(){d.classList.remove("smart-pause","smart-error")})},h.onerror=function(){d.classList.remove("smart-uploading-start","smart-uploading"),d.classList.add("smart-error"),d.addEventListener("animationend",function(){d.classList.remove("smart-pause","smart-error")})},h.onload=function(){if(c=!1,d.classList.remove("smart-uploading-start","smart-uploading"),200<=h.status&&299>=h.status){let a=b._items.indexOf(d);b.$.selectedFiles.removeChild(d),b._selectedFiles.splice(b._selectedFiles.indexOf(g),1),b._items.splice(a,1),b.$.browseButton.disabled=!!(!b.multiple&&0<b._selectedFiles.length||b.disabled),b.$.fireEvent("uploadCompleted",{filename:d.file.name,type:d.file.type,size:d.file.size,status:h.status,index:d.index}),0===b._selectedFiles.length&&b.$.fileUploadFooter.classList.add("smart-hidden")}else d.classList.add("smart-error"),d.classList.remove("smart-uploading"),b.$.fireEvent("uploadError",{filename:d.file.name,type:d.file.type,size:d.file.size,status:h.status,index:d.index})},h.onreadystatechange=function(){b.responseHandler&&"function"==typeof b.responseHandler&&b.responseHandler(h)},h.send(e)}_selectedFilesClickHandler(a){const b=this;if(!b.disabled){const c=a.target,d=c.closest(".smart-item-upload-button"),e=c.closest(".smart-item-cancel-button"),f=c.closest(".smart-item-pause-button"),g=c.closest(".smart-file");d?b.uploadFile(g.index):e?b.cancelFile(g.index):f&&b.pauseFile(g.index)}}_browseInputChangeHandler(){const a=this,b=a._filterNewFiles(Array.from(a.$.browseInput.files));let c=[];a.disabled||0===b.length||(c=a.validateFile&&"function"==typeof a.validateFile?b.filter(b=>!!a.validateFile(b)||(a.$.fireEvent("validationError",{filename:b.name,type:b.type,size:b.size}),!1)):b,a._selectedFiles=a._selectedFiles.concat(c),0===a._selectedFiles.length||(a._renderSelectedFiles(c),a.$.browseButton.disabled=!!(!a.multiple&&0<a._selectedFiles.length||a.disabled),a.$.browseInput.value="",a.autoUpload&&a.uploadAll()))}_defaultItemTemplate(a){const b=this,c=b.localize("uploadFile"),d=b.localize("cancelFile"),e=b.localize("pauseFile");return`<span class ="smart-item-name">${a}</span>
                <span class ="smart-item-upload-button" title="${c}"></span>
                <span class ="smart-item-cancel-button" title="${d}"></span>
                <span class ="smart-item-pause-button" title="${e}"></span>
                <smart-progress-bar></smart-progress-bar>`}_dropZoneHandler(a){const b=this;if(a.preventDefault(),a.stopPropagation(),!b.disabled){if("dragenter"===a.type||"dragleave"===a.type)return void("dragenter"===a.type?b.$.dropZone.classList.add("smart-drag-over"):b.$.dropZone.classList.remove("smart-drag-over"));if("drop"===a.type){if(b.$.dropZone.classList.remove("smart-drag-over"),!b.multiple&&0<b._selectedFiles.length)return;if(a.dataTransfer&&a.dataTransfer.files&&a.dataTransfer.files.length){const c=b._filterNewFiles(Array.from(a.dataTransfer.files));if(0===c.length)return;b.multiple||c.splice(1),b._selectedFiles=b._selectedFiles.concat(c),b._renderSelectedFiles(c)}b.$.browseButton.disabled=!!(!b.multiple&&0<b._selectedFiles.length||b.disabled)}}}_filterNewFiles(a){const b=this;let c=[];for(let d,e=0;e<a.length;e++){d=!0;for(let c=0;c<b._selectedFiles.length;c++){const f=b._selectedFiles[c],g=a[e];if(g.name===f.name&&g.size===f.size&&g.type===f.type&&g.lastModified===f.lastModified){d=!1;break}}d&&c.push(a[e])}return c}_getFileItem(a,b){const c=this;let d=null;if(a&&("string"==typeof a||"number"==typeof a)){if(!c._items||0===c._items.length)return null;for(let e=0;e<c._items.length;e++){const f=c._items[e];(b&&f.index===parseInt(a)||f.file.name===a)&&(d=f)}return d}}_handleContainers(){const a=this,b=a._validateDOMElement(a.dropZone),c=a._validateDOMElement(a.appendTo);b?b.appendChild(a.$.dropZone):a.$.fileUploadContainer.insertBefore(a.$.dropZone,a.$.fileUploadContainer.firstChild),c?c.appendChild(a.$.selectedFiles):a.$.fileUploadContainer.appendChild(a.$.selectedFiles)}_handleItemTemplate(a){const b=this;let c=b.itemTemplate;if(!("content"in document.createElement("template")))return void b.error(b.localize("htmlTemplateNotSuported",{elementType:b.nodeName.toLowerCase()}));if(!c)return b._defaultItemTemplate(a);if("string"==typeof c&&(c=document.getElementById(c)),null===c||!("content"in c))return void b.error(b.localize("invalidTemplate",{elementType:b.nodeName.toLowerCase(),property:"template"}));const d=c.innerHTML,e=/{{\w+}}/g;return d.replace(e,a)}_renderSelectedFiles(a){const b=this,c=document.createDocumentFragment(),d=a||b._selectedFiles;a||(b._items=[],b.$.selectedFiles.innerHTML="");for(let e=0;e<d.length;e++){const a=b.directory?d[e].webkitRelativePath:d[e].name,f=document.createElement("div");b._incrementIndex++,f.className="smart-file",f.index=b._incrementIndex,f.setAttribute("item-id",b._incrementIndex),f.innerHTML=b.itemTemplate?b._handleItemTemplate(a):b._defaultItemTemplate(a),f.file=d[e],f.uploading=!1,f.xhr=null,c.appendChild(f),b._items.push(f),b.$.fireEvent("fileSelected",{filename:d[e].name,type:d[e].type,size:d[e].size,index:f.index})}b.$.selectedFiles.appendChild(c),b.$.fileUploadFooter.classList.remove("smart-hidden"),b._handleComponentsByAvailableHeight()}_setInitialValues(){const a=this;a.$.browseInput.accept=a.accept,a._selectedFiles=[],a._items=[],a._incrementIndex=0}_updateTextValues(){const a=this,b=["browse","uploadAll","cancelAll","pauseAll"];for(let c=0;c<b.length;c++){const d=b[c];a.$[d+"Button"].innerHTML=a.localize(d)}for(let b=0;b<a._selectedFiles.length;b++){const c=a._items[b];c.querySelector(".smart-item-upload-button").title=a.localize("uploadFile"),c.querySelector(".smart-item-cancel-button").title=a.localize("cancelFile"),c.querySelector(".smart-item-pause-button").title=a.localize("pauseFile")}}_validateDOMElement(a){if(a)return"string"==typeof a?document.getElementById(a):a instanceof HTMLElement?a:void 0}_handleComponentsByAvailableHeight(){const a=this;if(a._calculateAvailableContainerHeight(),!(a._elementsAutoHeight>a.offsetHeight))""===a.dropZone&&a._elementsAutoHeight<a.offsetHeight&&(a.$.container.classList.remove("smart-overflow"),a._containerOverflows=!1);else if(a.$.container.classList.add("smart-overflow"),a._containerOverflows=!0,a._rowHeight){const b=parseInt(a._availableHeight/a._rowHeight);for(let c=0;c<a._items.length;c++){const d=a._items[c];c<b?d.classList.remove("smart-hidden"):d.classList.add("smart-hidden")}a._items.length>b?(a.$.totalFiles.innerHTML=a.localize("totalFiles")+a._items.length,a.$.totalFiles.classList.remove("smart-hidden")):a.$.totalFiles.classList.add("smart-hidden")}}_calculateAvailableContainerHeight(){const a=this,b=window.getComputedStyle(a.$.fileUploadContainer,null),c=parseInt(b.getPropertyValue("margin-top"))+parseInt(b.getPropertyValue("margin-bottom"))+parseInt(b.getPropertyValue("padding-top"))+parseInt(b.getPropertyValue("padding-bottom")),d=a.$.container.querySelector(".smart-file"),e=a.$.fileUploadHeader.offsetHeight,f=a.$.fileUploadFooter.offsetHeight,g=a.style.height;let h=0;d&&(a._rowHeight=d.offsetHeight),a.style.height="auto",a._containerOverflows&&a.$.container.classList.remove("smart-overflow"),a._elementsAutoHeight=a.offsetHeight,a.style.height=g,a._containerOverflows&&a.$.container.classList.add("smart-overflow"),-1<a.$.totalFiles.classList.contains("smart-hidden")&&(a.$.totalFiles.classList.remove("smart-hidden"),h=a.$.totalFiles.offsetHeight,a.$.totalFiles.classList.add("smart-hidden")),a._availableHeight=a.offsetHeight-(e+f)-c-h}});