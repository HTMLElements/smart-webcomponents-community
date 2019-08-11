
/* Smart HTML Elements v4.1.0 (2019-Aug) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-password-text-box",class extends Smart.TextBox{static get properties(){return{messages:{value:{en:{passwordStrength:"Password strength",short:"Short",weak:"Weak",far:"Far",good:"Good",strong:"Strong",showPassword:"Show password"}},type:"object",extend:!0},passwordStrength:{value:null,type:"function?",reflectToAttribute:!1},showPasswordIcon:{value:!1,type:"boolean"},showPasswordStrength:{value:!1,type:"boolean"},tooltipArrow:{value:!1,type:"boolean"},tooltipDelay:{value:0,type:"number"},tooltipPosition:{allowedValues:["bottom","top","left","right","absolute"],value:"top",type:"string"},tooltipTemplate:{value:null,type:"string?"},type:{value:"password",type:"string",defaultReflectToAttribute:!0,readonly:!0},value:{value:"",reflectToAttribute:!1,type:"string"}}}static get requires(){return{"Smart.Tooltip":"smart.tooltip.js"}}static get listeners(){return{"document.up":"_documentUpHandler",blur:"_blurHandler",focus:"_focusHandler",mouseenter:"_mouseEventsHandler",mouseleave:"_mouseEventsHandler","passwordIcon.down":"_showPassword","input.change":"_textBoxChangeHandler","input.paste":"_textBoxChangeHandler","input.keyup":"_textBoxChangeHandler","input.blur":"_blurHandler","input.focus":"_focusHandler"}}template(){return`<div id="container">
                    <span id="label" inner-h-t-m-l="[[label]]" class ="smart-label"></span>
                    <div id="innerContainer" class="smart-inner-container">
                            <input class ="smart-input" type="password" id="input"
                                disabled="[[disabled]]"
                                maxlength="[[maxLength]]"
                                minlength="[[minLength]]"
                                name="[[name]]"
                                placeholder="[[placeholder]]"
                                value="[[value]]">
                            <span id="passwordIcon" title="Show Password" class ="smart-password-icon smart-hidden">&#xe80a; </span>
                    </div>
                    <span id="hint" class ="smart-hint"></span>
                    <smart-tooltip id="tooltip"
                        open-mode="manual"
                        arrow="[[tooltipArrow]]"
                        tooltip-template="[[tooltipTemplate]]"
                        position="[[tooltipPosition]]"
                        delay="[[tooltipDelay]]">
                     </smart-tooltip>
                </div>`}propertyChangedHandler(a,b,c){const d=this;let e;switch(a){case"locale":case"messages":case"passwordStrength":e=d._evaluatePasswordStrength(),d._updateTooltipString(e),d.$.passwordIcon.setAttribute("title",d.localize("showPassword")),d._updatePasswordStrengthStyles(e);break;case"tooltipPosition":d.$.tooltip.position=d.tooltipPosition;break;case"tooltipTemplate":d.$.tooltip.tooltipTemplate=d.tooltipTemplate;break;case"value":e=d._evaluatePasswordStrength(),d._updateTooltipString(e),d._updatePasswordStrengthStyles(e);break;case"disabled":d._setFocusable();break;case"readonly":break;default:super.propertyChangedHandler(a,b,c);}}_createElement(){const a=this;a.autoFocus&&a.$.input.focus(),a._setFocusable(),a.$.tooltip.selector=a.$.innerContainer,a.$.passwordIcon.setAttribute("title",a.localize("showPassword")),a._updateTooltipString("short"),a._updatePasswordStrengthStyles(),a._initializationValue=a.value,0<a.value.length?a.$.addClass("has-value"):a.$.removeClass("has-value"),a._handleHintContainer()}_focusHandler(){const a=this;a.disabled||(a.selectAllOnFocus&&a.$.input.select(),a.showPasswordIcon&&a.$passwordIcon.removeClass("smart-hidden"),a.setAttribute("focus",""),a._valueBeforeChange=a.value,a.showPasswordStrength&&(a._tooltipOpened||(a.$.tooltip.open(),a._tooltipOpened=!0)))}_blurHandler(){const a=this;a.disabled||a._passwordIconPressed||(a._valueBeforeChange!==a.value&&(a.$.fireEvent("change",{newValue:a.value,oldValue:a._valueBeforeChange}),a._valueBeforeChange=""),a.showPasswordIcon&&a.$passwordIcon.addClass("smart-hidden"),a.removeAttribute("focus"),0<a.value.length?a.$.addClass("has-value"):a.$.removeClass("has-value"),a._tooltipOpened&&(a.$.tooltip.close(),a._tooltipOpened=!1))}_showPassword(){const a=this;a.disabled||!a.showPasswordIcon||(a.$.input.type="text",a._passwordIconPressed=!0)}_documentUpHandler(){const a=this;!a.disabled&&a.showPasswordIcon&&a._passwordIconPressed&&(a.$.input.type="password",a._passwordIconPressed=!1,a.$.input.focus())}_textBoxChangeHandler(){const a=this;if(!(a.disabled||a.readonly)){a.value=a.$.input.value;let b=a._evaluatePasswordStrength();a._updateTooltipString(b),a._updatePasswordStrengthStyles(b)}}_updatePasswordStrengthStyles(a){const b=this,c=["short","weak","far","good","strong"];a=a||"short";for(let d=0;d<c.length;d++)b.$container.removeClass("smart-password-"+c[d]);b.disabled||b.$container.addClass("smart-password-"+a)}_evaluatePasswordStrength(){const a=this,b=a.$.input.value,c=b.length;if(a.disabled)return;if(a.passwordStrength)return a.passwordStrength(b,"<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=");let d=0,e=0,f=0,g=0;for(var h=0;h<c;h++){const a=b.charAt(h),c=b.charCodeAt(h);if(64<c&&91>c||96<c&&123>c||127<c&&155>c||159<c&&166>c){d+=1;continue}if(!1===isNaN(a)){e+=1;continue}if(-1!=="<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=".indexOf(a)){f+=1;continue}}return g=d+e+2*f+d*e/2+c,8>c?"short":20>g?"weak":30>g?"far":40>g?"good":"strong"}_keyUpHandler(){}_mouseWheelHandler(){}_resizeHandler(){}_selectStartHandler(){}_setDropDownSize(){}_styleChangedHandler(){}_updateTooltipString(a){const b=this;b.$.tooltip.value="<span class=\"password-strength-label\">"+b.localize("passwordStrength")+":</span><span class=\"password-strength-value\">"+b.localize(a)+"</span>"}});