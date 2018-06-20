
/* Smart HTML Elements v1.1.0 (2018-June) 
Copyright (c) 2011-2018 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-multi-split-button",class extends Smart.DropDownList{static get properties(){return{dataSource:{value:[],type:"array",reflectToAttribute:!1},hideDropDownButton:{value:!1,type:"boolean"}}}static get listeners(){return{"actionButton.click":"_itemClickHandler","listBox.click":"_itemClickHandler"}}template(){return`<div id="container">
                    <div id="content" class="smart-content">
                         <span id="actionButton" class ="smart-action-button">
                             <content></content>
                         </span>
                        <span id="dropDownButton" class ="smart-drop-down-button smart-unselectable">
                            <span id="arrow"></span>
                        </span>
                        <div id="dropDownContainer" class ="smart-drop-down smart-visibility-hidden">
                            <smart-list-box id="listBox"
                                    disabled="[[disabled]]"
                                    display-loading-indicator="[[displayLoadingIndicator]]"
                                    display-member="[[displayMember]]"
                                    filterable="[[filterable]]"
                                    filter-mode="[[filterMode]]"
                                    filter-input-placeholder="[[filterInputPlaceholder]]"
                                    grouped="[[grouped]]"
                                    group-member="[[groupMember]]"
                                    item-height="[[itemHeight]]"
                                    item-template="[[itemTemplate]]"
                                    incremental-search-delay="[[incrementalSearchDelay]]"
                                    incremental-search-mode="[[incrementalSearchMode]]"
                                    loading-indicator-placeholder="[[loadingIndicatorPlaceholder]]"
                                    loading-indicator-position="[[loadingIndicatorPosition]]"
                                    placeholder="[[dropDownPlaceholder]]"
                                    readonly="[[readonly]]"
                                    selected-indexes="{{selectedIndexes}}"
                                    selection-mode="[[selectionMode]]"
                                    selected-values="{{selectedValues}}"
                                    sorted="[[sorted]]"
                                    value-member="[[valueMember]]"
                                    virtualized="[[virtualized]]">
                                <content></content>
                            </smart-list-box>
                        </div>
                    </div>
                </div>`}_applySelection(){}_createElement(){const a=this;a._tokenTemplate=a._validateTemplate(a.tokenTemplate),a._processDataSource(),a._populateButtonsContainer(!0),a.$.listBox.dataSource=a._dropDownDataSource,a._applySelection(),a._setDropDownSize(),a._setFocusable(),a.$.arrow.noRipple=!0,a.disabled||"auto"!==a.dropDownPosition||PositionDetection.handleAutoPositioning.call(this,a._scrollHandler,200,()=>"auto"!==a.dropDownPosition)}propertyChangedHandler(a,b,c){if("selectedValues"!==a&&"selectedIndexes"!==a){super.propertyChangedHandler(a,b,c);const d=this;switch(a){case"dataSource":d._processDataSource(),d._populateButtonsContainer(),d.$.listBox.dataSource=d._dropDownDataSource;break;case"disabled":for(let a=0;a<d._buttons.length;a++)d._buttons[a].disabled=c;}}}clearItems(){this.$.listBox.clearItems()}clearSelection(){this.$.listBox.clearSelection()}getItem(a){const b=this;for(let c=0;c<b._buttons.length;c++)if(b._buttons[c].value===a)return b._buttons[c];return b.$.listBox.getItem(a)}get buttons(){return this.$?this._buttons:void 0}insert(a,b,c){const d=this;if(c){let c=document.createElement("smart-button");c.className="smart-main-button",c.content=c.label=b.label||b,c.value=b.value||b.label||b,0>a?(d.$.actionButton.insertBefore(c,d._buttons[0]),d._buttons.splice(0,0,c)):a>=d._buttons.length?(d.$.actionButton.appendChild(c),d._buttons.push(c)):(d.$.actionButton.insertBefore(c,d._buttons[a]),d._buttons.splice(a,0,c))}else d.$.listBox.insert(a,b)}remove(a,b){const c=this;b&&0<=a&&a<c._buttons.length?(c.$.actionButton.removeChild(c._buttons[a]),c._buttons.splice(a,1)):c.$.listBox.remove(a)}update(a,b,c){const d=this;if(c&&0<=a&&a<d._buttons.length){let c=d._buttons[a];c.content=c.label=b.label||b,c.value=b.value||b.label||b}else d.$.listBox.update(a,b)}_processDataSource(){const a=this;a._buttonsDataSource=[],a._dropDownDataSource=[];for(let b,c=0;c<a.dataSource.length;c++)b=a.dataSource[c],b.button?a._buttonsDataSource.push(b):a._dropDownDataSource.push(b)}_populateButtonsContainer(a){function b(a,b){let d=document.createElement("smart-button");d.className="smart-main-button",d.content=d.label=a,d.value=b||a,c.$.actionButton.appendChild(d),c._buttons.push(d),g++}const c=this;let d,e,f,g=0;c._buttons=[],c.$.actionButton.innerHTML="",c.innerHTML&&0<c.innerHTML.length&&a&&b(c.innerHTML);for(let g=0;g<c._buttonsDataSource.length;g++)d=c._buttonsDataSource[g],e=d[c.displayMember]||d.label||d,f=d[c.valueMember]||d.value,b(e,f);0<g||0===c._dropDownDataSource.length||(d=c._dropDownDataSource[0],e=d[c.displayMember]||d.label||d,f=d[c.valueMember]||d.value,b(e,f),c._dropDownDataSource.shift())}_itemClickHandler(a){const b=this;if(!(b.disabled||b.readonly)){const c=a.target.closest("smart-button"),d=a.target.closest("smart-list-item");c&&-1<b._buttons.indexOf(c)?b.$.fireEvent("itemClick",{label:c.label,value:c.value}):d&&b.$.fireEvent("itemClick",{label:d.label,value:d.value})}}_documentUpHandler(a){const b=this,c=a.originalEvent.target;return c&&c.closest(".smart-action-button")?void(b.$dropDownContainer.hasClass("smart-visibility-hidden")||b.close()):void super._documentUpHandler(a)}});