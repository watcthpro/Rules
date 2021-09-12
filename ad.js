$(document).ready(function(){
	msg();
});

function clear_msg(){
	$("#msg-content").empty();
}
function msg(){
	var num = parseInt(Math.random()*(4-0+1)+0,10);;
	
	var content = new Array();
	content[0] = '111111111111111111111</a>';
	$("#msg-content").append(content[num]);
	window.setTimeout("clear_msg()",9800);
	window.setTimeout("msg()",10000);
}
