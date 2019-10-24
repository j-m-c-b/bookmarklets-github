javascript: (function ()
{
	var selectedText = window.getSelection().toString();
  
	selectedText = encodeURIComponent(selectedText);
  
	var win = window.open(`https://translate.google.com/#view=home&op=translate&sl=ja&tl=en&text=${selectedText}`)

})();
