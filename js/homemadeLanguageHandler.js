/*
	Resume's javascript
	
	Jérémie Pomerleau                     
*/

//Language handler
// 0 -> French (Default)
// 1 -> English
var language = 0;

function initializePage()
{
	/* hide all elements with a language class */
	.en, .de, .it { display:none; };
	
	changeLanguage()
}

function changeLanguage()
{
	document.getElementById("languageButton").innerHTML = "English";
}