var obj = JSON.parse($response.body);
delete obj.response;
$done({body: JSON.stringify(obj)});
