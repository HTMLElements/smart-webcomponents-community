
/* Smart HTML Elements v5.1.0 (2019-Dec) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-list-menu",class extends Smart.Menu{static get properties(){return{displayLoadingIndicator:{value:!1,type:"boolean"},dropDownPosition:{value:"auto",allowedValues:["top-left","top-right","bottom-left","bottom-right","auto"],type:"string"},filterable:{value:!1,type:"boolean"},filterInputPlaceholder:{value:"",type:"string"},filterMode:{value:"containsIgnoreCase",allowedValues:["contains","containsIgnoreCase","doesNotContain","doesNotContainIgnoreCase","equals","equalsIgnoreCase","startsWith","startsWithIgnoreCase","endsWith","endsWithIgnoreCase"],type:"string"},grouped:{value:!1,type:"boolean"},loadingIndicatorPlaceholder:{value:"Loading...",type:"string"},loadingIndicatorPosition:{value:"center",allowedValues:["bottom","center","top"],type:"string"}}}static get listeners(){return{resize:"_resizeHandler","backButton.click":"_backButtonClickHandler","filterInput.keyup":"_filterInputKeyupHandler","mainContainer.down":"_mainContainerDownHandler","mainContainer.move":"_mainContainerMoveHandler","mainContainer.swipeleft":"_mainContainerSwipeHandler","mainContainer.swiperight":"_mainContainerSwipeHandler","view.click":"_viewHandler","view.mouseout":"_viewHandler","view.mouseover":"_viewHandler","view.transitionend":"_viewHandler","view.wheel":"_wheelHandler"}}static get styleUrls(){return["smart.listmenu.css"]}template(){return`<div id="container">
                    <div id="hamburgerIcon" class="smart-hamburger-icon smart-hidden">
                        <div id="hamburgerIconLineTop" class="smart-hamburger-icon-line smart-hamburger-icon-line-top"></div>
                        <div id="hamburgerIconLineCenter" class="smart-hamburger-icon-line smart-hamburger-icon-line-center"></div>
                        <div id="hamburgerIconLineBottom" class="smart-hamburger-icon-line smart-hamburger-icon-line-bottom"></div>
                        <div id="customIconContainer" class="smart-hamburger-icon-custom-container smart-hidden"></div>
                    </div>
                    <div id="view" class="smart-list-menu-view">
                        <div id="header" class="smart-header smart-hidden">
                            <smart-button id="backButton" animation="[[animation]]" disabled="[[disabled]]" unfocusable right-to-left="[[rightToLeft]]">
                                <div id="backButtonArrow" class="smart-arrow ${this.rightToLeft?"smart-arrow-right":"smart-arrow-left"}"></div>
                            </smart-button>
                            <div id="title" class="smart-title"></div>
                        </div>
                        <div class="smart-list-menu-filter-input-container smart-hidden" id="filterInputContainer">
                            <input id="filterInput" class="smart-filter-input" disabled="[[disabled]]" placeholder="[[filterInputPlaceholder]]" type="text" />
                        </div>
                        <smart-repeat-button id="scrollButtonNear" class="smart-menu-scroll-button smart-spin-button smart-scroll-button-near smart-hidden" animation="[[animation]]" unfocusable>
                            <div id="arrowNear" class="smart-arrow smart-arrow-up" right-to-left="[[rightToLeft]]"></div>
                        </smart-repeat-button>
                        <div id="mainContainer" class="smart-menu-main-container">
                            <content></content>
                        </div>
                        <smart-repeat-button id="scrollButtonFar" class="smart-menu-scroll-button smart-spin-button smart-scroll-button-far smart-hidden" animation="[[animation]]" unfocusable right-to-left="[[rightToLeft]]">
                            <div id="arrowFar" class="smart-arrow smart-arrow-down"></div>
                        </smart-repeat-button>
                        <div id="loadingIndicatorContainer" class="smart-loader-container smart-hidden">
                            <span id="loadingIndicator" class="smart-loader"></span>
                            <span id="loadingIndicatorPlaceHolder" class="smart-loader-label smart-hidden">[[loadingIndicatorPlaceholder]]</span>
                        </div>
                    </div>
                </div>`}attached(){const a=this;super.attached(),a.isCompleted&&null!==a.dropDownAppendTo&&a._minimized&&a._dropDownParent.appendChild(a.$.view)}detached(){const a=this;super.detached(),a._close(),null!==a.dropDownAppendTo&&a._minimized&&a._dropDownParent.removeChild(a.$.view)}addItem(a,b){const c=this;if(!(a instanceof Smart.MenuItem||a instanceof Smart.MenuItemsGroup))return;let d,e,f,g;if(void 0===b)b=c.$.mainContainer,d=void 0,e=1,f=b,g=c._topLevelFilter;else{if("string"==typeof b&&(b=c.getItem(b)),void 0===b||!(b instanceof Smart.MenuItemsGroup&&(c.contains(b)||b.closest(".smart-list-menu-view")===c.$.view)))return;d=b,e=b.level+1,f=b.itemContainer,g=b.filter}if(c._createItemHTMLStructure(a,e,b,c._getCurrentViewItems(d).length,0),a instanceof Smart.MenuItemsGroup&&c._processHTML(a,e+1),c._view===b||b.$.hasClass("smart-hidden")||!(0<b.offsetHeight)||!(0<b.offsetWidth)||(c._view||c.$.mainContainer.contains(b))&&(!c._view||c._view.contains(b))||a.$.addClass("smart-hidden"),c.grouped){const a=Array.from(f.children);for(let b=a.length-1;0<=b;b--)a[b].$.hasClass("smart-list-menu-group-label")&&f.removeChild(a[b]);c._unsortItems(b,!0)}if(f.appendChild(a),c.grouped){const a=c._view;c._applyGrouping(b,!0),c._home(),a&&c.changePage(a.path)}c.filterable&&void 0!==g&&""!==g&&null===c._findItem(a,g)&&(a.$.addClass("smart-hidden"),a.hidden=!0),c._toggleFilterInputGroupLabelVisibility(),c._checkOverflow()}back(a){const b=this,c=b.animation,d=!1===a&&"none"!==c;d&&(b.animation="none"),b._backButtonClickHandler(),d&&(b.animation=c)}changePage(a){const b=this,c=b.getItem(a);if(void 0===c||c instanceof Smart.MenuItem||c.hidden)return;const d=[c];let e=c.parentItem,f=0;for(b._discardKeyboardHover();e;)d.unshift(e),e=e.parentItem;if(b._view){const a=d.indexOf(b._view);-1===a?b._home():f=a+1}for(let c=f;c<d.length&&!(d[c].disabled||d[c].hidden);c++)b._menuItemsGroupSelectionHandler(d[c],{type:"expand"},!0)}maximize(){const a=this;if(a._minimized){if(a._positionDetection.removeOverlay(),a._minimized=!1,a._minimizedDropDownOpened&&(a.$hamburgerIcon.removeClass("smart-close-button"),a._minimizedDropDownOpened=!1),null!==a.dropDownAppendTo&&a._appendMinimizedContainerToMenu(a.$.view,null),a.$view.removeClass("smart-visibility-hidden"),a.$view.removeClass("smart-list-menu-view-minimized"),a.$hamburgerIcon.addClass("smart-hidden"),a.removeAttribute("minimized"),a.enableShadowDOM){a.$.view.id=a.$.view.getAttribute("smart-id");const b=a.$.view.querySelectorAll("[smart-id]");for(let a=0;a<b.length;a++)b[a].id=b[a].getAttribute("smart-id")}a.$.mainContainer.scrollTop=0,a._checkOverflow()}}minimize(){const a=this;if(!a._minimized){if(a.$view.addClass("smart-visibility-hidden"),a.enableShadowDOM){a.$.view.removeAttribute("id");const b=a.$.view.querySelectorAll("[smart-id]");for(let a=0;a<b.length;a++)b[a].removeAttribute("id")}a._edgeMacFF&&a.$view.addClass("not-in-view"),a.$hamburgerIcon.removeClass("smart-hidden"),setTimeout(function(){null!==a.dropDownAppendTo&&a._appendMinimizedContainerToExternalElement(a.$.view),a.$view.addClass("smart-list-menu-view-minimized"),a.$.mainContainer.scrollTop=0,a._checkOverflow()},0),a._minimized=!0,a.setAttribute("minimized","")}}removeItem(a){const b=this;if("string"==typeof a&&(a=b.getItem(a)),void 0!==a&&(a instanceof Smart.MenuItem||a instanceof Smart.MenuItemsGroup)&&(b.contains(a)||a.closest(".smart-list-menu-view")===b.$.view)){const c=a.parentElement;for(;a.contains(b._view);)b._backButtonClickHandler(void 0,!0);const d=b._view;b.grouped&&(b._home(),b._discardGrouping()),c.removeChild(a),b._menuItems={},b._refreshItemPaths(b.$.mainContainer,!0,function(a){return b._getCurrentViewItems(a===b.$.mainContainer?void 0:a)}),b.grouped&&(b._applyGrouping(b.$.mainContainer),d&&b.changePage(d.path)),b._toggleFilterInputGroupLabelVisibility(),b._checkOverflow()}}propertyChangedHandler(a,b,c){if("disabled"===a||"dropDownOverlay"===a||"minimizeIconTemplate"===a||"minimizeWidth"===a||"overflow"===a||"unfocusable"===a)return void super.propertyChangedHandler(a,b,c);const d=this;switch(a){case"animation":d.$.view.setAttribute("animation",c);break;case"checkable":case"checkboxes":d._minimized&&null!==d.dropDownAppendTo&&(c?d.$.view.setAttribute(a,""):d.$.view.removeAttribute(a));break;case"checkMode":d._changeToRadioButtonMode(c,d.$.mainContainer),d._minimized&&null!==d.dropDownAppendTo&&d.$.view.setAttribute("check-mode",c);break;case"dataSource":d.$header.addClass("smart-hidden"),d.$mainContainer.removeClass("header-shown"),d._view=void 0,d._menuItems={},d._topLevelFilter="",d._processDataSource(),d._toggleFilterInputGroupLabelVisibility(),d._checkOverflow();break;case"displayLoadingIndicator":if(c){const a=d.$.mainContainer.querySelector("[hover]");a&&a.removeAttribute("hover"),d._discardKeyboardHover(),d.$loadingIndicatorContainer.removeClass("smart-hidden")}else d.$loadingIndicatorContainer.addClass("smart-hidden");break;case"dropDownAppendTo":{const a=d._dropDownParent;if(d._positionDetection.getDropDownParent(),d._dropDownParent===a||!d._minimized)return;d._close(),null===c?d._appendMinimizedContainerToMenu(d.$.view,null):d._appendMinimizedContainerToExternalElement(d.$.view),d.$.mainContainer.scrollTop=0,d._checkOverflow();break}case"dropDownPosition":{d._close(),d._minimized&&null!==d.dropDownAppendTo&&d.$.view.setAttribute("drop-down-position",c);break}case"filterable":if(d._toggleFilterInputGroupLabelVisibility(!0),!1===c){""!==d._topLevelFilter&&d._applyFilter("");for(let a=d._filteredLowerLevelGroups.length-1;0<=a;a--)d._applyFilter("",d._filteredLowerLevelGroups[a])}d._checkOverflow();break;case"filterMode":if(!d.filterable)return;""!==d._topLevelFilter&&d._applyFilter(d._topLevelFilter);for(let a=d._filteredLowerLevelGroups.length-1;0<=a;a--)d._applyFilter(d._filteredLowerLevelGroups[a].filter,d._filteredLowerLevelGroups[a]);break;case"grouped":d._home(),c?d._applyGrouping(d.$.mainContainer):d._discardGrouping(),d._toggleFilterInputGroupLabelVisibility(!1,!0),d._checkOverflow();break;case"loadingIndicatorPosition":null!==d.dropDownAppendTo&&d._minimized&&d.$.view.setAttribute("loading-indicator-position",c),"center"===c?d.$loadingIndicatorPlaceHolder.addClass("smart-hidden"):d.$loadingIndicatorPlaceHolder.removeClass("smart-hidden");break;case"rightToLeft":c?(d.$backButtonArrow.removeClass("smart-arrow-left"),d.$backButtonArrow.addClass("smart-arrow-right")):(d.$backButtonArrow.removeClass("smart-arrow-right"),d.$backButtonArrow.addClass("smart-arrow-left")),c?d.$.view.setAttribute("right-to-left",""):d.$.view.removeAttribute("right-to-left"),Array.prototype.forEach.call(d.$.mainContainer.querySelectorAll(".smart-menu-items-group-arrow"),a=>a.className="smart-menu-items-group-arrow "+(d.rightToLeft?"smart-arrow-left left":"smart-arrow-right right"));break;case"theme":super.propertyChangedHandler(a,b,c),null!==d.dropDownAppendTo&&d._minimized&&(""!==b&&d.$view.removeClass(b),c&&d.$view.addClass(c));}}_appendGroupLabels(a,b){for(let c=0;c<a.length;c++){const d=document.createElement("div");d.$=Smart.Utilities.Extend(d),d.className="smart-list-menu-group-label",d.innerHTML=a[c],d.groupChildren=b[c],b[c][0].parentElement.insertBefore(d,b[c][0]);for(let a=0;a<b[c].length;a++)b[c][a].groupLabel=d}}_applyFilter(a,b){const c=this,d=c._getCurrentViewItems(b);for(let e=0;e<d.length;e++){const f=c._findItem(d[e],a);f&&f.hidden?(f.hidden=!1,(b===c._view||c._view!==void 0&&b!==void 0&&!b.contains(c._view)||c._view===void 0)&&f.$.removeClass("smart-hidden")):!f&&(d[e].hidden=!0,d[e].$.addClass("smart-hidden"))}if(b){b.filter=a;const d=c._filteredLowerLevelGroups.indexOf(b);""===a?-1!==d&&c._filteredLowerLevelGroups.splice(d,1):-1===d&&c._filteredLowerLevelGroups.push(b)}else c._topLevelFilter=a}_backButtonClickHandler(a,b){const c=this,d=c._view;if(a&&a.stopPropagation(),!d||c.disabled&&a||c.displayLoadingIndicator||c._inTransition)return;let e=c.hasAnimation,f=c.animation,g=!1;e&&b&&(e=!1,g=!0,c.animation="none"),c._discardKeyboardHover(),c.$scrollButtonNear.addClass("smart-hidden"),c.$scrollButtonFar.addClass("smart-hidden"),c.$mainContainer.removeClass("scroll-buttons-shown"),d.firstElementChild.classList.remove("smart-hidden"),e?(c._inTransition=!0,d.container.$.addClass("no-transition"),d.container.$.addClass("smart-hidden"),d.$.addClass("right"),d.$.removeClass("right"),d.container.$.removeClass("no-transition")):(d.$.removeClass("smart-menu-items-group-opened"),d.container.$.addClass("smart-hidden")),c._showHideMenuItemsGroupSiblings(d,"removeClass",e),e?setTimeout(function(){d.container.style.top=d.parentElement.getBoundingClientRect().top-d.getBoundingClientRect().top+"px"},0):g&&(c.animation=f),1===d.level?(c.$header.addClass("smart-hidden"),c.$mainContainer.removeClass("header-shown"),c._view=void 0):(c.$.title.innerHTML=d.parentItem.titleLabel,c._view=d.parentItem),c._toggleFilterInputGroupLabelVisibility(),c.$.mainContainer.scrollTop=0,e||c._checkOverflow(),a&&c.focus()}_bounceBottom(a){function b(){e.scrollTop-=5,e.scrollTop>a?window.requestAnimationFrame(b):d.$mainContainer.removeClass("bounce-bottom")}function c(){e.scrollTop+=5,e.scrollTop===e.scrollHeight-e.offsetHeight?window.requestAnimationFrame(b):window.requestAnimationFrame(c)}const d=this,e=d.$.mainContainer;d.$mainContainer.addClass("bounce-bottom"),window.requestAnimationFrame(c)}_bounceTop(){function a(){d.scrollTop-=5,0<d.scrollTop?window.requestAnimationFrame(a):window.requestAnimationFrame(b)}function b(){d.scrollTop+=5,50===d.scrollTop?(d.scrollTop=0,c.$mainContainer.removeClass("bounce-top")):window.requestAnimationFrame(b)}const c=this,d=c.$.mainContainer;c.$mainContainer.addClass("bounce-top"),window.requestAnimationFrame(a)}_checkOverflow(){var a=Math.round;const b=this,c=b.overflow;if("hidden"!==c){const d=a(b.$.mainContainer.scrollHeight)>a(b.$.mainContainer.offsetHeight),e=0<a(b.$.mainContainer.scrollTop),f=a(b.$.mainContainer.offsetHeight+b.$.mainContainer.scrollTop)<a(b.$.mainContainer.scrollHeight);d?"auto"===c?(!b.$mainContainer.hasClass("scroll-buttons-shown")&&b.$mainContainer.addClass("scroll-buttons-shown"),e?b.$scrollButtonNear.removeClass("smart-hidden"):b.$scrollButtonNear.addClass("smart-hidden"),f?b.$scrollButtonFar.removeClass("smart-hidden"):b.$scrollButtonFar.addClass("smart-hidden"),!1==(e&&f)?b.$mainContainer.addClass("one-button-shown"):b.$mainContainer.removeClass("one-button-shown"),!b.disabled&&(b.$.scrollButtonNear.disabled=!1,b.$.scrollButtonFar.disabled=!1)):(b.$scrollButtonNear.removeClass("smart-hidden"),b.$scrollButtonFar.removeClass("smart-hidden"),b.disabled?(b.$.scrollButtonNear.disabled=!0,b.$.scrollButtonFar.disabled=!0):(b.$.scrollButtonNear.disabled=!e,b.$.scrollButtonFar.disabled=!f)):!d&&"auto"===c&&b.$mainContainer.hasClass("scroll-buttons-shown")?(b.$mainContainer.removeClass("scroll-buttons-shown"),b.$mainContainer.removeClass("one-button-shown"),b.$scrollButtonNear.addClass("smart-hidden"),b.$scrollButtonFar.addClass("smart-hidden")):!d&&"scroll"===c&&(b.$.scrollButtonNear.disabled=!0,b.$.scrollButtonFar.disabled=!0)}}_close(){const a=this;a._discardKeyboardHover(!0),a._minimized&&a._minimizedDropDownOpened&&(a._positionDetection.removeOverlay(),a.$view.addClass("smart-visibility-hidden"),a._edgeMacFF&&(a.$.view.style.left="",a.$.view.style.top="",a.$view.addClass("not-in-view")),a.$hamburgerIcon.removeClass("smart-close-button"),a._minimizedDropDownOpened=!1)}_createElement(){const a=this;a.mode="vertical",a._positionDetection=new Smart.Utilities.PositionDetection(a),a._positionDetection.getDropDownParent(),null===a.dataSource&&a.$.mainContainer.firstElementChild instanceof HTMLUListElement&&a._processUList();const b=a.getElementsByTagName("smart-menu-item"),c=function(){a._setFocusable(),a._menuItems={},a._topLevelFilter="",a._filteredLowerLevelGroups=[],a.$.view.setAttribute("animation",a.animation),null===a.dataSource?a._processHTML(void 0,1):a._processDataSource(),a._toggleFilterInputGroupLabelVisibility(),"scroll"===a.overflow&&(a.$mainContainer.addClass("scroll-buttons-shown"),a.$scrollButtonNear.removeClass("smart-hidden"),a.$scrollButtonFar.removeClass("smart-hidden"),a._updateScrollButtonVisibility(a.$.mainContainer,!1,[a.$.scrollButtonNear,a.$.scrollButtonFar])),a._applyMinimizeIconTemplate(a.minimizeIconTemplate,null),null!==a.minimizeWidth&&a.offsetWidth<=a.minimizeWidth?a.minimize():a._checkOverflow(),a.displayLoadingIndicator&&a.$loadingIndicatorContainer.removeClass("smart-hidden"),"center"!==a.loadingIndicatorPosition&&a.$loadingIndicatorPlaceHolder.removeClass("smart-hidden"),a.__onCompleted&&(a._onCompleted=a.__onCompleted,a.__onCompleted=null,a._onCompleted())};0===b.length?c():(a._onCompleted&&(a.__onCompleted=a._onCompleted,a._onCompleted=null),a._ensureItemsReady(b,c))}_createMenuItemsGroupContainer(a,b){const c=document.createElement("div"),d=document.createElement("div");return c.className="smart-menu-drop-down smart-hidden",c.$=Smart.Utilities.Extend(c),c.level=b,c.setAttribute("level",b),c.menuItemsGroup=a,d.className="smart-menu-item-container",d.$=Smart.Utilities.Extend(d),d.container=c,d.menuItemsGroup=a,a.checkable&&d.setAttribute("checkable",""),d.setAttribute("check-mode",a.checkMode),c.itemContainer=d,c.appendChild(d),c}_discardGrouping(){const a=this,b=Array.from(a.$.view.getElementsByClassName("smart-list-menu-group-label"));for(let a,c=0;c<b.length;c++)a=b[c],a.parentElement.removeChild(a);a._unsortItems(a.$.mainContainer)}_discardKeyboardHover(){const a=this;a._focusedViaKeyboard&&(a._focusedViaKeyboard===a.$.backButton?(a.$.backButton.removeAttribute("hover"),a.$.backButton.$.button.removeAttribute("hover")):(a._focusedViaKeyboard.removeAttribute("focus"),a._focusedViaKeyboard.removeAttribute("hover")),a._focusedViaKeyboard=void 0)}_documentUpHandler(a){const b=this,c=a.originalEvent.target,d=a=>{"right"===a&&!b.rightToLeft||"left"===a&&b.rightToLeft?b._backButtonClickHandler():b._swipeDetails.target&&b._selectionHandler({target:b._swipeDetails.target},b._swipeDetails.target,!0)};return b._endSwiping(a,Date.now()),b._swipeDetails?("left"===b._swipeDetails.direction?b._swipeDetails.start>a.pageX&&b._swipeDetails.start-a.pageX>b.offsetWidth/4&&d(b._swipeDetails.direction):b._swipeDetails.start<a.pageX&&a.pageX-b._swipeDetails.start>b.offsetWidth/4&&d(b._swipeDetails.direction),void delete b._swipeDetails):void(c===b.$.filterInput||b.disabled||b.displayLoadingIndicator||!c.closest||(b.contains(c)||c.closest(".smart-list-menu-view")===b.$.view?(b.contains(c)||c.closest(".smart-list-menu-view")===b.$.view)&&b!==document.activeElement&&b.focus():(b._close(),b._scrolling&&delete b._scrolling)))}_ensureVisible(a){const b=this,c=b.$.mainContainer;if(c.$.hasClass("scroll-buttons-shown")||"hidden"===b.overflow){const d=c.getBoundingClientRect(),e=a.getBoundingClientRect(),f=[b.$.scrollButtonNear,b.$.scrollButtonFar],g=c.scrollTop;(d.top>e.top||d.bottom<e.bottom)&&(c.scrollTop=a.offsetTop,b._updateScrollButtonVisibility(c,!1,f)),b._fireScrollBottomReachedEvent(g)}}_fireScrollBottomReachedEvent(a){const b=this,c=b.$.mainContainer,d=c.scrollTop;a===d||d!==c.scrollHeight-c.offsetHeight||b.$.fireEvent("scrollBottomReached")}_getCurrentViewItems(a){const b=this;if(!b.grouped)return void 0===a?b.$.mainContainer.children:a.container.firstElementChild.children;if(void 0===a)return b.$.view.querySelectorAll(".smart-menu-main-container > smart-menu-item, .smart-menu-main-container > smart-menu-items-group");else{const b=a.container.firstElementChild.children,c=[];for(let a,d=0;d<b.length;d++)a=b[d],(a instanceof Smart.MenuItem||a instanceof Smart.MenuItemsGroup)&&c.push(a);return c}}_sortItems(a){const b=this;if(!b.grouped)return;const c=[],d=[];let e;a instanceof Smart.MenuItemsGroup?e=a.container.firstElementChild:a===b.$.mainContainer&&(e=a);const f=Array.from(e.children);f.sort(function(c,a){return c.label.localeCompare(a.label)});for(let b=f.length-1;0<=b;b--)e.insertBefore(f[b],e.firstElementChild);for(let b=0;b<f.length;b++){const a=f[b],e=a.label.charAt(0),g=c.indexOf(e.toUpperCase());-1===g?(c.push(e.toUpperCase()),d.push([a])):d[g].push(a)}b._appendGroupLabels(c,d)}_home(){for(const a=this;a._view;)a._backButtonClickHandler(void 0,!0)}_keydownHandler(a){const b=this,c=a.key,d=(b.shadowRoot||b.getRootNode()).activeElement||document.activeElement;if(!(d!==b||-1===["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","End","Enter","Escape","Home"," "].indexOf(c)||b.disabled||b.displayLoadingIndicator)){a.preventDefault();const d=b._view,e=d?d.itemContainer:b.$.mainContainer,f=b.$.backButton.hasAttribute("hover")?b.$.backButton:e.querySelector("[focus]");switch(c){case"ArrowDown":b._navigate("_getNextEnabledChild",f,e);break;case"ArrowLeft":case"ArrowRight":if("ArrowLeft"===c&&!b.rightToLeft||"ArrowRight"===c&&b.rightToLeft){b._backButtonClickHandler();break}("ArrowRight"===c&&!b.rightToLeft||"ArrowLeft"===c&&b.rightToLeft)&&f&&f instanceof Smart.MenuItemsGroup&&b._menuItemsGroupSelectionHandler(f,{type:"keydown"});break;case"ArrowUp":b._navigate("_getPreviousEnabledChild",f,e);break;case"End":case"Home":{if(d&&"Home"===c)return b.$.mainContainer.scrollTop=0,b._checkOverflow(),b.$.backButton.setAttribute("hover",""),b.$.backButton.$.button.setAttribute("hover",""),b._focusedViaKeyboard=b.$.backButton,void(f&&f.removeAttribute("focus"));const a="End"===c?b._getLastEnabledChild(e):b._getFirstEnabledChild(e);if(!a||f===a)return;f&&(f===b.$.backButton?(b.$.backButton.removeAttribute("hover"),b.$.backButton.$.button.removeAttribute("hover")):f.removeAttribute("focus")),b._hoverViaKeyboard(a);break}case"Enter":b._minimized&&!b._minimizedDropDownOpened?b._hamburgerIconClickHandler(void 0,b.$.view):f&&(f===b.$.backButton?b._backButtonClickHandler():b._selectionHandler({target:f}));break;case"Escape":b._minimized&&b._minimizedDropDownOpened&&!b._view?b._close():b._backButtonClickHandler();break;case" ":f&&(f===b.$.backButton?b._backButtonClickHandler():b._toggleItem(f));}}}_mainContainerDownHandler(a){const b=this;!Smart.Utilities.Core.isMobile||b.disabled||b.displayLoadingIndicator||(b._dragStartDetails={startY:a.pageY,x:a.pageX,y:a.pageY,startTime:Date.now(),target:a.originalEvent.target})}_mainContainerHandler(){}_mainContainerMoveHandler(a){const b=this;if(b._dragStartDetails){const c=a.pageY,d=b._dragStartDetails.y-c,e=b.$.mainContainer.scrollTop;b.$.mainContainer.scrollTop+=d,e!==b.$.mainContainer.scrollTop&&(b._checkOverflow(),b._fireScrollBottomReachedEvent(e)),b._dragStartDetails={startY:b._dragStartDetails.startY,x:a.pageX,y:c,startTime:b._dragStartDetails.startTime,target:a.originalEvent.target},b._scrolling=!0}}_mainContainerSwipeHandler(a){const b=this;if(!(!Smart.Utilities.Core.isMobile||b.disabled||b.displayLoadingIndicator)){const c=a.originalEvent.target,d=c.closest("smart-menu-item"),e=c.closest("smart-menu-items-group");if("swiperight"===a.type&&!b.rightToLeft||"swipeleft"===a.type&&b.rightToLeft){const c=d||e;c&&(delete b._dragStartDetails,delete b._scrolling,b._swipeDetails={direction:a.type.replace("swipe",""),start:a.pageX,target:c})}else("swipeleft"===a.type&&!b.rightToLeft||"swiperight"===a.type&&b.rightToLeft&&e&&null===d)&&(delete b._dragStartDetails,delete b._scrolling,b._swipeDetails={direction:a.type.replace("swipe",""),start:a.pageX,target:e})}}_getRootDetails(a,b){const c=this;if(!a)return;if(!c.enableShadowDOM)return{activeElement:a.activeElement,isInsideElement:c.contains(b.target)};let d,e;for(;a&&(!d&&a.activeElement&&(d=a.activeElement),a.host===c&&(e=!0),a!==document);)a=a.host?a.host.getRootNode():a.getRootNode();return{activeElement:d,isInsideElement:e}}_menuItemsGroupSelectionHandler(a,b,c){const d=this,e=a.container,f=e.level,g=d._getRootDetails(b.target?b.target.getRootNode():null,b);if(d._view===a)return;if(d._discardKeyboardHover(),g&&g.activeElement!==d&&null!==d.dropDownAppendTo&&"click"===b.type&&!g.isInsideElement&&d.focus(),d._inTransition)return;if("click"===b.type&&!b.target.classList.contains("smart-menu-items-group-arrow")&&d._toggleItem(a))return void d._ripple(a,b);let h=d.hasAnimation,i=d.animation,j=!1;h&&c&&(h=!1,j=!0,d.animation="none"),2===f&&(d.$header.removeClass("smart-hidden"),d.$mainContainer.addClass("header-shown")),d.$.title.innerHTML=a.titleLabel,d._view=a,d._toggleFilterInputGroupLabelVisibility(),a.removeAttribute("hover"),a.removeAttribute("focus"),a.$.addClass("smart-menu-items-group-opened"),d._showHideMenuItemsGroupSiblings(a,"addClass",h),h?(d._inTransition=!0,a.firstElementChild.classList.add("animate"),setTimeout(function(){e.style.top=a.parentElement.getBoundingClientRect().top-a.getBoundingClientRect().top+"px"},0)):a.firstElementChild.classList.add("smart-hidden"),e.$.removeClass("smart-hidden"),j&&(d.animation=i),d.$.mainContainer.scrollTop=0,h||d._checkOverflow(),d.$.fireEvent("expand",{item:a,label:a.label,path:a.path,value:a.value})}_mouseoutMouseoverHandler(a){const b=this;if(!(b.disabled||b.displayLoadingIndicator)){const c=a.target.closest("smart-menu-item")||a.target.closest("smart-menu-items-group");null===c||b._view&&c.level<=b._view.level||c.disabled||c.templateApplied||(b._discardKeyboardHover(),"mouseover"===a.type?(c.setAttribute("hover",""),b._discardKeyboardHover(!0)):c.removeAttribute("hover"))}}_navigate(a,b,c){const d=this;if(!b)return void("_getNextEnabledChild"===a?d._view?(d.$.backButton.setAttribute("hover",""),d.$.backButton.$.button.setAttribute("hover",""),d._focusedViaKeyboard=d.$.backButton):d._hoverViaKeyboard(d._getFirstEnabledChild(c)):d._hoverViaKeyboard(d._getLastEnabledChild(c)));let e;if("_getNextEnabledChild"!==a||b!==d.$.backButton){if("_getPreviousEnabledChild"===a&&d._view&&b===d._getFirstEnabledChild(c))return d.$.backButton.setAttribute("hover",""),d.$.backButton.$.button.setAttribute("hover",""),d._focusedViaKeyboard=d.$.backButton,void b.removeAttribute("focus");e=d[a](b)}else if(e=d._getFirstEnabledChild(c),e)d.$.backButton.removeAttribute("hover"),d.$.backButton.$.button.removeAttribute("hover");else return;e&&(b.removeAttribute("focus"),d._hoverViaKeyboard(e))}_processHTML(a,b){const c=this;let d,e;a===void 0&&(a=c.$.mainContainer),1<b&&(d=c._createMenuItemsGroupContainer(a,b),e=d.itemContainer);const f=Array.from(a.children),g=[];let h=0;for(let d=0;d<f.length;d++){if(1<b&&0==d){h++;continue}const i=f[d];if(!(i instanceof Smart.MenuItem||i instanceof Smart.MenuItemsGroup)){i.parentElement.removeChild(i),h++;continue}c._createItemHTMLStructure(i,b,a,d-h),i.checked&&(i.disabled||i.templateApplied?i.checked=!1:g.push(i)),1<b&&e.appendChild(i),i instanceof Smart.MenuItemsGroup&&c._processHTML(i,b+1)}if(1<b){if(a.container=d,a.itemContainer=e,a instanceof Smart.MenuItemsGroup){const b=document.createElement("div");b.className="smart-menu-items-group-arrow "+(c.rightToLeft?"smart-arrow-left left":"smart-arrow-right right"),a.children[0].appendChild(b)}a.appendChild(d)}c._validateRadioButtonSelection(a,b,g),c._sortItems(a)}_resizeHandler(){const a=this,b=a.minimizeWidth;if(null!==b){if(!a._minimized&&a.offsetWidth<=b)return void a.minimize();if(a._minimized&&a.offsetWidth>b)return void a.maximize()}a._checkOverflow()}_scroll(a){const b=this,c=b.$.mainContainer,d=a.classList.contains("smart-scroll-button-near")?-1:1,e=c.scrollTop;c.scrollTop+=10*d,e!==c.scrollTop&&(b._updateScrollButtonVisibility(c,!1,[b.$.scrollButtonNear,b.$.scrollButtonFar]),b._fireScrollBottomReachedEvent(e))}_selectionHandler(a,b,c){function d(){const b=e._getRootDetails(f.getRootNode(),a);b&&b.activeElement!==e&&null!==e.dropDownAppendTo&&"click"===a.type&&!b.isInsideElement&&e.focus()}const e=this,f=a.target;if(!(e.disabled||e.displayLoadingIndicator)){if(e._scrolling||e._swipeDetails&&!c)return delete e._dragStartDetails,delete e._scrolling,void delete e._swipeDetails;if(void 0===b){if("click"===a.type){const b=f.closest("smart-repeat-button");if(b)return void e._scroll(b,a)}const c=f.closest("smart-menu-item");if(c)return c.disabled||c.templateApplied?void d():(e._toggleItem(c)||e.$.fireEvent("itemClick",{item:c,label:c.label,value:c.value}),e._ensureVisible(c),e._ripple(c,a),void d());if(b=f.closest("smart-menu-items-group"),b&&(f===b.container||f===b.container.firstElementChild))return}b&&!b.disabled&&e._menuItemsGroupSelectionHandler(b,a)}}_showHideMenuItemsGroupSiblings(a,b,c){const d=a.parentElement,e=d.children;for(let d=0;d<e.length;d++){const f=e[d];f!==a&&(f.hidden||(c?"addClass"===b?f.$.addClass("animate"):(f.$.removeClass("smart-hidden"),f.$.addClass("right"),setTimeout(function(){f.$.removeClass("right")},0)):f.$[b]("smart-hidden")))}}_toggleFilterInputGroupLabelVisibility(a,b){const c=this,d=c._getCurrentViewItems(c._view).length;if(!0!==b){const a=!c.$filterInputContainer.hasClass("smart-hidden");c.filterable&&1<d?(!a&&(c.$mainContainer.addClass("filter-input-shown"),c.$filterInputContainer.removeClass("smart-hidden")),c.$.filterInput.value=c._view?c._view.filter||"":c._topLevelFilter):a&&(c.$mainContainer.removeClass("filter-input-shown"),c.$filterInputContainer.addClass("smart-hidden"))}if(!a&&c.grouped&&0<d){const a=c._view?c._view.container.firstElementChild.firstElementChild.$:c.$.mainContainer.firstElementChild.$;1===d?a.addClass("smart-hidden"):a.removeClass("smart-hidden")}}_viewHandler(a){const b=this;if("transitionend"===a.type){const c=a.target;return c===b.$.view||b.$.backButton.contains(c)?void 0:(c.classList.contains("animate")&&(c.classList.remove("animate"),c.classList.add("smart-hidden")),c.classList.contains("smart-menu-drop-down")&&(c.style.top=""),c.classList.contains("smart-menu-items-group-opened")&&c.classList.remove("smart-menu-items-group-opened"),b._checkOverflow(),void(b._inTransition=!1))}if(b._minimized&&null!==b.dropDownAppendTo)switch(a.type){case"click":b._selectionHandler(a);break;case"mouseout":b._mouseoutMouseoverHandler(a);break;case"mouseover":b._mouseoutMouseoverHandler(a);}}});