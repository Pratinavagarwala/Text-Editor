function bold() {
	//function to make the text bold using DOM method
	document.getElementById("textarea1").style.fontWeight = "bold";
}

function fitalics() {
	//function to make the text italic using DOM method
	document.getElementById("textarea1").style.fontStyle = "italic";
}

function flAlign() {
	//function to make the text alignment left using DOM method
	document.getElementById("textarea1").style.textAlign = "left";
}

function cAlign() {
	//function to make the text alignment center using DOM method
	document.getElementById("textarea1").style.textAlign = "center";
}

function rAlign() {
	//function to make the text alignment right using DOM method
	document.getElementById("textarea1").style.textAlign = "right";
}

function uCase() {
	//function to make the text in Uppercase using DOM method
	document.getElementById("textarea1").style.textTransform = "uppercase";
}

function tPaste() {
//  if(window.clipboardData) {   
//    document.getElementById('txToPaste').value = window.clipboardData.getData("Text");
//  } 
navigator.clipboard.readText().then(
    clipText => document.querySelector(".input").value += clipText);
}

function tCopy() {
 // Get the text field
 var copyText = document.getElementById("textarea1");

 // Select the text field
 copyText.select();
 copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
 navigator.clipboard.writeText(copyText.value);

}



function tClear() {
	//function to make the text back to normal by removing all the methods applied
	//using DOM method
	// document.getElementById("textarea1").style.fontWeight = "normal";
	// document.getElementById("textarea1").style.textAlign = "left";
	// document.getElementById("textarea1").style.fontStyle = "normal";
	// document.getElementById("textarea1").style.textTransform = "capitalize";
	document.getElementById("textarea1").value = " ";
}

