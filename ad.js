$(document).ready(function(){
	msg();
});

function clear_msg(){
	$("#msg-content").empty();
}
function msg(){
	
	var num = parseInt(Math.random()*(4-0+1)+0,10);;
	
	var content = new Array();
	content[0] = 'Zdir v1.2宸插彂甯冿紝寤鸿灏藉揩鏇存柊锛�<a href = "https://www.xiaoz.me/archives/12927" target = "_blank">https://www.xiaoz.me/archives/12927</a>';
	content[1] = 'UltraVPS(EU)缇庡浗娲涙潐鐭舵満鎴匡紝2鏍�2G锛�3.8鈧/鏈堬細<a href = "https://www.xiaoz.me/archives/9633" target = "_blank">https://www.xiaoz.me/archives/9633</a>';
	content[2] = 'Vultr鏂扮敤鎴锋敞鍐岄€�50$,16涓満鎴垮彲閫夛紝鎸夋椂璁¤垂锛�<a href = "https://www.xiaoz.me/archives/12774" target = "_blank">https://www.xiaoz.me/archives/12774</a>';
	content[3] = 'CloudCone鏈€鏂颁績閿€锛屼綆鑷�$2.8/鏈堬細<a href = "https://www.xiaoz.me/archives/11183" target = "_blank">https://www.xiaoz.me/archives/11183</a>';
	content[4] = '鑰佽枦涓绘満75鎶樹紭鎯犵爜锛�<b>xiaoz25</b>锛�<a href = "https://dwz.ovh/laoxue" target = "_blank">鐐规浣跨敤</a>';
	$("#msg-content").append(content[num]);
	window.setTimeout("clear_msg()",9800);
	window.setTimeout("msg()",10000);
}
