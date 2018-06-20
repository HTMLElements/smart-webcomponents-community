window.onload = function () {
    const validateMaterial = document.getElementById('validateMaterial');
	
	validateMaterial.hint = helper;
	function helper(value, container) {
		if (value.length === 0) {
			container.innerHTML = 'Error message';
			return true;
		}

		container.innerHTML = '';
	};
}