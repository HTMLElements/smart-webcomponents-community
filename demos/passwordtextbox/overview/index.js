window.onload = function () {
	  let 
		validateMaterialPassword = document.getElementById('validateMaterialPassword'),
		validateMaterialDarkPassword = document.getElementById('validateMaterialDarkPassword'),
		password = document.getElementById('password');

	validateMaterialPassword.hint = helper;
	validateMaterialDarkPassword.hint = helper;

	function helper(value, container) {
		if (value.length === 0) {
			container.innerHTML = 'Error message';
			return true;
		}

		container.innerHTML = '';
	};
}