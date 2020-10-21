function move(){
	document.getElementById("nav-bottom").classList.toggle("expanded-nav-bottom");
	document.getElementById("hamburger2").classList.toggle("expand-rotate");
}

function sidemenu(){
	document.getElementById("sidemenu").classList.toggle("sidemenu-reveal");
}

function toggle(){

	var allElements = document.getElementsByTagName("*");
	var classes = [];

	for (var i = 0, n = allElements.length; i < n; ++i) {
	var el = allElements[i];
	if (el.id) { classes.push(el.id); }
	}

	var i, len, text;
	for (i = 0, len = classes.length, text = ""; i < len; i++) {
 		text = classes[i] + "_2";
		document.getElementById(classes[i]).classList.toggle(text);
		}
}
