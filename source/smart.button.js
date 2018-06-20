
/* Smart HTML Elements v1.1.0 (2018-June) 
Copyright (c) 2011-2018 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-button",class extends Smart.ContentElement{static get properties(){return{value:{type:"string"},name:{type:"string"},type:{type:"string"},clickMode:{allowedValues:["hover","press","release","pressAndRelease"],type:"string",value:"release"}}}scopedStyle(){const a=super.scopedStyle();return a+`
                :host {
                    display: inline-block;
                }
                :host-context(.smart-button-large) #button {
                    padding: 10px 16px;
                    font-size: 18px;
                    line-height: 1.3333333;
                }
                :host-context(.smart-button-small) #button {
                    padding: 5px 10px;
                    font-size: 12px;
                    line-height: 1.5;
                }
                :host-context(.smart-button-very-small) #button {
                    padding: 1px 5px;
                    font-size: 12px;
                    line-height: 1.5;
                }
                :host-context(.smart-button) #button {
                    padding: 6px 12px;
                    margin-bottom: 0;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 1.42857143;
                }
                #button {
                    padding: 1px 2px 1px 2px;
                    text-align: center;
                    vertical-align: central;
                    color: var(--smart-color);
                    border: 1px solid var(--smart-border-color);
                    background: var(--smart-background-color, blue);
                    cursor: pointer;
                }
                #button:focus {
                    color: var(--smart-focus-color);
                    border-color: var(--smart-focus-border-color);
                    background-color: var(--smart-focus-background-color);
                }
                #button.hover {
                  color: var(--smart-hover-color);
                  border-color: var(--smart-hover-border-color);
                  background-color: var(--smart-hover-background-color);
                  transition: background-color 100ms linear;
                }
                #button:active,
                #button.active {
                    color: var(--smart-active-color);
                    border-color: var(--smart-active-border-color);
                    background-color: var(--smart-active-background-color);
                    transition: background-color 100ms linear;
                }
                #button[disabled] {
                    color: var(--smart-disabled-color);
                    border-color: var(--smart-disabled-border-color);
                    background-color: var(--smart-disabled-background-color);
                    cursor: default;
                }
            `}template(){return"<button class='smart-button' inner-h-t-m-l='[[innerHTML]]' id='button' type='[[type]]' name='[[name]]' value='[[value]]' disabled='[[disabled]]' role='button'></button>"}static get listeners(){return{"button.down":"_mouseDownHandler","button.mouseenter":"_mouseEnterHandler","button.mouseleave":"_mouseLeaveHandler","button.touchend":"_touchEndHandler","button.click":"_clickHandler"}}_clickHandler(a){const b=this;("release"!==b.clickMode&&"pressAndRelease"!==b.clickMode||b.readonly)&&(a.preventDefault(),a.stopPropagation())}_mouseDownHandler(a){const b=this;if(!b.disabled&&(a.originalEvent.stopPropagation(),-1<b.theme.indexOf("material")&&Smart.Utilities.Animation.Ripple.animate(b,a.pageX,a.pageY),("press"===b.clickMode||"pressAndRelease"===b.clickMode)&&!b.readonly)){const c="buttons"in a?a.buttons:a.which;b.$.fireEvent("click",{buttons:c,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY})}}_mouseEnterHandler(a){const b=this;if(!b.readonly&&(b.$button.addClass("hover"),"hover"===b.clickMode)){const c="buttons"in a?a.buttons:a.which;b.$.fireEvent("click",{buttons:c,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY})}}_touchEndHandler(){const a=this;setTimeout(function(){a.$button.removeClass("hover")},300)}_mouseLeaveHandler(){const a=this;a.$button.removeClass("hover")}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;"disabled"===a?(d._setFocusable(),d.$button&&d.$button.removeClass("hover"),d instanceof Smart.RepeatButton&&d._stopRepeat()):"unfocusable"==a&&d._setFocusable()}_setFocusable(){const a=this,b=a.$.button?a.$.button:a;return a.disabled||a.unfocusable?(b.removeAttribute("tabindex"),void(b.tabIndex=-1)):void(b.tabIndex=0<a.tabIndex?a.tabIndex:0)}ready(){const a=this;super.ready(),a._setFocusable()}}),Smart("smart-repeat-button",class extends Smart.Button{static get properties(){return{delay:{value:50,type:"number"},initialDelay:{value:150,type:"number"}}}static get listeners(){return{"button.mousedown":"_startRepeat","button.mouseenter":"_updateInBoundsFlag","button.mouseleave":"_updateInBoundsFlag","document.mouseup":"_stopRepeat"}}_clickHandler(a){const b=this;("release"!==b.clickMode||b.preventDefaultClick||b.readonly||b.disabled)&&(a.preventDefault(),a.stopPropagation(),b.preventDefaultClick=!1)}_updateInBoundsFlag(a){const b=this;b._isPointerInBounds=!0,"mouseleave"===a.type&&(b._isPointerInBounds=!1);const c="buttons"in a?a.buttons:a.which;1!==c&&b._stopRepeat()}_startRepeat(a){const b=this;b._initialTimer||b.readonly||(b._initialTimer=setTimeout(function(){b._repeatTimer=setInterval(()=>{if(b._isPointerInBounds){const c="buttons"in a?a.buttons:a.which;b.$.fireEvent("click",{buttons:c,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY}),b.preventDefaultClick=!0}},b.delay)},b.initialDelay))}_stopRepeat(){const a=this;a.readonly||(a._repeatTimer&&(clearInterval(a._repeatTimer),a._repeatTimer=null),a._initialTimer&&(clearTimeout(a._initialTimer),a._initialTimer=null))}}),Smart("smart-toggle-button",class extends Smart.Button{static get properties(){return{checked:{value:!1,type:"boolean?"},falseContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminateContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminate:{value:!1,type:"boolean"},trueContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminateTemplate:{value:null,type:"any"},trueTemplate:{value:null,type:"any"},falseTemplate:{value:null,type:"any"}}}static get listeners(){return{keydown:"_keyHandler",keyup:"_keyHandler",dragstart:"_dragStartHandler","button.click":"_buttonClickHandler","button.mouseenter":"_buttonMouseEnterHandler","document.up":"_documentUpHandler"}}ready(){super.ready()}_buttonClickHandler(){}_buttonMouseEnterHandler(){const a=this;a.disabled||a.readonly||"hover"!==a.clickMode||(a._changeCheckState("pointer"),a.focus(),a._updateHidenInputNameAndValue())}_documentUpHandler(){const a=this;a._pressed&&(a._pressed=!1,a.disabled||a.readonly||"press"===a.clickMode||(a._changeCheckState("pointer"),a.focus(),a._updateHidenInputNameAndValue()))}_mouseDownHandler(a){const b=this;b.disabled||b.readonly||(-1<b.theme.indexOf("material")&&Smart.Utilities.Animation.Ripple.animate(b,a.pageX,a.pageY),b._pressed=!0,("press"===b.clickMode||"pressAndRelease"===b.clickMode)&&(b._changeCheckState("pointer"),b.$.fireEvent("click"),b._updateHidenInputNameAndValue()),"press"===b.clickMode&&(a.preventDefault(),a.stopPropagation()))}_dragStartHandler(a){a.preventDefault()}_keyHandler(a){const b=this;if(!0!==b.disabled&&!b.readonly&&32===a.keyCode){if("keydown"===a.type)return void a.preventDefault();b._changeCheckState("keyboard"),b._updateHidenInputNameAndValue()}}_changeCheckState(a){const b=this;let c=null;null===b.checked?b.checked=!0:(c=b.checked,b.checked=!b.checked),b._handleTextSelection(),b.$.fireEvent("change",{value:b.checked,oldValue:c,changeType:a})}_handleTextSelection(){const a=this;a.$.addClass("smart-unselectable"),a.timer&&clearTimeout(a.timer),a.timer=setTimeout(()=>a.$.removeClass("smart-unselectable"),500)}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;"checked"===a&&d.$.fireEvent("change",{value:c,oldValue:b,changeType:"api"});"trueTemplate"===a?d._handleTemplate(!0):"falseTemplate"===a?d._handleTemplate(!1):"indeterminateTemplate"===a?d._handleTemplate():void 0}_htmlBindOnInitialization(){const a=this;a._bindContentProperty("trueContent","smart-true-content"),a._bindContentProperty("falseContent","smart-false-content"),a._bindContentProperty("indeterminateContent","smart-indeterminate-content")}_bindContentProperty(a,b){const c=this;if(!c.$[a+"Container"])return;let d=document.createElement("div");d.innerHTML=c.innerHTML;let e,f=d.getElementsByClassName(b);if(0<f.length)for(let a=0;a<f.length;a++)e=f[a];""===c[a]&&(c[a]=e===void 0?"":e.outerHTML),c.$[a+"Container"].innerHTML=c[a]}_updateContentProperties(){function a(a){b.$[a+"Container"]&&(b[a]=b.$[a+"Container"].innerHTML)}const b=this;a("trueContent"),a("falseContent"),a("indeterminateContent")}_updateHidenInputValue(){const a=this;if(!a.$.hiddenInput)return;let b;b=null===a.checked?"null":!1===a.checked?"off":a.value||"on",a.$.hiddenInput.setAttribute("value",b)}_updateHidenInputName(){const a=this;if(a.$.hiddenInput){let b=!1===a.checked?"":a.name||"";a.$.hiddenInput.setAttribute("name",b)}}_updateHidenInputNameAndValue(){const a=this;a._updateHidenInputName(),a._updateHidenInputValue()}_handleTemplate(a,b){const c=this;let d,e,f;if(!0===a?(d=c.trueTemplate,e=c.$.trueContentContainer,f=c.trueContent):!1===a?(d=c.falseTemplate,e=c.$.falseContentContainer,f=c.falseContent):(d=c.indeterminateTemplate,e=c.$.indeterminateContentContainer,f=c.indeterminateContent),b&&(e.innerHTML=f?f:""),null===d||!d)return;if("function"==typeof d)return void d(e,{value:f});if(!("content"in document.createElement("template")))return void c.error(c.localize("htmlTemplateNotSuported",{elementType:c.nodeName.toLowerCase()}));if(d=document.getElementById(d),null===d||!("content"in d))return void c.error(c.localize("invalidTemplate",{elementType:c.nodeName.toLowerCase(),property:"template"}));const g=d.content,h=g.childNodes.length,j=/{{\w+}}/g;let k,l=[];for(let c=0;c<h;c++)for(k=j.exec(g.childNodes[c].innerHTML);k;)l.push({childNodeIndex:c,bindingString:k[0]}),k=j.exec(g.childNodes[c].innerHTML);const i=l.length;let m,n,o=document.importNode(d.content,!0);for(let c=0;c<i;c++){m=o.childNodes[l[c].childNodeIndex],n=l.length;for(let a=0;a<n;a++)m.innerHTML=m.innerHTML.replace(l[c].bindingString,f)}e.innerHTML="";for(let c=0;c<o.childNodes.length;c++)o.childNodes[c].outerHTML&&(e.innerHTML+=o.childNodes[c].outerHTML)}});