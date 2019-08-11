
/* Smart HTML Elements v4.1.0 (2019-Aug) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-gauge",class extends Smart.Tank{static get properties(){return{analogDisplayType:{value:"needle",allowedValues:["needle","fill","line"],type:"string"},animationDuration:{value:300,type:"number"},digitalDisplay:{value:!1,type:"boolean"},digitalDisplayPosition:{value:"bottom",allowedValues:["top","bottom","right","left","center"],type:"string"},drawNeedle:{value:null,type:"function?"},endAngle:{value:210,type:"number"},needlePosition:{value:"center",allowedValues:["center","edge"],type:"string"},ranges:{value:[],type:"array"},scalePosition:{value:"inside",allowedValues:["outside","inside","none"],type:"string"},showRanges:{value:!1,type:"boolean"},sizeMode:{value:"circle",allowedValues:["circle","auto"],type:"string"},startAngle:{value:-30,type:"number"}}}static get listeners(){return{down:"_downHandler",resize:"_resizeHandler",styleChanged:"_styleChangedHandler","document.move":"_documentMoveHandler","document.up":"_documentUpHandler","document.selectstart":"_selectStartHandler",keydown:"_keydownHandler",move:"_trackMoveHandler"}}static get requires(){return{"Smart.Utilities.Draw":"smart.draw.js","Smart.NumericTextBox":"smart.numerictextbox.js"}}static get styleUrls(){return["smart.gauge.css"]}template(){return"<div id=\"container\">\n                <div id=\"svgContainer\" class=\"smart-svg-container\"></div>\n                <div class=\"smart-digital-display-container\">\n                    <smart-numeric-text-box id=\"digitalDisplay\"\n                                            class=\"smart-digital-display\"\n                                            decimal-separator=\"[[decimalSeparator]]\"\n                                            max=\"[[max]]\"\n                                            min=\"[[min]]\"\n                                            name=\"[[name]]\"\n                                            readonly\n                                            input-format=\"[[scaleType]]\"\n                                            scientific-notation=\"[[scientificNotation]]\"\n                                            show-unit=\"[[showUnit]]\"\n                                            unit=\"[[unit]]\"\n                                            unfocusable\n                                            validation=\"interaction\"\n                                            word-length=\"[[wordLength]]\">\n                    </smart-numeric-text-box>\n                </div>\n            </div>"}attached(){const e=this;super.attached();e.isCompleted&&(e._trackListener&&(e._trackListener=new Smart.Utilities.InputEvents(e._track),e._trackListener.down(function(t){e._SVGElementDownHandler(t)})),e._fillListener&&(e._fillListener=new Smart.Utilities.InputEvents(e._fill),e._fillListener.down(function(t){e._SVGElementDownHandler(t)})),e._lineListener&&(e._lineListener=new Smart.Utilities.InputEvents(e._line),e._lineListener.down(function(t){e._SVGElementDownHandler(t)})))}detached(){const e=this;super.detached(),e._unlisten()}ready(){super.ready()}getOptimalSize(){const e=this;return e._renderingSuspended?{width:0,height:0}:"circle"===e.sizeMode?{width:e.offsetWidth,height:e._updateSize(!0)}:{width:e.offsetWidth,height:e.offsetHeight}}val(e){const t=this;if(void 0===e)return t._getEventValue();if("date"===t.mode&&(e=Smart.Utilities.DateTime.validateDate(e),e=e.getTimeStamp()),t._numericProcessor.compare(e,t.value)){const i=t.value;if(t._validateValue(e,t.value),!t._isVisible()||t._renderingSuspended)return void(t._renderingSuspended=!0);t._animate(i)}}_createElement(){const e=this;return"numeric"===e.mode?e._getEventValue=function(){return e.value}:(e._handleDateScale(),e.digitalDisplay=!1),e._numericProcessor=new Smart.Utilities.NumericProcessor(e,"scaleType"),e._numberRenderer=new Smart.Utilities.NumberRenderer,e._draw=new Smart.Utilities.Draw(e.$.svgContainer),e._isVisible()?void(e._renderingSuspended=!1,e._setSettingsObject(),e._wordLengthNumber=e._numericProcessor.getWordLength(e.wordLength),e._measurements={},e._validateInitialPropertyValues(),e._getMeasurements(),e._setDrawVariables(),e._getRange(),e._numericProcessor.getAngleRangeCoefficient(),"numeric"!==e.mode&&e.coerce?e._coerceInitialDateValue=!0:e._validateValue(),e._initTickIntervalHandler(),e._renderAnalogItems(),delete e._preventResizeHandler,e._setFocusable(),e._setUpdatePointerMethod()):void(e._renderingSuspended=!0)}propertyChangedHandler(e,t,i){function a(i,a,l,r){const s=i&&a?"both":e;n._validateMinMax(s,!1,t);"logarithmicScale"!==e&&"scaleType"!==e&&("wordLength"!==e&&n[e]===t||"wordLength"===e&&n.min===l&&n.max===r)||(n._setDrawVariables(),n._getRange(),n._numericProcessor.getAngleRangeCoefficient(),n._initTickIntervalHandler(),n._renderAnalogItems(),n._validateValue(n.value,n.value),n._updatePointer())}const n=this;if(!n._isVisible()||n._renderingSuspended)return void(n._renderingSuspended=!0);switch(e){case"analogDisplayType":delete n._customSVGElements,n._getMeasurements(),"needle"===i&&"center"===n.digitalDisplayPosition?n.digitalDisplayPosition="bottom":"needle"===t&&"bottom"===n.digitalDisplayPosition&&(n.digitalDisplayPosition="center"),n._renderAnalogItems(),n._setUpdatePointerMethod();break;case"coerce":if(i){const e=n.value;n._validateValue(e),n._updatePointer(),n._valueBeforeCoercion=e}else void 0!==n._valueBeforeCoercion&&(n._validateValue(n._valueBeforeCoercion),n._updatePointer());break;case"customInterval":i?(n._customTicks&&(n.customTicks=n._customTicks),n._numericProcessor.validateCustomTicks()):"date"===n.mode&&(n._customTicks=n.customTicks),n._initTickIntervalHandler(),n._renderAnalogItems(),n._coerceCustomInterval();break;case"customTicks":if("date"===n.mode&&!n.customInterval)return n._customTicks=i,void(n.customTicks=t);n._numericProcessor.validateCustomTicks(),n.customInterval&&(n._initTickIntervalHandler(),n._renderAnalogItems(),n._coerceCustomInterval());break;case"dateLabelFormatString":case"showUnit":case"unit":n._initTickIntervalHandler(),n._renderAnalogItems();break;case"decimalSeparator":case"scientificNotation":if("date"===n.mode)return;n._initTickIntervalHandler(),n._renderAnalogItems();break;case"digitalDisplay":case"digitalDisplayPosition":if("date"===n.mode)return void("digitalDisplay"===e&&(n.digitalDisplay=!1));n._updateSize();break;case"mechanicalAction":case"messages":case"readonly":break;case"disabled":case"unfocusable":n._setFocusable();break;case"drawNeedle":if("needle"!==n.analogDisplayType)return;null===t&&n._draw.removeElement(n._needle),null===i?(n._renderAnalogItems(),delete n._customSVGElements):n._updatePointer();break;case"endAngle":case"startAngle":n._validateAngles(),n._numericProcessor.getAngleRangeCoefficient(),n._renderAnalogItems();break;case"interval":n._numericProcessor.validateInterval(n.interval),n._validateValue(),n._updatePointer();break;case"inverted":case"labelFormatFunction":case"showRanges":n._renderAnalogItems();break;case"labelsVisibility":if("all"===t&&"endPoints"===i||"endPoints"===t&&"all"===i)return;n._getMeasurements(),n._renderAnalogItems();break;case"logarithmicScale":if("date"===n.mode)return void(n.logarithmicScale=!1);n._initTickIntervalHandler(),a(!0,!0);break;case"max":case"min":"date"===n.mode&&(delete n._dateInterval,n[e]=Smart.Utilities.DateTime.validateDate(i).getTimeStamp()),a("min"===e,"max"===e);break;case"mode":n.mode=t;break;case"needlePosition":"needle"===n.analogDisplayType&&n._updatePointer();break;case"precisionDigits":case"significantDigits":if("date"===n.mode)return;"precisionDigits"===e&&"integer"===n.scaleType&&n.error(n.localize("noInteger",{elementType:n.nodeName.toLowerCase(),property:e})),"significantDigits"===e&&null!==n.precisionDigits?n.precisionDigits=null:"precisionDigits"==e&&null!==n.significantDigits&&(n.significantDigits=null),null!==i&&(n.$.digitalDisplay.precisionDigits=n.precisionDigits,n.$.digitalDisplay.significantDigits=n.significantDigits),n._initTickIntervalHandler(),n._renderAnalogItems();break;case"ranges":if(!n.showRanges)return;n._renderAnalogItems();break;case"scaleType":if("date"===n.mode)return void(n.scaleType="integer");n._numericProcessor=new Smart.Utilities.NumericProcessor(n,"scaleType"),a(!0,!0);break;case"scalePosition":case"ticksPosition":n._getMeasurements(),n._renderAnalogItems();break;case"sizeMode":n._preventResizeHandler=!0,"circle"===i?(n.$.container.removeAttribute("style"),n.style.height=n.offsetWidth+"px",n._measurements.cachedHeight=n.offsetHeight):(n.$.container.style.height=n.offsetWidth+"px",n._updateSize());break;case"theme":super.propertyChangedHandler(e,t,i),n._getMeasurements(),n._renderAnalogItems();break;case"ticksVisibility":if("minor"===t&&"major"===i||"major"===t&&"minor"===i)return;n._getMeasurements(),n._renderAnalogItems();break;case"validation":"strict"===i&&n._validateValue(n.value,n.value);break;case"value":{"date"===n.mode&&(i=Smart.Utilities.DateTime.validateDate(i),i=i.getTimeStamp()),n._validateValue(i,t);const e=i.toString();n.value.toString()===e&&(n._drawValue=n.logarithmicScale?Math.log10(e).toString():e),n._animate(t);break}case"wordLength":if("date"===n.mode)return void(n.wordLength="uint64");n._wordLengthNumber=n._numericProcessor.getWordLength(n.wordLength),"integer"===n.scaleType&&a(!0,!0,n.min,n.max);}}_addAnalogDisplay(){const e=this,t=e._measurements,i=t.radius,a=e._draw;if("needle"===e.analogDisplayType){e._drawNeedle(!1);const n=(t.needleWidth+5)/2;e._centralCircle=a.circle(i,i,n,{class:"smart-needle-central-circle"}),e._minCoordinates.push(i-n),e._maxCoordinates.push(i+n)}else{const n=i-e._distance.trackDistance-t.trackBorderWidth/2-1;e._track=a.pieslice(i,i,n-t.trackWidth,n,e.startAngle,e.endAngle,0,{class:"smart-track"}),e._trackListener=new Smart.Utilities.InputEvents(e._track),e._trackListener.down(function(t){e._SVGElementDownHandler(t)})}}_calculateTickAndLabelDistance(){const e=this,t=e._measurements;if("none"===e.scalePosition)return e._plotLabels=!1,e._plotTicks=!1,t.innerRadius=t.radius,{majorTickDistance:0,minorTickDistance:0,labelDistance:0,needleDistance:0,trackDistance:0};const i=e._tickIntervalHandler.labelsSize,a=e._largestLabelSize||Math.max(i.minLabelSize,i.minLabelOtherSize,i.maxLabelSize,i.maxLabelOtherSize);let n,l,r,s=1,o=0;return e._largestLabelSize=a,"outside"===e.scalePosition&&(s=a,n=s+t.majorTickSize-t.minorTickSize,l=0),"needle"===e.analogDisplayType?(r="outside"===e.scalePosition?s+t.majorTickSize:s+t.majorTickSize+a,"none"===e.ticksVisibility&&(l=0,r-=t.majorTickSize),"none"===e.labelsVisibility&&(r-=a,"outside"===e.scalePosition&&(s-=a,n-=a))):"none"===e.labelsVisibility&&"none"===e.ticksVisibility?o=0:"outside"===e.scalePosition?"scale"===e.ticksPosition?("none"===e.labelsVisibility&&(s=1,n=1+t.majorTickSize-t.minorTickSize),o="none"===e.ticksVisibility?a:s+t.majorTickSize+2):"none"===e.labelsVisibility?(s=1,n=(t.trackWidth+t.trackBorderWidth)/4+1,o=0):(n-=(t.trackWidth+t.trackBorderWidth)/4,o=s-1):"scale"===e.ticksPosition?(s=t.trackWidth+1.5*t.trackBorderWidth+2,"none"===e.ticksVisibility&&(l=s)):n=(t.trackWidth+t.trackBorderWidth)/4+1,void 0===n&&(n=s),void 0===l&&(l=s+t.majorTickSize),t.innerRadius=t.radius-l,delete e._plotLabels,delete e._plotTicks,delete e._equalToHalfRadius,"inside"===e.scalePosition?t.innerRadius<a&&(e._plotLabels=!1,"scale"===e.ticksPosition?"needle"!==e.analogDisplayType&&t.innerRadius<t.majorTickSize&&(e._plotTicks=!1):(e._equalToHalfRadius=!0,t.innerRadius=t.radius/2)):t.radius-o-t.trackBorderWidth<t.trackWidth&&(t.trackWidth=t.radius-o-t.trackBorderWidth,t.lineSize=t.trackWidth+t.trackBorderWidth,"track"===e.ticksPosition&&(t.majorTickSize=t.lineSize,t.minorTickSize=t.majorTickSize/2,n=s+(t.majorTickSize-t.minorTickSize)/2)),{majorTickDistance:s,minorTickDistance:n,labelDistance:l,needleDistance:r,trackDistance:o}}_calculateTickInterval(){const e=this,t=e._tickIntervalHandler.getInterval("radial",e._drawMin,e._drawMax,e.$.container,e.logarithmicScale);t.major===e._majorTicksInterval?e._intervalHasChanged=!0:(e._intervalHasChanged=!0,e._majorTicksInterval=t.major),e._minorTicksInterval=t.minor,"date"===e.mode&&e._calculateDateInterval(t.major)}_computeNeedlePointsCenter(e,t){const i=this,a=i._measurements,n=a.innerRadius,l=a.radius,r=Math.sin(t),s=Math.cos(t);let o="inside"===i.scalePosition?.9*(n-i._largestLabelSize):.9*(n-i._distance.needleDistance);const d=l+o*r,c=l+o*s;return"M "+(l+e*s)+","+(l-e*r)+" L "+(l-e*s)+","+(l+e*r)+" L "+d+","+c+" Z"}_computeNeedlePointsEdge(e,t,i){const a=this,n=a._measurements.radius,l=n-a._distance.needleDistance,r=l-i,s=Math.sin(t),o=Math.cos(t),d=n+r*s,c=n+r*o;return"M "+(d+e*o)+","+(c-e*s)+" L "+(d-e*o)+","+(c+e*s)+" L "+(n+l*s)+","+(n+l*o)+" Z"}_documentMoveHandler(e){if(!this._dragging)return;const t=this,i=t._getAngleByCoordinate(e.pageX,e.pageY),a=t._getQuadrant(i),n=t._getRotationDirection();if(t._normalizedStartAngle===t.endAngle){let e;t.inverted?t._lockCW&&"cw"===n?(e=t._normalizedStartAngle,t._unlockRotation("_lockCW",i,a,e,{firstCondition:i<e,secondCondition:i>e})):t._lockCCW&&"ccw"===n&&(e=t.endAngle,t._unlockRotation("_lockCCW",i,a,e,{firstCondition:i>e,secondCondition:i<e})):t._lockCW&&"ccw"===n?(e=t.endAngle,t._unlockRotation("_lockCW",i,a,e,{firstCondition:i>e,secondCondition:i<e})):t._lockCCW&&"cw"===n&&(e=t._normalizedStartAngle,t._unlockRotation("_lockCCW",i,a,e,{firstCondition:i<e,secondCondition:i>e}))}else t._lockCW&&"ccw"===n&&!t._outsideRange&&10>t._numericProcessor._getAngleDifference(i,t._normalizedStartAngle)?t._lockCW=!1:t._lockCCW&&"cw"===n&&!t._outsideRange&&10>t._numericProcessor._getAngleDifference(i,t.endAngle)&&(t._lockCCW=!1);if(t._angle=i,t._quadrant=a,e.originalEvent&&(e.originalEvent.stopPropagation(),e.originalEvent.preventDefault()),t._lockCW||t._lockCCW)return;let l=t._numericProcessor.getValueByAngle(i);if(t._normalizedStartAngle===t.endAngle){const e=t._numericProcessor.lockRotation("cw"===n&&!t.inverted||"ccw"===n&&t.inverted,l);void 0!==e&&(l=e)}else"ccw"===n&&t._outsideEnd?t._lockCCW=!0:"cw"===n&&t._outsideStart&&(t._lockCW=!0);void 0!==l&&t._numericProcessor.compare(l,t.value)&&(cancelAnimationFrame(t._animationFrameId),t._updatePointer(l),"switchWhenReleased"===t.mechanicalAction?t._valueAtMoveEnd=l:t._numericProcessor.updateGaugeValue(l))}_documentUpHandler(){const e=this;if(e._dragging&&(e._lockCW=!1,e._lockCCW=!1,e._dragging=!1,e.removeAttribute("dragged"),"switchWhileDragging"!==e.mechanicalAction)){const t="switchUntilReleased"===e.mechanicalAction?e._valueAtDragStart:e._valueAtMoveEnd;e._numericProcessor.compare(t,e.value)&&("switchUntilReleased"===e.mechanicalAction&&e._animate(e.value,t),e._numericProcessor.updateGaugeValue(t))}}_downHandler(e,t){var i=Math.pow;const a=this,n=a.enableShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if("needle"!==a.analogDisplayType&&!t||a.disabled||a.readonly||(a.enableShadowDOM?n.getRootNode().host===a.$.digitalDisplay:a.$.digitalDisplay.contains(n))||!Smart.Utilities.Core.isMobile&&("buttons"in e&&1!==e.buttons||1!==e.which))return void e.stopPropagation();const l=e.pageX,r=e.pageY;if(a._measurements.center=a._getCenterCoordinates(),"needle"===a.analogDisplayType){const t=Math.sqrt(i(a._measurements.center.x-l,2)+i(a._measurements.center.y-r,2));if(t>a._measurements.radius)return void e.stopPropagation()}"switchUntilReleased"===a.mechanicalAction&&(a._valueAtDragStart=a.value),a._angle=a._getAngleByCoordinate(l,r),a._quadrant=a._getQuadrant(a._angle);const s=a._numericProcessor.getValueByAngle(a._angle);void 0!==s&&a._numericProcessor.compare(s,a.value)&&(a._animate(a.value,s),"switchWhenReleased"===a.mechanicalAction?a._valueAtMoveEnd=s:a._numericProcessor.updateGaugeValue(s)),a._dragging=!0,a.setAttribute("dragged","")}_animate(e,t){function a(){_=m(),o&&(_=Math.pow(10,_))}function n(){return p++,p===d?(_=t,void s._updatePointer(_)):void(s._updatePointer(_),a(),s._animationFrameId=requestAnimationFrame(n))}var l=Math.max,r=Math.log10;const s=this,o=s.logarithmicScale,d=l(1,Math.round(s.animationDuration/15));if(cancelAnimationFrame(s._animationFrameId),!s.hasAnimation||1===d)return void s._updatePointer(t);const c=s._numericProcessor;let _,m,g,u,p=1;void 0===t&&(t=s.value),e=parseFloat(c.validate(c.createDescriptor(e),s._minObject,s._maxObject)),t=parseFloat(c.validate(c.createDescriptor(t),s._minObject,s._maxObject)),o?(g=r(e),u=r(t)):(g=e,u=t);const h=Math.abs(u-g);m=t>e?function(){return Math.min(Smart.Utilities.Animation.Easings.easeInOutSine(p,g,h,d),u)}:function(){return l(2*g-Smart.Utilities.Animation.Easings.easeInOutSine(p,g,h,d),u)},a(),s._animationFrameId=requestAnimationFrame(n)}_drawFill(e,t){const i=this;if("needle"!==i.analogDisplayType){void 0===t&&(t=i._number);const a=i._measurements,n=a.radius,l=n-i._distance.trackDistance-a.trackBorderWidth/2-1;if("fill"===i.analogDisplayType){const r=i._numericProcessor.getAngleByValue(t,!0,!0);let s,o;i.inverted?(s=i.startAngle,o=r):(s=r,o=i.endAngle),e?i._fill.setAttribute("d",i._draw.pieSlicePath(n,n,l-a.trackWidth,l,s,o,0)):(i._fill=i._draw.pieslice(n,n,l-a.trackWidth,l,s,o,0,{class:"smart-value"}),i._fillListener=new Smart.Utilities.InputEvents(i._fill),i._fillListener.down(function(e){i._SVGElementDownHandler(e)}))}else{const r=l+a.trackBorderWidth/2,s=r-a.lineSize,o=i._numericProcessor.getAngleByValue(t),d=Math.sin(o),c=Math.cos(o),_=n+r*d,m=n+r*c,g=n+s*d,u=n+s*c;e?(i._line.setAttribute("x1",_),i._line.setAttribute("y1",m),i._line.setAttribute("x2",g),i._line.setAttribute("y2",u)):(i._line=i._draw.line(_,m,g,u,{class:"smart-line"}),i._lineListener=new Smart.Utilities.InputEvents(i._line),i._lineListener.down(function(e){i._SVGElementDownHandler(e)}))}}}_drawLabel(e,t,i,a){var n=Math.round;const l=this,s=l._measurements,o=s.radius,r={class:"smart-label"+(!1===a?"":" smart-label-middle"),"font-size":s.fontSize,"font-family":s.fontFamily,"font-weight":s.fontWeight,"font-style":s.fontStyle};t=l._formatLabel(t.toString(),!1);const d=l._draw.measureText(t,0,r),c=o-i-l._largestLabelSize/2,_=n(o+c*Math.sin(e))-d.width/2,m=n(o+c*Math.cos(e))-d.height/2,g=l._draw.text(t,_,m,d.width,d.height,0,r);l._minCoordinates.push(m),l._maxCoordinates.push(m+g.getBBox().height)}_drawNeedle(e,t){const a=this,i=a._measurements;t===void 0&&(t=a._number);const n=a._numericProcessor.getAngleByValue(t);if(!a.drawNeedle){let t;t="center"===a.needlePosition?a._computeNeedlePointsCenter(i.needleWidth/2,n):a._computeNeedlePointsEdge(i.needleWidth/2,n,i.needleLength),e?a._needle.setAttribute("d",t):a._needle=a._draw.path(t,{class:"smart-needle"})}else if(a._customSVGElements=a.drawNeedle(a,a._draw,i.radius,n,a._distance.needleDistance),a._customSVGElements){const e=a._customSVGElements[0].parentElement||a._customSVGElements[0].parentNode;for(let t=0;t<a._customSVGElements.length;t++)e.insertBefore(a._customSVGElements[t],a._centralCircle)}}_drawRanges(){const e=this,t=e._numericProcessor,a=e.ranges;if(!e.showRanges||0===a.length)return;const i=e._measurements,n=i.radius;let l,r,s,o;"needle"===e.analogDisplayType?(r=i.rangeSize,"inside"===e.scalePosition?l=n-1:(l=n-e._distance.needleDistance-2,"none"===e.labelsVisibility&&"none"===e.ticksVisibility&&(l+=1))):(l=n-e._distance.trackDistance-i.trackBorderWidth/2-1,r=i.trackWidth),e.inverted?(s="endValue",o="startValue"):(s="startValue",o="endValue");for(let d=0;d<a.length;d+=1){let i=a[d],c=t.validateColorRange(i[s]),_=t.validateColorRange(i[o]);const m=e._draw.pieslice(n,n,l-r,l,t.getAngleByValue(_,!0,!0),t.getAngleByValue(c,!0,!0),0,{class:"smart-range "+i.className});e._ranges.push(m)}}_drawTick(e,t,i){var a=Math.cos,n=Math.sin;const l=this,s=l._measurements,o=s.radius;let r,d="smart-tick";"major"===i?r=s.majorTickSize:(r=s.minorTickSize,d+=" smart-tick-minor");const c=t-r,_=o+t*n(e),m=o+t*a(e),g=o+c*n(e),u=o+c*a(e);l._draw.line(_,m,g,u,{class:d}),l._minCoordinates.push(Math.min(m,u)),l._maxCoordinates.push(Math.max(m,u))}_getAngleByCoordinate(e,t){const i=this,a=i._measurements.center,n=Math.atan2(t-a.y,e-a.x);let l=180*(-1*n)/Math.PI;return 0>l&&(l+=360),i._actualAngle=l,i._normalizedStartAngle===i.endAngle||function(e,t,i){for(;t<e;)t+=360;for(;i<e;)i+=360;return i>=e&&i<=t}(i._normalizedStartAngle,i.endAngle,l)?(i._outsideRange=!1,i._outsideStart=!1,i._outsideEnd=!1):(i._numericProcessor._getAngleDifference(l,i._normalizedStartAngle)<=i._numericProcessor._getAngleDifference(l,i.endAngle)?(l=i._normalizedStartAngle,i._outsideStart=!0,i._outsideEnd=!1):(l=i.endAngle,i._outsideEnd=!0,i._outsideStart=!1),i._outsideRange=!0),l}_getCenterCoordinates(){const e=this,t=e.$.container.getBoundingClientRect(),i=e._measurements.radius,a=document.body.scrollLeft||document.documentElement.scrollLeft,n=document.body.scrollTop||document.documentElement.scrollTop;return{x:t.left+a+i,y:t.top+n+i}}_getInlineColors(){const e=this;let t="",i="",a="";return e._track&&(t=e._track.style.fill),e._fill&&(i=e._fill.style.fill),e._line&&(a=e._line.style.stroke),[t,i,a]}_getMeasurements(){const e=this;if(!e._isVisible()||e._renderingSuspended)return void(e._renderingSuspended=!0);const t=e._measurements;t.cachedWidth=e.offsetWidth,t.cachedHeight=e.offsetHeight,t.radius=t.cachedWidth/2;const i=document.createElement("div");e.enableShadowDOM?e.shadowRoot.appendChild(i):e.appendChild(i),i.className="smart-tick",t.majorTickSize=i.offsetWidth,i.className+=" smart-tick-minor",t.minorTickSize=i.offsetWidth,i.className="smart-label";const a=window.getComputedStyle(i);t.fontSize=a.fontSize,t.fontFamily=a.fontFamily,t.fontWeight=a.fontWeight,t.fontStyle=a.fontStyle,t.trackWidth=0,t.trackBorderWidth=0,"needle"===e.analogDisplayType?(i.className="smart-needle",t.needleWidth=i.offsetWidth,t.needleLength=i.offsetHeight,i.className="smart-range",t.rangeSize=i.offsetWidth):(i.className="smart-track",t.trackBorderWidth=parseFloat(a.strokeWidth),t.trackWidth=Math.min(i.offsetWidth,t.radius-t.trackBorderWidth),t.lineSize=t.trackWidth+t.trackBorderWidth,"track"===e.ticksPosition&&(t.majorTickSize=t.lineSize,t.minorTickSize=t.majorTickSize/2)),e.enableShadowDOM?e.shadowRoot.removeChild(i):e.removeChild(i)}_getQuadrant(e){return 270<e?4:180<e?3:90<e?2:1}_getRotationDirection(){const e=this,t=e._getQuadrant(e._actualAngle);return e._actualAngle<e._angle&&(1!==t||4!==e._quadrant)||e._actualAngle>e._angle&&4===t&&1===e._quadrant?"cw":"ccw"}_initTickIntervalHandler(){const e=this;if(!e._isVisible()||e._renderingSuspended)return void(e._renderingSuspended=!0);const t=e._formatLabel(e.min,!1),i=e._formatLabel(e.max,!1);e._tickIntervalHandler=new Smart.Utilities.TickIntervalHandler(e,t,i,"smart-label",e._settings.size,"integer"===e.scaleType,e.logarithmicScale)}_keydownHandler(e){const t=this,i=t._getEventValue(),a=t._number.toString();"numeric"===t.mode?(t.value.toString()!==a&&(t.value=a,t.$.digitalDisplay.value=a),super._keydownHandler(e),t.value.toString()!==i&&t.$.fireEvent("change",{value:t.value,oldValue:i})):(t.value.toString()!==a&&(t._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(a),t.value=t._number,t.$.digitalDisplay.$.input.value=t._valueDate),super._keydownHandler(e),0!==t._valueDate.compare(i)&&t.$.fireEvent("change",{value:t._getEventValue(),oldValue:i}))}_normalizeAngle(e){return e%=360,0>e&&(e+=360),e}_renderAnalogItems(e){const t=this;if(!t._isVisible()||t._renderingSuspended)return void(t._renderingSuspended=!0);const i=t._getInlineColors();if(t._unlisten(),t._draw.clear(),delete t._needle,delete t._centralCircle,delete t._track,delete t._trackListener,delete t._fill,delete t._fillListener,delete t._line,delete t._lineListener,t._ranges=[],t._minCoordinates=[],t._maxCoordinates=[],!1!==e&&(delete t._largestLabelSize,t._distance=t._calculateTickAndLabelDistance()),!1!==t._plotTicks||!1!==t._plotLabels){t._calculateTickInterval();const i=t._cachedLabelsSize,a=Math.max(i.minLabelSize,i.minLabelOtherSize,i.maxLabelSize,i.maxLabelOtherSize);!1!==e&&t._largestLabelSize!==a&&(t._largestLabelSize=a,t._distance=t._calculateTickAndLabelDistance(),t._calculateTickInterval())}t._coerceInitialDateValue&&(t._validateValue(),delete t._coerceInitialDateValue),t._drawRanges(),t._addAnalogDisplay(),("none"!==t.ticksVisibility&&!1!==t._plotTicks||"none"!==t.labelsVisibility&&!1!==t._plotLabels)&&(t.customInterval||t._dateInterval?t._numericProcessor.addGaugeCustomTicks():t._numericProcessor.addGaugeTicksAndLabels()),t._drawFill(!1),t._updateSize(),t._restoreInlineColors(i[0],i[1],i[2])}_resizeHandler(){const e=this;if(e._preventResizeHandler)return void delete e._preventResizeHandler;if(!e._isVisible())return void(e._renderingSuspended=!0);if(e._renderingSuspended)return void e._createElement();const t=e._measurements;if(!(e._renderingSuspended||t.cachedWidth===e.offsetWidth&&t.cachedHeight===e.offsetHeight)){if("circle"===e.sizeMode)e.offsetWidth!==e.offsetHeight&&(t.cachedWidth===e.offsetWidth?t.cachedHeight!==e.offsetHeight&&(e.style.width=e.offsetHeight+"px",e._preventResizeHandler=!0):(e.style.height=e.offsetWidth+"px",e._preventResizeHandler=!0));else{if(t.cachedHeight!==e.offsetHeight&&t.cachedWidth===e.offsetWidth)return e.style.height=t.cachedHeight+"px",void(e._preventResizeHandler=!0);e.$.container.style.height=e.offsetWidth+"px"}t.cachedWidth=e.offsetWidth,t.cachedHeight=e.offsetHeight,t.radius=t.cachedWidth/2,t.innerRadius=e._equalToHalfRadius?t.radius/2:t.radius-e._distance.labelDistance,e._renderAnalogItems(!1)}}_restoreInlineColors(e,t,i){const a=this;a._track&&""!==e&&(a._track.style.fill=e),a._fill&&""!==t&&(a._fill.style.fill=t),a._line&&""!==i&&(a._line.style.stroke=i)}_selectStartHandler(e){this._dragging&&e.preventDefault()}_setUpdatePointerMethod(){const e=this;e._updatePointer="needle"===e.analogDisplayType?function(t){if(e._customSVGElements)for(let t=0;t<e._customSVGElements.length;t++)e._draw.removeElement(e._customSVGElements[t]);e._drawNeedle(!0,t)}:function(t){e._drawFill(!0,t)}}_styleChangedHandler(e){const t=this;return e.detail.styleProperties&&e.detail.styleProperties["min-height"]?void 0:t._isVisible()?t._renderingSuspended?void t._createElement():void(t._getMeasurements(),t._initTickIntervalHandler(),t._renderAnalogItems()):void(t._renderingSuspended=!0)}_SVGElementDownHandler(e){const t=this,i=t.context;t.context=t,t._downHandler(e,!0),t.context=i}_unlockRotation(e,t,i,a,n){const l=this,r=n.firstCondition,s=n.secondCondition,o=l._getQuadrant(a);(r&&(4!==i||1!==o)||s&&4===i&&1===o)&&10>l._numericProcessor._getAngleDifference(t,a)&&(l[e]=!1)}_updateSize(e){var t=Math.min,a=Math.max;const n=this;if("circle"===n.sizeMode&&void 0===e)return;const l=n._minCoordinates,r=n._maxCoordinates;let s=l[0],o=r[0];for(let a=1;a<l.length;a++)s=t(s,l[a]);for(let t=1;t<r.length;t++)o=a(o,r[t]);const d=n.getBoundingClientRect();if(n.digitalDisplay){const e=n.$.digitalDisplay.getBoundingClientRect();s=t(s,e.top-d.top),o=a(o,e.bottom-d.top)}if("needle"!==n.analogDisplayType){const e=n._track.getBBox();s=t(s,e.y),o=a(o,e.y+e.height)}for(let l=0;l<n._ranges.length;l++){const e=n._ranges[l].getBBox();s=t(s,e.y-d.top),o=a(o,e.y+e.height-d.top)}s-=2;const i=o-s;return void 0===e?void(n._preventResizeHandler=!0,n.style.height=i+"px",n.$.container.style.marginTop=-1*s+"px",n._measurements.cachedHeight=i):Math.round(i)}_updateValue(e){this._numericProcessor.updateGaugeValue(e)}_validate(e,t,i){const a=this,n=a.value;a._validateValue(t),i&&(35===i||36===i)?a._animate(n):a._updatePointer()}_validateAngles(){const e=this;e._normalizedStartAngle=e._normalizeAngle(e.startAngle),e.endAngle=e._normalizeAngle(e.endAngle),e.startAngle=e._normalizedStartAngle<e.endAngle?e._normalizedStartAngle:e._normalizedStartAngle-360,e._angleDifference=e.endAngle-e.startAngle}_validateInitialPropertyValues(){super._validateInitialPropertyValues();const e=this;"circle"===e.sizeMode?e.offsetWidth<e.offsetHeight?e.style.height=e.offsetWidth+"px":e.offsetWidth>e.offsetHeight&&(e.style.width=e.offsetHeight+"px"):(e.offsetHeight!==e.offsetWidth&&(e.style.height=e.offsetWidth+"px"),e.$.container.style.height=e.offsetWidth+"px"),e._validateAngles(),null===e.significantDigits?null!==e.precisionDigits&&(e.$.digitalDisplay.precisionDigits=e.precisionDigits):e.$.digitalDisplay.significantDigits=e.significantDigits}_validateValue(e,t){const i=this,a=i._numericProcessor,n=i.logarithmicScale,l="strict"===i.validation;let r=l&&t!==void 0;e===void 0?(r=!1,e=i.value):e=e.toString(),a.regexScientificNotation.test(e)&&(e=a.scientificToDecimal(e)),isNaN(e)&&(e=t||0);let s,o,d;i.coerce?(s=a.getCoercedValue(a.createDescriptor(e,!0,!0,!0),!1,n),i._number=s,o=s.toString(),d=o):l?(s=a.getCoercedValue(a.createDescriptor(e,!0,!0,!0),!1,n),i._number=s,o=s.toString(),d=o):(r=!1,s=a.getCoercedValue(a.createDescriptor(e,!0,!0,!1),!1,n),i._number=a.validate(s,a.createDescriptor(i._minObject),a.createDescriptor(i._maxObject)),o=s.toString(),d=i._number.toString());let c,_;"numeric"===i.mode?(c=t,_=o,i.value=o,i.$.digitalDisplay.value=o):(c=i._valueDate,i._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(o),_=i._valueDate,i.value=s,i.$.digitalDisplay.$.input.value=i._valueDate),i._drawValue=n?Math.log10(d).toString():d,r&&a.compare(i._number,t)&&i.$.fireEvent("change",{value:_,oldValue:c}),delete i._valueBeforeCoercion}_unlisten(){const e=this;e._trackListener&&e._trackListener.unlisten(),e._fillListener&&e._fillListener.unlisten(),e._lineListener&&e._lineListener.unlisten()}});