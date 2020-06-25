var obj = JSON.parse($response.body);
delete obj.imp;
$done({body: JSON.stringify(obj)});
