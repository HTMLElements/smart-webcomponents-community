/* Smart HTML Elements v4.1.0 (2019-Aug) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart('bootstrap-button', class Button extends Smart.ContentElement {
	// Button's properties.
	static get properties() {
		return {
			'value': {
				type: 'string'
			},
			'name': {
				type: 'string'
			},
			'type': {
				type: 'string'
			},
			'styleMode': {
				value: 'primary',
				type: 'string'
			},
			'outlined': {
				value: false,
				type: 'boolean'
			},
			'sizeMode': {
				value: '',
				allowedValue: ['lg', 'sm', ''],
				type: 'string'
			}
		};
	}

	/** Button's template. */
	template() {
		return '<button inner-h-t-m-l=\'[[innerHTML]]\' id=\'button\' type=\'[[type]]\' name=\'[[name]]\' value=\'[[value]]\' disabled=\'[[disabled]]\' role=\'button\'></button>';
	}

	ready() {
		const that = this;

		that.render();
	}

	render() {
		const that = this;

		that.$.button.className = 'btn';

		if (that.outlined) {
			that.$.button.classList.add('btn-outline-' + that.styleMode);
		}
		else {
			that.$.button.classList.add('btn-' + that.styleMode);
		}

		if (that.sizeMode !== '') {
			that.$.button.classList.add('btn-' + that.sizeMode);
		}
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;

		that.render();
	}
});

Smart('bootstrap-check-box', class CheckBox extends Smart.ContentElement {
	// Button's properties.
	static get properties() {
		return {
			'checked': {
				value: false,
				type: 'boolean'
			},
			'name': {
				type: 'string'
			},
			'styleMode': {
				value: 'secondary',
				type: 'string'
			}
		};
	}

	/**
	* CheckBox's Event Listeners
	*/
	static get listeners() {
		return {
			'click': 'toggle',
			'input.focus': 'focus',
			'input.blur': 'blur'
		};
	}

	/** CheckBox's template. */
	template() {
		return `<label id="button" class="btn">
				 	<input id="input" type="checkbox" name=\'[[name]]\' autocomplete="off"/>
				 	<content></content>
			   </label>`;
	}

	ready() {
		const that = this;

		if (!(that instanceof Smart.ToggleButton)) {
			that.classList.add('btn-group-toggle');
		}

		that.$.button.classList.add('btn-' + that.styleMode);

		if (that.checked) {
			that.$.button.classList.add('active');
		}
		else {
			that.$.button.classList.remove('active');
		}
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;

		if (propertyName === 'checked') {
			that.toggle();
		}
	}

	toggle(event) {
		const that = this;
		const input = that.querySelector('input');

		if (event) {
			event.preventDefault()
		}

		if (that.disabled) {
			return;
		}

		if (that.checked) {
			that.$.button.classList.remove('active');
			that.checked = false;
		}
		else {
			that.$.button.classList.add('active');
			that.checked = true;
		}

		that.$.fireEvent('change');
		input.focus();
	}

	dispose() {
		const that = this;

		if (that.parentElement) {
			that.parentElement.removeChild(that);
		}
	}

	blur() {
		this.$.button.classList.remove('focus');
	}

	focus() {
		this.$.button.classList.add('focus');
	}
});

Smart('bootstrap-toggle-button', class ToggleButton extends Smart.CheckBox {
	// Button's properties.
	static get properties() {
		return {
			'styleMode': {
				value: 'primary',
				type: 'string'
			}
		};
	}

	/** CheckBox's template. */
	template() {
		return `<button id="button" type="button" class="btn" autocomplete="off">
					<content></content>
		  		</button>`;
	}

	/**
	* CheckBox's Event Listeners
	*/
	static get listeners() {
		return {
			'click': 'toggle',
			'button.focus': 'focus',
			'button.blur': 'blur'
		};
	}

	toggle(event) {
		const that = this;

		if (event) {
			event.preventDefault()
		}

		if (that.disabled) {
			return;
		}


		if (that.checked) {
			if (that instanceof Smart.RadioButton) {
				that.$.button.focus();
				return;
			}

			that.$.button.classList.remove('active');
			that.set('checked', false);
		}
		else {
			if (that instanceof Smart.RadioButton) {
				const buttons = document.querySelectorAll('bootstrap-radio-button');

				for (let i = 0; i < buttons.length; i++) {
					if (buttons[i].group === that.group) {
						buttons[i].set('checked', false);
						buttons[i].$.button.classList.remove('active');
					}
				}
			}

			that.$.button.classList.add('active');
			that.set('checked', true);
		}

		that.$.fireEvent('change');
		that.$.button.focus();
		that.$.button.setAttribute('area-pressed', that.checked);
	}
});

Smart('bootstrap-radio-button', class RadioButton extends Smart.ToggleButton {
	// Button's properties.
	static get properties() {
		return {
			'styleMode': {
				value: 'secondary',
				type: 'string'
			},
			'group': {
				value: '',
				type: 'string'
			}
		};
	}
});

Smart('bootstrap-drop-down', class DropDown extends Smart.ContentElement {

	// DropDown's properties.
	static get properties() {
		return {
			'styleMode': {
				value: 'secondary',
				type: 'string'
			},
			'label': {
				value: '',
				type: 'string'
			},
			'opened': {
				value: false,
				type: 'boolean'
			},
			'outlined': {
				value: false,
				type: 'boolean'
			},
			'dropDownPosition': {
				allowedValues: ['auto', 'top', 'bottom', 'left', 'right', 'custom'],
				value: 'auto',
				type: 'string'
			},
			'customDropDownPositionCallback': {
				value: null,
				type: 'function'
			},
			'sizeMode': {
				value: '',
				allowedValue: ['lg', 'sm', ''],
				type: 'string'
			}
		};
	}

	/**
	* CheckBox's Event Listeners
	*/
	static get listeners() {
		return {
			'document.click': '_clearMenus',
			'document.keyup': '_clearMenus',
			'button.keydown': '_dataApiKeydownHandler',
			'button.click': '_clickHandler',
			'dropDownContainer.click': '_clickHandler',
			'keydown': '_dataApiKeydownHandler'
		};
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;


		if (propertyName === 'styleMode' || propertyName === 'sizeMode') {
			that.$.button.classList.remove('btn-' + oldValue);

			if (propertyName === 'styleMode') {
				that.$.button.classList.remove('btn-outline-' + newValue);

				if (that.$.actionButton) {
					that.$.actionButton.classList.remove('btn-outline-' + oldValue);
				}

				if (propertyName === 'outlined') {
					that.$.button.classList.add('btn-outline-' + newValue);

					if (that.$.actionButton) {
						that.$.actionButton.classList.add('btn-outline-' + newValue);
					}
				}
				else {
					that.$.button.classList.add('btn-' + newValue);

					if (that.$.actionButton) {
						that.$.actionButton.classList.add('btn-' + newValue);
					}
				}
			}
			else {
				that.$.button.classList.add('btn-' + newValue);

				if (that.$.actionButton) {
					that.$.actionButton.classList.remove('btn-' + oldValue);
					that.$.actionButton.classList.add('btn-' + newValue);
				}
			}
		}
		else if (propertyName === 'dropDownPosition') {
			that._positionDetection.dropDownPositionChangedHandler();
			that._setArrowPosition();
		}
		else if (propertyName === 'opened') {
			newValue ? that.show() : that.hide();
		}
	}

	/** CheckBox's template. */
	template() {
		return `<div class="dropdown btn-group" id="container">
					<button id="button" class="btn dropdown-toggle" data-toggle="dropdown">[[label]]</button>
					<div id="dropDownContainer" class="dropdown-menu"><content></content></div>
				</div>`;
	}

	ready() {
		const that = this;

		that.ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
		that.SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key
		that.TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key
		that.ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
		that.ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
		that.RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
		that.REGEXP_KEYDOWN = new RegExp(`${that.ARROW_UP_KEYCODE}|${that.ARROW_DOWN_KEYCODE}|${that.ESCAPE_KEYCODE}`);

		if (!that.dropDownAppendTo) {
			that.dropDownAppendTo = that.$.container;
		}

		that._positionDetection = new Smart.Utilities.PositionDetection(that, that.$.dropDownContainer, that.$.container, 'hide');
		that._positionDetection.getDropDownParent(true);
		that._positionDetection.handleAutoPositioning();
		that._positionDetection.setDropDownPosition();
		that._positionDetection.customPositionDropDown = that._customPositionDropDown.bind(that);

		that._setArrowPosition();

		if (that.styleMode) {
			if (that.outlined) {
				that.$.button.classList.add('btn-outline-' + that.styleMode);
			}
			else {
				that.$.button.classList.add('btn-' + that.styleMode);
			}
		}

		if (that.sizeMode) {
			that.$.button.classList.add('btn-' + that.sizeMode);
		}

		if (that.$.actionButton) {
			if (that.outlined) {
				that.$.actionButton.classList.add('btn-outline-' + that.styleMode);
			}
			else {
				that.$.actionButton.classList.add('btn-' + that.styleMode);
			}

			if (that.sizeMode) {
				that.$.actionButton.classList.add('btn-' + that.sizeMode);
			}
		}

		if (that.opened) {
			that.$.dropDownContainer.classList.add('show');
			that.$.container.classList.add('show');
			that.set('opened', true);
		}
	}

	// Public
	toggle() {
		const that = this;

		if (that.disabled || that.classList.contains('disabled')) {
			return
		}

		const isHidden = !that.opened;

		that._clearMenus();

		if (isHidden) {
			that.show();
		}
	}

	show() {
		const that = this;

		if (that.disabled || that.classList.contains('disabled') || that.$.dropDownContainer.classList.contains('show')) {
			return
		}

		const isDefaultPrevented = that.$.fireEvent('show').defaultPrevented;

		if (isDefaultPrevented) {
			return
		}

		that.setAttribute('aria-expanded', true);

		that.$.dropDownContainer.classList.add('show');
		that.$.container.classList.add('show');
		that.set('opened', true);

		if (that.customDropDownPositionCallback) {
			that.customDropDownPositionCallback(that.$.dropDownContainer);
		}
		else {
			that._positionDetection.checkBrowserBounds('vertically');
			that._positionDetection.positionDropDown();
			that._positionDetection.checkBrowserBounds('horizontally');
			that.$.dropDownContainer.setAttribute('x-placement', that._dropDownListPosition + '-start');
		}

		that.$.fireEvent('shown');

		that.$.button.focus();
	}

	_setArrowPosition() {
		const that = this;

		that.$.container.classList.remove('dropup');
		that.$.container.classList.remove('dropleft');
		that.$.container.classList.remove('dropright');

		if (that.dropDownPosition !== 'auto') {
			switch (that._dropDownListPosition) {
				case 'top':
					that.$.container.classList.add('dropup');
					break;
				case 'right':
					that.$.container.classList.add('dropright');
					break;
				case 'left':
					that.$.container.classList.add('dropleft');
					break;
			}
		}

		if (that._repositionButtons) {
			that._repositionButtons();
		}
	}

	hide() {
		const that = this;

		if (that.disabled || that.classList.contains('disabled') || !that.$.dropDownContainer.classList.contains('show')) {
			return
		}

		const isDefaultPrevented = that.$.fireEvent('hide').defaultPrevented;

		if (isDefaultPrevented) {
			return
		}

		that.removeAttribute('aria-expanded', true);

		that.$.dropDownContainer.classList.remove('show');
		that.$.container.classList.remove('show');
		that.set('opened', false);

		that.$.fireEvent('hidden');

		that.$.button.focus()
	}

	dispose() {
		const that = this;

		if (that.parentElement) {
			that.parentElement.removeChild(that);
		}
	}

	_dataApiKeydownHandler(event) {
		const that = this;

		if (/input|textarea/i.test(event.target.tagName)
			? event.which === that.SPACE_KEYCODE || event.which !== that.ESCAPE_KEYCODE &&
			(event.which !== that.ARROW_DOWN_KEYCODE && event.which !== that.ARROW_UP_KEYCODE ||
				event.target.closest('.dropdown-menu')) : !that.REGEXP_KEYDOWN.test(event.which)) {
			return
		}

		event.preventDefault()
		event.stopPropagation()

		if (this.disabled || that.classList.contains('disabled')) {
			return
		}

		const isActive = that.opened;

		if (!isActive || isActive && (event.which === that.ESCAPE_KEYCODE || event.which === that.SPACE_KEYCODE)) {
			if (event.which === that.ESCAPE_KEYCODE) {
				that.$.button.focus(event);
			}


			that._clickHandler(event);
			return
		}

		const items = [].slice.call(that.querySelectorAll('.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'));

		if (items.length === 0) {
			return
		}

		let index = items.indexOf(event.target)

		if (event.which === that.ARROW_UP_KEYCODE && index > 0) { // Up
			index--;
		}

		if (event.which === that.ARROW_DOWN_KEYCODE && index < items.length - 1) { // Down
			index++;
		}

		if (index < 0) {
			index = 0
		}

		items[index].focus()
	}

	_clickHandler(event) {
		event.preventDefault();
		event.stopPropagation();

		this.toggle();
	}

	_getParentFromElement(element) {
		return element.closest('bootstrap-drop-down');
	}

	_clearMenus(event) {
		const that = this;

		if (event && (event.which === that.RIGHT_MOUSE_BUTTON_WHICH ||
			event.type === 'keyup' && (event.which !== that.TAB_KEYCODE && event.which !== that.ESCAPE_KEYCODE))) {
			return
		}

		const toggles = [].slice.call(document.querySelectorAll('.dropdown-menu'))

		for (let i = 0, len = toggles.length; i < len; i++) {
			const parent = toggles[i].closest('bootstrap-drop-down') || toggles[i].closest('bootstrap-split-button');

			if (!parent) {
				continue;
			}

			const dropdownMenu = parent.$.dropDownContainer;

			if (!parent.opened) {
				continue
			}

			if (event && (event.type === 'click' &&
				/input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === that.TAB_KEYCODE) &&
				parent.contains(event.target)) {
				continue
			}

			const isDefaultPrevented = that.$.fireEvent('hide').defaultPrevented;

			if (isDefaultPrevented) {
				return
			}

			parent.setAttribute('aria-expanded', 'false');
			parent.$.container.classList.remove('show');
			parent.set('opened', false);
			dropdownMenu.classList.remove('show');

			parent.$.fireEvent('hidden');
		}
	}

	_customPositionDropDown() {
		const that = this,
			coordinates = that.$[that instanceof Smart.SplitButton ? 'button' : 'container'].getBoundingClientRect(),
			dropDown = that.$.dropDownContainer;
		let top = coordinates.top,
			left = coordinates.left;

		switch (that._dropDownListPosition) {
			case 'bottom':
				top = coordinates.bottom;
				break;
			case 'top':
				top = coordinates.top - dropDown.offsetHeight;
				break;
			case 'left':
				top = coordinates.top;
				left -= dropDown.offsetWidth;
				break;
			case 'right':
				top = coordinates.top;
				left += coordinates.width;
				break;
		}

		return { left: left, top: top };
	}
});

Smart('bootstrap-split-button', class SplitButton extends Smart.DropDown {

	/** CheckBox's template. */
	template() {
		return `<div class="dropdown btn-group" id="container">
					<div id="buttonGroup" class="btn-group"></div>
					<button id="actionButton" class="btn">[[label]]</button>
					<button id="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"></button>
					<div id="dropDownContainer" class="dropdown-menu"><content></content></div>
					</div>
				</div>`;
	}

	_repositionButtons() {
		const that = this,
			actionButton = that.$.actionButton,
			dropDown = that.$.dropDownContainer,
			button = that.$.button,
			container = that.$.container,
			buttonGroup = that.$.buttonGroup;

		//Reset
		actionButton.parentElement.removeChild(actionButton);
		button.parentElement.removeChild(button);
		dropDown.parentElement.removeChild(dropDown);

		container.appendChild(actionButton);
		container.appendChild(button);
		container.appendChild(dropDown);

		if (that.dropDownPosition === 'left' && !buttonGroup.contains(button)) {
			buttonGroup.appendChild(button);
			buttonGroup.appendChild(dropDown);
		}
		else if (that.dropDownPosition === 'right' && !buttonGroup.contains(actionButton)) {
			buttonGroup.appendChild(actionButton);
		}


		if (that.dropDownPosition !== 'left' && that.dropDownPosition !== 'right') {
			that.$.container.removeChild(buttonGroup);
		}
		else if (!buttonGroup.parentElement) {
			that.$.container.insertBefore(buttonGroup, actionButton);
		}
	}
});

Smart('bootstrap-input-group', class InputGroup extends Smart.ContentElement {
	// Element's properties.
	static get properties() {
		return {
			'contentBefore': {
				value: '',
				type: 'string'
			},
			'contentAfter': {
				value: '',
				type: 'string'
			},
			'type': {
				value: 'text',
				type: 'string'
			},
			'name': {
				value: '',
				type: 'string'
			},
			'placeholder': {
				value: '',
				type: 'string'
			},
			'styleMode': {
				value: '',
				type: 'string'
			},
			'noWrap': {
				value: false,
				type: 'boolean'
			},
			'sizeMode': {
				value: '',
				allowedValue: ['lg', 'sm', ''],
				type: 'string'
			}
		};
	}

	/** Button's template. */
	template() {
		return `<div class="input-group" id="container">
					<div id="prependContainer" class="input-group-prepend">[[contentBefore]]</div>
					<div id="contentContainer"><content></content></div>
					<div id="appendContainer" class="input-group-append">[[contentAfter]]</div>
				</div>`;
	}

	ready() {
		const that = this;

		that.noWrap ? that.$.container.classList.add('flex-nowrap') : that.$.container.classList.remove('flex-nowrap');

		that.render();
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;

		if (propertyName === 'noWrap') {
			newValue ? that.$.container.classList.add('flex-nowrap') : that.$.container.classList.remove('flex-nowrap');
		}
		else if (propertyName === 'placeholder' || propertyName === 'name' || propertyName === 'type') {
			const inputs = that.$.inputContainer.querySelectorAll('.form-control');

			for (let i = 0; i < inputs.length; i++) {
				inputs[i][propertyName] = newValue;
			}
		}
		else if (propertyName === 'styleMode' || propertyName === 'sizeMode') {
			that.$.container.classList.remove('input-group-' + oldValue);
			that.$.container.classList.add('input-group-' + newValue);
		}
		else if (propertyName === 'contentBefore' || propertyName === 'contentAfter') {
			const container = that.$[propertyName === 'contentBefore' ? 'prependContainer' : 'appendContainer'];

			container.innerHTML = newValue;

			if (newValue && !container.parentElement) {
				propertyName === 'contentBefore' ? that.$.container.insertBefore(container, that.$.container.firstElementChild) : that.$.container.appendChild(container);
			}
			else if (!newValue) {
				that.$.container.removeChild(container);
			}
		}
	}

	render() {
		const that = this,
			container = that.$.contentContainer,
			prependContainer = that.$.prependContainer,
			appendContainer = that.$.appendContainer;
		let formControl = container.querySelector('.form-control');

		if (!formControl) {
			const input = document.createElement('input');

			input.type = that.type;
			input.placeholder = that.placeholder;
			input.name = that.name;
			input.classList.add('form-control');

			container.appendChild(input);
			formControl = input;
		}

		let previousEl = formControl.previousElementSibling;

		while (previousEl) {
			const pe = previousEl;

			if (pe === prependContainer) {
				break;
			}

			previousEl = previousEl.previousElementSibling;

			if (!pe.classList.contains('form-control')) {
				prependContainer.insertBefore(pe, prependContainer.firstElementChild);
			}
		}

		let nextEl = formControl.nextElementSibling;

		while (nextEl) {
			const nx = nextEl;

			if (nx === appendContainer) {
				break;
			}

			nextEl = nextEl.nextElementSibling;

			if (!nx.classList.contains('form-control')) {
				appendContainer.appendChild(nx);
			}
		}

		while (container.firstElementChild) {
			that.$.container.insertBefore(container.firstElementChild, appendContainer);
		}

		if (!appendContainer.children.length) {
			that.$.container.removeChild(appendContainer);
		}

		if (!prependContainer.children.length) {
			that.$.container.removeChild(prependContainer);
		}

		if (!container.children.length) {
			that.$.container.removeChild(container);
		}

		if (that.sizeMode) {
			that.$.container.classList.add('input-group-' + that.sizeMode);
		}

		if (that.styleMode) {
			that.$.container.classList.add('input-group-' + that.styleMode);
		}
	}
});

Smart('bootstrap-modal', class Modal extends Smart.ContentElement {
	// Element's properties.
	static get properties() {
		return {
			'placeholder': {
				value: '',
				type: 'string'
			},
			'styleMode': {
				value: '',
				type: 'string'
			},
			'scrollable': {
				value: false,
				type: 'boolean'
			},
			'sizeMode': {
				value: '',
				allowedValue: ['lg', 'sm', ''],
				type: 'string'
			},
			'tabindex': {
				value: -1,
				type: 'number'
			},
			'centered': {
				value: false,
				type: 'boolean'
			}

		};
	}

	/**
	* Element's Event Listeners
	*/
	static get listeners() {
		return {
			'up': '_upHandler',
			'dialog.down': '_dialogDownHandler',
			'keydown': '_keydownHandler',
			'click': '_clickHandler'
		};
	}

	/** Button's template. */
	template() {
		return `<div class="modal-dialog" id="dialog">
					<div class="modal-content" inner-h-t-m-l="[[innerHTML]]">
						<content></content>
				</div>`;
	}

	ready() {
		const that = this;

		that.render();
	}

	propertyChangedHandler(propertyName, oldValue, newValue) {
		const that = this;

		if(propertyName === 'tabindex') {
			that.setAttribute('tabindex', newValue);
		}
		else if(propertyName === 'scrollable' || propertyName === 'centered') {
			that.$.dialog.classList[newValue ? 'add' : 'remove']('modal-dialog-' + propertyName);
		}
	}

	render() {
		const that = this;

		that.classList.add('modal');
		that.$.dialog.classList[that.scrollable ? 'add' : 'remove']('modal-dialog-scrollable');
		that.$.dialog.classList[that.centered ? 'add' : 'remove']('modal-dialog-centered');
		that.setAttribute('tabindex', that.tabindex);
	}

	toggle() {
		return this.opened ? this.hide() : this.show();
	}

	show() {
		const that = this;

		if (that.opened || that._isTransitioning) {
			return;
		}

		if (that.classList.contains('fade')) {
			this._isTransitioning = true;
		}

		const isDefaultPrevented = that.$.fireEvent('show').defaultPrevented;

		if (isDefaultPrevented) {
			return
		}

		that.set('opened', true);

		// that._checkScrollbar()
		that._setScrollbar();

		that._adjustDialog();

		that._setResizeEvent();

		that._showBackdrop(() => that._showElement());
	}

	hide(event) {
		const that = this;

		if (event) {
			event.preventDefault()
		}

		if (!that.opened || that._isTransitioning) {
			return
		}

		const isDefaultPrevented = that.$.fireEvent('hide').defaultPrevented;

		if (isDefaultPrevented) {
			return
		}

		that.set('opened', false);

		const transition = that.classList.contains('fade');

		if (transition) {
			that._isTransitioning = true;
		}

		that._setResizeEvent();
		//off focusin

		that.classList.remove('show');

		if (transition) {
			that.addEventListener('transitionend', (event) => that._hideModal(event), { once: true });
		}
		else {
			that._hideModal();
		}
	}

	dispose() {
		const that = this;

		if (that.parentElement) {
			that.parentElement.removeChild(that);
		}
	}

	// _transitionendHandler(event) {
	// 	const that = this;

	// 	this._isTransitioning = false;

	// 	if (that.opened) {
	// 		this._element.focus();
	// 		that.$.fireEvent('shown')
	// 	}
	// 	else {
	// 		that._hideModal(event);
	// 	}
	// }

	_dialogDownHandler(event) {
		this._dialogDown = true;
	}

	_upHandler() {
		const that = this;

		event.stopPropagation();

		if (that._dialogDown && event.target === that) {
			this._ignoreBackdropClick = true;
		}

		delete that._dialogDown;
	}

	_hideModal() {
		const that = this;

		that.style.display = 'none';
		that.setAttribute('aria-hidden', true)
		that.removeAttribute('aria-modal')
		that._isTransitioning = false
		that._showBackdrop(() => {
			document.body.classList.remove('modal-open');
			that.style.paddingLeft = ''
			that.style.paddingRight = ''
			// Restore fixed content padding
			const fixedContent = [].slice.call(document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'));

			fixedContent.forEach((index, element) => {
				const padding = element._paddingRight;

				delete element._paddingRight;
				element.style.paddingRight = padding ? padding : '';
			})

			// Restore sticky content
			const elements = [].slice.call(document.querySelectorAll('.sticky-top'));

			elements.forEach((index, element) => {
				const margin = element._marginRight;

				if (typeof margin !== 'undefined') {
					delete element._marginRight;
					element.style.marginRight = margin ? margin : '';
				}
			});

			// Restore body padding
			const padding = document.body._paddingRight;

			delete document.body._paddingRight;
			document.body.style.paddingRight = padding ? padding : ''

			that.$.fireEvent('hidden');
		})
	}

	_keydownHandler(event) {
		const that = this;

		if (event.which === 27) {
			event.preventDefault()
			this.hide()
		}
	}

	_clickHandler(event) {
		const that = this;

		if (event.target.closest('[data-dismiss="modal"]')) {
			that.hide();
			return;
		}

		if (that._ignoreBackdropClick) {
			that._ignoreBackdropClick = false;
			return
		}
		if (event.target !== event.currentTarget) {
			return
		}

		that.hide()
	}

	_setScrollbar() {
		const that = this;
		const bodyRect = document.body.getBoundingClientRect();

		if (bodyRect.left + bodyRect.right < window.innerWidth) {
			// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
			//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
			const fixedContent = [].slice.call(document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'));
			const stickyContent = [].slice.call(document.querySelectorAll('.sticky-top'));

			// Adjust fixed content padding

			for (let i = 0; i < fixedContent.length; i++) {
				const element = fixedContent[i],
					calculatedPadding = parseFloat(getComputedStyle(element).getPropertyValue('padding-right')) || 0;

				element.style.paddingRight = (element._paddingRight = (calculatedPadding + that._getScrollbarWidth())) + 'px';
			}

			for (let i = 0; i < stickyContent.length; i++) {
				const element = stickyContent[i],
					calculatedMargin = parseFloat(getComputedStyle(element).getPropertyValue('margin-right')) || 0;

				element.style.marginRight = (element._marginRight = (calculatedMargin + that._getScrollbarWidth())) + 'px';
			}

			// Adjust body padding
			document.body._paddingRight = document.body.style.paddingRight;
			document.body.style.paddingRight = ((parseFloat(getComputedStyle(document.body).getPropertyValue('padding-right')) || 0) + that._getScrollbarWidth()) + 'px';
		}

		document.body.classList.add('modal-open');
	}

	_getScrollbarWidth() {
		const scrollDiv = document.createElement('div');

		scrollDiv.className = 'modal-scrollbar-measure';

		document.body.appendChild(scrollDiv);

		const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;

		document.body.removeChild(scrollDiv);

		return scrollbarWidth;
	}

	_adjustDialog() {
		const that = this,
			isModalOverflowing = that.scrollHeight > document.documentElement.clientHeight,
			bodyRect = document.body.getBoundingClientRect(),
			isBodyOverflowing = bodyRect.left + bodyRect.right < window.innerWidth;


		if (isBodyOverflowing && isModalOverflowing) {
			that.style.paddingLeft = that._getScrollbarWidth() + 'px';
		}

		if (isBodyOverflowing && !isModalOverflowing) {
			that.style.paddingRight = that._getScrollbarWidth() + 'px';
		}
	}

	_setResizeEvent() {
		const that = this,
			resizeHanler = (event) => that._adjustDialog();

		if (that.opened) {
			window.addEventListener('resize', resizeHanler);
		}
		else {
			window.removeEventListener('resize', resizeHanler);
		}
	}

	_showElement() {
		const that = this;

		const transition = that.classList.contains('fade'),
			dialog = that.$.dialog;

		that.style.display = 'block';
		that.removeAttribute('aria-hidden');
		that.setAttribute('aria-modal', true);

		if (dialog.classList.contains('modal-dialog-scrollable')) {
			dialog.querySelector('.modal-body').scrollTop = 0
		}
		else {
			that.scrollTop = 0
		}

		if (transition) {
			that.offsetHeight;
		}

		that.classList.add('show')

		that._enforceFocus()

		const transitionComplete = () => {
			that.focus()
			that._isTransitioning = false;
			that.$.fireEvent('shown');
		}

		if (transition) {
			that.$.dialog.addEventListener('transitionend', transitionComplete, { once: true });
		}
		else {
			transitionComplete()
			// that._transitionendHandler()
		}
	}

	_enforceFocus() {
		const that = this,
			focusInHandler = function () {
				if (document !== event.target && that !== event.target && !that.contains(event.target)) {
					event.preventDefault();
					that.hide();
				}
			}

		document.removeEventListener('focusin', focusInHandler);// Guard against infinite focus loop
		document.addEventListener('focusin', focusInHandler);
	}

	_showBackdrop(callback) {
		const that = this;
		const animate = that.classList.contains('fade');

		if (that.opened) {
			if (!that._backdrop) {
				that._backdrop = document.createElement('div')
				that._backdrop.className = 'modal-backdrop';
			}

			if (animate) {
				this._backdrop.classList.add('fade');
			}

			if (!that._backdrop.parentElement) {
				document.body.appendChild(that._backdrop);
			}

			if (animate) {
				//reflow
				that._backdrop.offsetHeight;
			}

			this._backdrop.classList.add('show')

			if (!callback) {
				return
			}

			if (!animate) {
				callback();
				return
			}

			that._backdrop.addEventListener('transitionend', callback, { once: true });
		}
		else if (!that.opened && that._backdrop) {
			that._backdrop.classList.remove('show');

			const callbackRemove = () => {
				if (that._backdrop.parentElement) {
					that._backdrop.parentElement.removeChild(that._backdrop);
				}

				if (callback) {
					callback()
				}
			}

			if (that.classList.contains('fade')) {
				that._backdrop.addEventListener('transitionend', callbackRemove, { once: true });
			}
			else {
				callbackRemove()
			}
		}
		else if (callback) {
			callback()
		}
	}

});