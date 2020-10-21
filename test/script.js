document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector(".fill").style.animation = "loader-loop 400ms infinite";
        document.querySelector("#button-bar").style.display = "none";
        document.querySelector("#textbox").style.display = "none";

    } 
    else { 
        document.querySelector(".fill").style.animation = "drop 1s ease";
        document.querySelector(".textbox").style.animation = "show 1s ease";
        document.querySelector("#button-bar").style.animation = "show 1s ease";
        document.querySelector(".textbox").style.display = "block";
        document.querySelector("#button-bar").style.display = "block";
    } 
}; 

function toggle_1() {
	document.getElementById('textbox').style.transform = "translate(-10%,-50%)";
	document.title = "Jeel | About Me";
}
function toggle_2() {
	document.getElementById('textbox').style.transform = "translate(-30%,-50%)";
	document.title = "Jeel | Contact";
}
function toggle_3() {
	document.getElementById('textbox').style.transform = "translate(-50%,-50%)";
	document.title = "Jeel | Home";
}
function toggle_4() {
	document.getElementById('textbox').style.transform = "translate(-70%,-50%)";
	document.title = "Jeel | My Works";
}
function toggle_5() {
	document.getElementById('textbox').style.transform = "translate(-90%,-50%)";
	document.title = "Jeel | :Help:";
}