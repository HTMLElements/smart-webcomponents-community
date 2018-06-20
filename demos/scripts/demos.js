window.addEventListener('load', function() {
	const tabs = document.getElementById('sourceTabs');
	
	if (!tabs) {
		return;
	}

	const indexjs = document.getElementById('indexjs');
	const indexhtm = document.getElementById('indexhtm');
	const styles = document.getElementById('styles');
	
	tabs.addEventListener('change', function(event) {
		let index = event.detail.index;
		
		indexjs.style.display = 'none';
		indexhtm.style.display = 'none';
		styles.style.display = 'none';
		
		if (index === 0) {
			indexjs.style.display = 'block';
		}
		
		if (index === 1) {
			indexhtm.style.display = 'block';
		}
		
		if (index === 2) {
			styles.style.display = 'block';
		}	
	});
});
  window.onresize = function() {
	resizeIframe();
  }
   
  function resizeIframe() {
      var iFrameID = document.querySelector('iframe');
	  var loader = document.querySelector('.loader');
	  
	  if (loader){
		loader.style.display = "none";
	  }
	  
      if(iFrameID) {
            // here you can make the height, I delete it first, then I make it again
            iFrameID.style.visibility = "visible";
  		    iFrameID.height = "";
            iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + 150 + "px";
      }   
  }
   
 function submitToCodepen () {
	let css_external = [
		'https://www.htmlelements.com/demos/source/styles/smart.base.css',
		'https://www.htmlelements.com/demos/styles/demos.css',
		'https://www.htmlelements.com/demos/styles/common.css'
	];
	let js_external = [
		'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-lite.js',	
		'https://www.htmlelements.com/demos/scripts/common.js',
		'https://www.htmlelements.com/demos/source/smart.element.js',
		'https://www.htmlelements.com/demos/source/smart.elements.js'
	];
	let title = document.title;

	codepen = document.getElementById("codepen"), 
	htmlcontent = document.getElementById('indexhtmvalue').value;
	js = document.getElementById('indexjsvalue').querySelector('pre').innerHTML;
	css = document.getElementById('stylesvalue').innerHTML.trim();
	html = htmlcontent.match(/<body[^>]*>((.|[\n\r])*)<\/body>/i)[1];
	  
	
	data = {
		title: title,
		html: html,
		css: css,
		js: js,
		css_external:css_external.join(";"),
		js_external: js_external.join(";")
	};

	content = JSON.stringify(data);
	
	content = content.replace(/&lt;/ig, '<');
	content = content.replace(/&gt;/ig, '>');
	content = content.replace(/&amp;/ig, '&');
	
	codepen.querySelector('input').value = content;
	codepen.submit();

}