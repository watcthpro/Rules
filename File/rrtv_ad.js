/*
https:\/\/api\.rr\.tv\/ad\/getAll
*/
var body = $response.body;
var url = $request.url;

if (url.indexOf('/ad/getAll') != -1) {
	var obj = JSON.parse(body);
	obj.data.adList = [];
	body = JSON.stringify(obj);
}


body = JSON.stringify(obj);

$done({ body: JSON.stringify(obj) });
