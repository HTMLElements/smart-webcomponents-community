
/* Smart HTML Elements v4.1.0 (2019-Aug) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Row",class{constructor(a){const b=this;a||(a={}),Object.assign(b,a);a&&(b.data===void 0&&(b.data={$:{}}),(void 0===a.$||a.$&&void 0===a.$.id)&&(a.data?(a.data.$&&a.data.$.id&&(b.id=a.data.$.id),!b.id&&(b.id=a.index)):b.id===void 0&&(b.id=a.index),b.id===void 0&&(b.id=Smart.Utilities.Core.createGUID())),void 0===b.detailHeight&&(b.grid?b.detailHeight=b.grid.rowDetail.height:b.detailHeight=200),void 0===b.height&&b.grid&&(b.height=b.grid.rowMinHeight,b.grid.__autoRowHeight&&(b.height=b.grid.__autoRowHeight),b.grid.rowHeight&&(b.height=b.grid.rowHeight)),void 0===b.cellHeight&&(b.cellHeight=b.height),void 0===b.showDetail&&(b.showDetail=!1),void 0===b.index&&(b.index=-1),void 0===b.visibleIndex&&(b.visibleIndex=-1),void 0===b.freeze&&(b.freeze=!1),void 0===b.height&&(b.height=null),void 0===b.minHeight&&(b.minHeight=25),void 0===b.selected&&(b.selected=!1,b.grid&&b.grid._selection.rows[b.id]&&(b.selected=!0)),void 0===b.enabled&&(b.enabled=!0),void 0===b.visible&&(b.visible=!0),void 0===b.filtered&&(b.filtered=!0),void 0===b.allowResize&&(b.allowResize=!0),void 0===b.allowToggle&&(b.allowToggle=!0),void 0===b.allowSelect&&(b.allowSelect=!0),void 0===b.expanded&&(a.data&&a.data.expanded!==void 0?b.expanded=a.data.expanded:b.expanded=!1),b.headerCell=null,b._cells=[])}get properties(){return["allowToggle","allowResize","allowSelect","canNotify","cells","detailHeight","detailTemplate","cellHeight","expandHeight","data","enabled","expanded","filtered","freeze","grid","headerCell","height","index","id","minHeight","unbound","selected","showDetail","visible","visibleIndex"]}createElement(){const a=this,b=document.createElement("smart-grid-row");return a.element=b,b._initialize(a),b}getCell(a){const b=this,c=b.grid;if("string"==typeof a&&(a=c.columnByDataField[a]),!a)return null;if(!b["column_"+a.dataField]){const d=new Smart.Grid.Cell(b,a,c);return b["column_"+a.dataField]=d,d}else{const c=b["column_"+a.dataField];return c.column=a,c}}get cells(){const a=this;return a._cells&&a.grid&&a._cells.length===a.grid.columns.length?a._cells:(a.createCells(),a._cells)}get viewCells(){const a=this,b=[];for(let c=0;c<a.grid.viewColumns.length;c++){const d=a.grid.viewColumns[c];if(!a["column_"+d.dataField]){const c=new Smart.Grid.Cell(a,d,a.grid);a["column_"+d.dataField]=c,b.push(c)}else{const c=a["column_"+d.dataField];b.push(c)}}return a._viewCells=b,b}createCells(){const a=this,b=a.grid;a._cells=[];for(let c=0;c<b.viewColumns.length;c++){const d=b.viewColumns[c];if(!d.autoGenerated)if(!a["column_"+d.dataField]){const c=new Smart.Grid.Cell(a,d,b);a["column_"+d.dataField]=c,a._cells.push(c)}else{const b=a["column_"+d.dataField];a._cells.push(b)}}}toggle(){const a=this;a.element._handleExpandCollapse(!a.expanded)}expand(){const a=this;a.element._handleExpandCollapse(!0)}collapse(){const a=this;a.element._handleExpandCollapse(!1)}render(){const a=this;a.element.row=a,a.element._render()}setProperty(a,b){const c=this,d=c.getProperty(a);c[a]=b,d!==b&&(c.canNotify=!1,c.propertyChanged(a,d,b),c.canNotify=!0)}getProperty(a){const b=this;if("selected"===a){let c=!1;return b.grid._selection.cells["row"+b.id]&&(c=null),b.grid&&b.grid._selection.rows[b.id]&&(c=!0),b.grid.rows.canNotify=!1,b[a]=c,b.grid.rows.canNotify=!0,c}return b[a]}propertyChanged(a,b,c){const d=this;if("showDetail"===a){d.height=0;const a=d.element.rowDetail;if(d.grid.appearance.allowRowDetailToggleAnimation){const b=function(a){const b=d.grid._toggledRow;b&&("transform"===a.propertyName||"height"===a.propertyName)&&e(b)},e=function(a){a.grid.$.content.style.transition="",a.element.rowDetail.removeEventListener("transitionend",b),a.element.rowDetail.removeEventListener("transitioncancel",b),a.grid._toggledRow=null,a.element.removeAttribute("has-detail"),d.grid._refresh()};d.grid._toggledRow=d,a.addEventListener("transitionend",b),a.addEventListener("transitioncancel",b),c?(d.element.setAttribute("has-detail",""),d.element.toggleDetailButton.removeAttribute("toggled"),d.element.toggleDetailButton.classList.remove("smart-animate"),setTimeout(()=>{d.element.toggleDetailButton.classList.add("smart-animate"),d.element.toggleDetailButton.setAttribute("toggled",""),d.element.setAttribute("show-detail","")}),d.element.style.height=d.cellHeight+d.detailHeight+"px",d.grid._autoHeight&&(d.grid.$.content.style.transition="0.25s height ease-in-out",d.grid.$.content.style.height=parseInt(d.grid.$.content.style.height)+d.detailHeight+"px",d.grid.$.scrollView.style.height="auto"),a.classList.remove("smart-hidden"),a.style.height!==d.detailHeight+"px"&&(a.style.height=d.detailHeight+"px"),a.style.lineHeight!==d.detailHeight+"px"&&(a.style.lineHeight=d.detailHeight+"px"),a.style.top!==d.cellHeight+"px"&&(a.style.top=d.cellHeight+"px")):(d.element.setAttribute("has-detail",""),d.element.toggleDetailButton.removeAttribute("toggled"),d.grid._autoHeight&&(d.grid.$.content.style.transition="0.25s height ease-in-out",d.grid.$.content.style.height=parseInt(d.grid.$.content.style.height)-d.detailHeight+"px",d.grid.$.scrollView.style.height="auto"),setTimeout(()=>{d.element.style.height=d.cellHeight+"px",d.element.removeAttribute("show-detail")}))}else d.grid._refresh()}if("selected"===a){if(c?d.grid._selection.rows[d.id]=!0:!1===c&&d.grid._selection.rows[d.id]&&delete d.grid._selection.rows[d.id],!d.element)return;d.grid._recycle()}"visible"===a&&d.grid.refresh(),"expanded"!==a||d.expandHeight||d.grid.refresh(),"height"!==a||d.expandHeight||d.cellHeight===c||(d.cellHeight=c,d.grid.refresh()),"freeze"===a&&(!0===c||"near"===c?d.grid._frozenNearRows.push(d):"far"===c?d.grid._frozenFarRows.push(d):(d.grid._frozenNearRows.splice(d.grid._frozenNearRows.indexOf(d),1),d.grid._frozenFarRows.splice(d.grid._frozenFarRows.indexOf(d),1)),d.grid._recycle())}}),Smart("smart-grid-row",class extends Smart.BaseElement{static get properties(){return{}}get isUtilityElement(){return!0}get hasStyleObserver(){return!1}addThemeClass(){}addDefaultClass(){}_initialize(a){const b=this,c=a.grid,d=c._columnElements,e=c._frozenNearColumns,f=c._frozenFarColumns,g=document.createElement("div"),h=document.createElement("div"),i=document.createElement("div"),j=document.createDocumentFragment(),k=document.createDocumentFragment(),l=document.createDocumentFragment();h.classList.add("near","smart-grid-cell-container"),g.classList.add("center","smart-grid-cell-container"),i.classList.add("far","smart-grid-cell-container"),b.row=a,a.createCells(),b.addEventListener("mouseenter",function(){if(!(c.isScrolling||c.editing.isEditing)&&(b.commandBar&&(b.commandBar.parentNode.removeChild(b.commandBar),b.commandBar=null),c.editing.enabled&&c.editing.commandColumn.visible&&c.editing.commandColumn.inline&&!b.commandBar)){const a=document.createElement("div"),d=c._getCommandColumnCommandsTemplate();a.classList.add("smart-grid-command-bar"),a.innerHTML=d,g.appendChild(a),requestAnimationFrame(()=>{a.classList.add("show")}),c._updateCommandColumnCommandsVisibility(a,b.row),a.onmousedown=function(a){const d=a.path;let e=null;for(let b=0;b<d.length;b++)if(d[b].classList.contains("smart-grid-command-item")){e=d[b];break}if(!e,e){const d=e.getAttribute("command");c._applyCommand(d,[b.row]),b.commandBar&&(b.commandBar.parentNode.removeChild(b.commandBar),b.commandBar=null),b.removeAttribute("hover"),a.stopPropagation(),a.preventDefault()}},b.commandBar=a}}),b.addEventListener("mouseleave",function(){c.isScrolling||c.editing.isEditing||b.commandBar&&(b.commandBar.classList.remove("show"),b.commandBar.addEventListener("transitionend",function(){b.commandBar&&(b.commandBar.parentNode.removeChild(b.commandBar),b.commandBar=null)}),b.commandBar.addEventListener("transitioncancel",function(){b.commandBar&&(b.commandBar.parentNode.removeChild(b.commandBar),b.commandBar=null)}))});for(let b=0;b<e.length;b++){const c=e[b],d=a.getCell(c),f=d.createElement();k.appendChild(f)}for(let b=0;b<f.length;b++){const c=f[b],d=a.getCell(c),e=d.createElement();l.appendChild(e)}for(let c=0;c<d.length;c++){const e=d[c],f=e.column;if(!e.parentNode||!f)break;const g=a.getCell(f),h=g.createElement();f&&f._treeColumn&&(b.toggleButton=h.toggleButton),j.appendChild(h)}h.appendChild(k),g.appendChild(j),i.appendChild(l);const m=document.createElement("div");m.classList.add("smart-grid-row-detail","smart-hidden","smart-animate");const n=document.createElement("div");n.classList.add("smart-grid-row-sub-container","smart-hidden"),0<c._adaptiveLayout&&(h.classList.add("smart-visibility-hidden"),g.classList.add("smart-visibility-hidden"),i.classList.add("smart-visibility-hidden")),b._rowFragment=document.createDocumentFragment(),b._rowFragment.appendChild(h),b._rowFragment.appendChild(g),b._rowFragment.appendChild(i),b._rowFragment.appendChild(m),b._rowFragment.appendChild(n),b.appendChild(b._rowFragment),b.cellsNearContainerElement=b.children[0],b.cellsContainerElement=b.children[1],b.cellsFarContainerElement=b.children[2],b.rowDetail=b.children[3],b.rowContainer=b.children[4],c.rowHeight&&"auto"!==c.rowHeight&&(b.style.height=c.rowHeight+"px")}get enableShadowDOM(){return!1}_handleExpandCollapse(a){const b=this,c=b.row,d=c.grid;if(!c.allowToggle)return null;d._toggledRow=c;const e=function(){const a=d._toggledRow;d._refresh(),d._refreshRowHierarchy();let b=0;for(let a=0;a<d.rowHierarchy.length;a++){const c=d.rowHierarchy[a];for(let a=c.parent;a;)a.id===d._toggledRow.id&&(b+=c.height),a=a.parent}const c=d._scrollView.scrollTop,e=d._contentHeight-(a.cellHeight+a.top-c);a.expandHeight=Math.min(e,b),a.height=a.cellHeight+a.expandHeight},f=d.dataSource.virtualDataSourceOnExpand&&a&&!0!==c.data._loaded;if(!d.appearance.allowRowToggleAnimation||f)d.rows.canNotify=!1,c.expanded=a,d.rows.canNotify=!0,f&&(c.data._loaded=!0,c.data.expanded=a,d._virtualDataRequest("expand")),d._toggledRow=null,d._refresh(),f&&d.appearance.allowRowToggleAnimation&&(b.toggleButton.removeAttribute("toggled"),b.toggleButton.classList.remove("smart-animate"),setTimeout(()=>{b.toggleButton.classList.add("smart-animate"),b.toggleButton.setAttribute("toggled","")},50));else{const f=function(a){a.height=a.cellHeight,d.$.content.style.transition="",a.element.rowContainer.innerHTML="",a.element.rowContainer.classList.add("smart-hidden"),a.element.rowContainer.removeEventListener("transitionend",g),a.element.rowContainer.removeEventListener("transitioncancel",g),a.element.rowContainer.style.height="",a.element.rowContainer.style.transform="",a.element.rowContainer.style.transition="",a.element.rowContainer.classList.remove("smart-animate"),a.element.toggleButton.classList.remove("smart-animate"),d._refresh()},g=function(a){const c=d._toggledRow;b._toggleTimer=null,d._toggledRow=null,c&&("transform"===a.propertyName||"height"===a.propertyName)&&setTimeout(()=>{f(c)},50)};if(b._toggleTimer){clearTimeout(b._toggleTimer);const a=d._toggledRow;d._toggledRow=null,f(a)}b._toggleTimer=setTimeout(()=>{const f=function(){e(),d._recycle(!1),b.style.overflow="hidden",b.style.height="auto",b.style.lineHeight=c.cellHeight+"px"};a?(c.expanded=!0,f(),b.rowContainer.style.transform="scaleY(0)",b.rowContainer.style.height="0px",b.toggleButton.removeAttribute("toggled"),d._autoHeight&&(d.$.content.style.height=parseInt(d.$.content.style.height)-c.expandHeight+"px"),setTimeout(function(){b.toggleButton.classList.add("smart-animate"),b.toggleButton.setAttribute("toggled",""),b.rowContainer.addEventListener("transitionend",g),b.rowContainer.addEventListener("transitioncancel",g),d._autoHeight&&(d.$.content.style.transition="0.25s height ease-in-out",d.$.content.style.height=parseInt(d.$.content.style.height)+c.expandHeight+"px"),b.rowContainer.classList.add("smart-animate"),b.rowContainer.style.height=c.expandHeight+"px",b.rowContainer.style.transform="scaleY(1)"})):(f(),c.expanded=!1,b.rowContainer.style.transform="scaleY(0)",b.rowContainer.style.height="0px",d._autoHeight&&(d.$.content.style.height=parseInt(d.$.content.style.height)-c.expandHeight+"px",d.$.content.style.transition="",d.$.content.style.height=parseInt(d.$.content.style.height)+c.expandHeight+"px"),b.rowContainer.style.height=c.expandHeight+"px",b.rowContainer.style.transform="scaleY(1)",b.toggleButton.setAttribute("toggled",""),b.toggleButton.classList.add("smart-animate"),setTimeout(function(){b.toggleButton.removeAttribute("toggled",""),d._autoHeight&&(d.$.content.style.transition="0.25s height ease-in-out",d.$.content.style.height=parseInt(d.$.content.style.height)-c.expandHeight+"px"),b.rowContainer.addEventListener("transitionend",g),b.rowContainer.addEventListener("transitioncancel",g),b.rowContainer.classList.add("smart-animate"),b.rowContainer.style.transform="scaleY(0)",b.rowContainer.style.height="0px"},0))},50)}}_renderAddNewRow(){const a=this,b=a.row,c=b.grid,d=b.element,e=new Smart.Grid.Cell(b,c.columns[0],c);b.visible?d.classList.remove("smart-hidden"):d.classList.add("smart-hidden"),d.innerHTML="<smart-grid-cell><div>"+c.localize("addNewRow")+"</div></smart-grid-cell>",d.firstChild.firstChild.classList.add("align-center"),d.firstChild.classList.add("smart-grid-column-border-collapse"),d.firstChild.setAttribute("freeze",""),d.firstChild.setAttribute("addNewRow",""),d.firstChild.style.width="100%",0<c._scrollView.vScrollBar.offsetWidth&&(d.firstChild.style.width="calc(100% - "+(-1+c._scrollView.vScrollBar.offsetWidth)+"px)"),d.firstChild.cell=e,0<c._rowGap&&b!==c.rows[c.rows.length-1]?(a.style.marginBottom=c._rowGap+"px",parseInt(a.style.height)-c._rowGap!==b.height&&(a.style.height=b.height-c._rowGap+"px"),parseInt(a.style.lineHeight)-c._rowGap!==b.height&&(a.style.lineHeight=b.height-c._rowGap+"px")):(a.style.marginBottom="",parseInt(a.style.height)!==b.height&&(a.style.height=b.height+"px"),parseInt(a.style.lineHeight)!==b.height&&(a.style.lineHeight=b.height+"px"))}_renderEmpty(){const a=this;a.classList.add("smart-hidden")}_renderAdaptive(){var a=Math.min;const b=this,c=b.row,d=c.grid;let e=!1;if(d._toggledRow&&d.appearance.allowRowToggleAnimation&&d._toggledRow.expanded)for(let a=c.parent;a;){if(a.id===d._toggledRow.id){const c=a.element.adaptiveDetail;b.classList.add("smart-hidden"),b.toggleButton.classList.add("smart-hidden"),e=!0,c.appendChild(b);break}a=a.parent}const f=b.adaptiveDetail;if(b.row=c,b.visible=c.visible,b.style.height!==c.height+"px"&&(b.style.height=c.height+"px"),b.style.lineHeight!==c.height+"px"&&(b.style.lineHeight=c.height+"px"),f.classList.remove("smart-hidden"),f.style.height!==c.adaptiveHeight+"px"&&(f.style.height=c.adaptiveHeight+"px"),f.style.lineHeight!==c.adaptiveHeight+"px"&&(f.style.lineHeight=c.adaptiveHeight+"px"),c.expandHeight){if(c.expanded){const e=a(d._clientSize.height,c.height+c.expandHeight)+"px";b.style.height=e,b.style.lineHeight=e}const e=a(d._clientSize.height,c.height+c.expandHeight)+"px";f.style.height=e,f.style.lineHeight=e}else f.innerHTML="";f.style.top=e?c.cellHeight+"px":"0px";const g=document.createDocumentFragment();let h=0,j=0;for(let a=0;a<d.viewColumns.length;a++){const e=d.viewColumns[a];if(e.autoGenerated)continue;const f=e.createElement(),i=c.getCell(e),k=i.createElement();if(void 0!==c.label){g.appendChild(k),k.classList.add("smart-grid-adaptive-cell"),k.style.height=c.cellHeight+"px",k.style.lineHeight=c.cellHeight+"px",k.style.left="0px",k.style.top="0px",i.render(),k.style.width="100%";break}k.classList.add("smart-grid-adaptive-cell"),f.classList.add("smart-grid-adaptive-column"),e.render(),b._renderCell(c,e,k);const l=1===d._adaptiveLayout?"100%":"50%";f.style.width=l,f.style.height=c.cellHeight+"px",f.style.lineHeight=c.cellHeight+"px",f.style.top=h+"px",f.classList.remove("smart-visibility-hidden"),k.style.width=l,k.style.height=c.cellHeight+"px",k.style.lineHeight=c.cellHeight+"px",k.style.top=h+c.cellHeight+"px","100%"==l?(f.style.left="0px",k.style.left="0px"):0===j?(f.style.left="0px",k.style.left="0px",j="50%"):(f.style.left="50%",k.style.left="50%"),0==(a+1)%d._adaptiveLayout&&(j=0,h+=2*c.cellHeight),g.appendChild(f),g.appendChild(k)}f.appendChild(g),b.visible?b.classList.remove("smart-hidden"):b.classList.add("smart-hidden")}_renderCell(a,b,c){if(!b)return void c.classList.add("smart-hidden");let d=a.getCell(b);d.element!==c&&(d._styleChanged=!0),c.cell!==d&&(c.cell.background!==d.background||c.cell.borderColor!==d.borderColor||c.cell.color!==d.color||c.cell.fontSize!==d.fontSize||c.cell.fontFamily!==d.fontFamily||c.cell.fontWeight!==d.fontWeight||c.cell.fontStyle!==d.fontStyle)&&(d._styleChanged=!0),d.element=c,c.cell=d,d.render(),b&&b.rowNumbersColumn&&(a.header=c,c.setAttribute("data-id",a.id))}_alternate(){const a=this,b=a.row,c=b.grid,d=c.appearance.alternationStart,e=0<c.appearance.alternationEnd?c.appearance.alternationEnd:1/0;if(!(0>=c.appearance.alternationCount)&&(a.removeAttribute("alternation-index"),b.visibleIndex>=d&&b.visibleIndex<=e)){const e=(b.visibleIndex-d)%c.appearance.alternationCount;a.setAttribute("alternation-index",e)}}_renderDetail(a){const b=this,c=b.row.grid,d=b.row;let e=d.id,f=d.detailTemplate||c.rowDetail.template;if(f.startsWith("#")&&(f=document.querySelector(f)),d._detail)return a.firstChild===d._detail?void(c.onRowDetailUpdated&&c.onRowDetailUpdated(d.index,d,a.firstChild)):(a.firstChild&&a.removeChild(a.firstChild),a.appendChild(d._detail),void(c.onRowDetailUpdated&&c.onRowDetailUpdated(d.index,d,a.firstChild)));if(f instanceof HTMLTemplateElement){const b=f.content.cloneNode(!0).firstElementChild;e=e.toString(),e=e.replace(/'/ig,"\\'"),e=e.replace(/"/ig,"\\\"");let c=b.outerHTML.replace(/{{value}}/ig,e).replace(/{{id}}/ig,d.id);for(let a in 0<=c.indexOf("{{value=")&&(e?(c=c.substring(0,c.indexOf("{{value="))+e+c.substring(c.indexOf("}")),c=c.replace(/}/ig,""),c=c.replace(/{/ig,"")):(c=c.replace(/{{value=/ig,""),c=c.replace(/}}/ig,""))),c="<div>"+c+"</div>",d.data)c=c.replace("{{"+a+"}}",d.data[a]);a.innerHTML!==c&&(a.innerHTML=c)}else{let b="<div>"+f.replace(/{{value}}/ig,e).replace(/{{id}}/ig,d.id)+"</div>";for(let a in d.data)b=b.replace("{{"+a+"}}",d.data[a]);a.innerHTML!==b&&(a.innerHTML=b)}c.onRowDetailInit&&c.onRowDetailInit(d.index,d,a.firstChild),d._detail=a.firstChild}_render(){let a=this;const b=a.row,c=b.grid,d=b.getProperty("selected");if(!1===d&&a.hasAttribute("selected")?a.removeAttribute("selected"):!0===d?a.setAttribute("selected",""):null===d&&a.setAttribute("selected","indeterminate"),a.hasAttribute("unbound")&&a.removeAttribute("unbound"),b.unbound&&a.setAttribute("unbound",""),!c._toggledRow&&a.classList.contains("smart-animate"))return a.classList.remove("smart-animate"),a.rowContainer.innerHTML="",a.rowContainer.classList.add("smart-hidden"),c._refreshLayout(),void c._recycle();if(b.adaptiveHeight&&!c._responsiveLayout)return void a._renderAdaptive();if(0===c.columns.length)return void a._renderEmpty();if(b.addNewRow)return void a._renderAddNewRow();if(c._toggledRow&&(b.id===c._toggledRow.id?a.setAttribute("toggle",""):a.hasAttribute("toggle")&&a.removeAttribute("toggle")),c._toggledRow&&c.appearance.allowRowToggleAnimation){let d=b.parent;if(!c._toggledRow.expanded&&c._toggledRow.id===b.id){const b=a.rowContainer;for(let a=0;a<b.children.length;a++){const d=b.children[a],e=d.getAttribute("data-id"),f=c.rowById[e];d.getAttribute("data-rendered")||(d.setAttribute("data-rendered",!0),f.element=d,f.render())}}for(;d;){if(d.id===c._toggledRow.id){const e=d.element.rowContainer;if(c._toggledRow.expanded){a.classList.add("smart-hidden");let d=b.createElement(c);for(let a=0;a<e.children.length;a++){const c=e.children[a];if(c.getAttribute("data-id")===b.id.toString())return void(d=c)}b.element=d,e.appendChild(d),e.classList.remove("smart-hidden"),d.row=b,a=d}break}d=d.parent}}a._alternate();const e=parseFloat(c.$.columnNearContainer.style.width),f=parseFloat(c.$.columnContainer.style.width),g=parseFloat(c.$.columnFarContainer.style.width),h=a.children[1],i=a.children[0],j=a.children[2];if(j.classList.remove("vscroll"),c.computedVerticalScrollBarVisibility&&j.classList.add("vscroll"),a.hasAttribute("group")&&a.removeAttribute("group"),a.hasAttribute("tree")&&a.removeAttribute("tree"),a.hasAttribute("level")&&a.removeAttribute("level"),a.hasAttribute("leaf")&&a.removeAttribute("leaf"),a.hasAttribute("expanded")&&a.removeAttribute("expanded"),a.hasAttribute("summary")&&a.removeAttribute("summary"),a.hasAttribute("filter")&&a.removeAttribute("filter"),null===b.filtered&&a.setAttribute("filter","indeterminate"),c.dataSource.groupBy&&0<c.dataSource.groupBy.length?(a.setAttribute("level",b.level),b.expanded&&a.setAttribute("expanded",""),void 0!==b.label&&b.level===c.dataSource.groupBy.length-1&&a.setAttribute("leaf",""),void 0===b.label?a.setAttribute("leaf",""):a.setAttribute("group",""),b.summaryRow&&a.setAttribute("summary",""),a.toggleButton&&a.toggleButton.classList.remove("smart-hidden")):c.dataSource.boundHierarchy?(a.setAttribute("level",b.level),b.expanded&&a.setAttribute("expanded",""),b.leaf&&a.setAttribute("leaf",""),b.summaryRow&&a.setAttribute("summary",""),a.toggleButton&&a.toggleButton.classList.remove("smart-hidden")):(b.canNotify=!1,b.leaf=!0,b.expanded=!1,b.summaryRow=!1,b.level=0,a.toggleButton&&a.toggleButton.classList.add("smart-hidden"),b.canNotify=!0),a.setAttribute("data-id",b.id),a.visible=b.visible,a.cellsNearContainerElement.classList.remove("smart-visibility-hidden"),a.cellsContainerElement.classList.remove("smart-visibility-hidden"),a.cellsFarContainerElement.classList.remove("smart-visibility-hidden"),a.removeAttribute("rowspan"),0<c._rowGap&&b!==c.rows[c.rows.length-1]?(a.style.marginBottom=c._rowGap+"px",parseInt(a.style.height)-c._rowGap!==b.height&&(a.style.height=b.height-c._rowGap+"px"),parseInt(a.style.lineHeight)-c._rowGap!==b.height&&(a.style.lineHeight=b.height-c._rowGap+"px")):(a.style.marginBottom="",parseInt(a.style.height)!==b.height&&(a.style.height=b.height+"px"),parseInt(a.style.lineHeight)!==b.height&&(a.style.lineHeight=b.height+"px")),h.style.left!==-c._scrollView.scrollLeft+"px"&&(h.style.left=-c._scrollView.scrollLeft+"px"),c.rowDetail.enabled){const c=a.rowDetail;a.removeAttribute("show-detail"),b.showDetail?(c.classList.remove("smart-hidden"),a.setAttribute("show-detail",""),c.style.height!==b.detailHeight+"px"&&(c.style.height=b.detailHeight+"px"),c.style.lineHeight!==b.detailHeight+"px"&&(c.style.lineHeight=b.detailHeight+"px"),c.style.top!==b.cellHeight+"px"&&(c.style.top=b.cellHeight+"px"),a._renderDetail(c)):c.classList.add("smart-hidden")}i.classList.remove("smart-hidden"),j.classList.remove("smart-hidden"),i.style.width!==e+"px"&&(i.style.width=e+"px"),h.style.width!==f+"px"&&(h.style.width=f+"px"),j.style.width!==g+"px"&&(j.style.width=g+"px"),i.style.height=b.cellHeight+"px",h.style.height=b.cellHeight+"px",j.style.height=b.cellHeight+"px",0===g&&j.classList.add("smart-hidden"),0===e&&i.classList.add("smart-hidden"),0<e&&parseInt(e)===parseInt(c._autoGeneratedColumnsNearWidth),0<g&&parseInt(g)===parseInt(c._autoGeneratedColumnsFarWidth)&&j.classList.add("border-collapse");for(let d=0;d<c._frozenNearColumns.length;d++){const e=c._frozenNearColumns[d];let f=a.children[0].children[d];if(!f){const c=b.getCell(e);f=c.createElement(),a.children[0].appendChild(f)}a._renderCell(b,e,f)}for(let d=0;d<c._frozenFarColumns.length;d++){const e=c._frozenFarColumns[d];let f=a.children[2].children[d];if(!f){const c=b.getCell(e);f=c.createElement(),a.children[2].appendChild(f)}if(e.adaptiveColumn){e.adaptiveVisible?f.classList.remove("smart-hidden"):f.classList.add("smart-hidden");continue}a._renderCell(b,e,f)}for(let d=0;d<h.children.length;d++){const e=c._columnElements[d+c._frozenNearColumns.length];if(!e){let c=a.children[1].children[d];a._renderCell(b,null,c)}}for(let d=0;d<c._columnElements.length;d++){const e=c._columnElements[d],f=e.column;if(!e.parentNode||!f){if(e&&!f){let b=a.children[1].children[d];b&&b.classList.add("smart-visibility-hidden")}continue}let g=a.children[1].children[d];if(!g){e.column||(e.column=f);const c=b.getCell(f);g=c.createElement(),a.children[1].appendChild(g)}if(e.classList.contains("smart-visibility-hidden")){g.classList.add("smart-visibility-hidden");continue}else g.classList.remove("smart-visibility-hidden");a._renderCell(b,f,g)}a.visible?a.classList.remove("smart-hidden"):a.classList.add("smart-hidden")}template(){return""}});