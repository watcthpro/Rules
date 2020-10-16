/*
http:\/\/raddus\.bayescom\.com\/raddus
*/

var body = $response.body;
var url = $request.url;

if (url.indexOf('raddus') != -1) {
	var obj = JSON.parse(body);
	obj.imp = [];
	body = JSON.stringify(obj);
}

$done({ body: JSON.stringify(obj) });