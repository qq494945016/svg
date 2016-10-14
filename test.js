	
//************************************************************
// Zoom specific updates
function showmsgInSvg(text)
{
	alert("this is in svg files click --js");
	alert(text);
	alert("before E-2301AB");
	document.getElementById(text).selected=true;
	selected(text);
	window.parent.showmsgInHtmlC();
	
}

function showmsgInHtmlC()
{

	alert("this is in html C, C insert a svg file --js");
	parent.Bb.showmsgInHtmlB();

}

function showmsgInHtmlB()
{
	alert("this is at html B£¬you can do something else --js");
}


function selected(text){
    
}