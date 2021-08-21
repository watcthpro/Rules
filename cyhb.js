var obj = JSON.parse($response.body);
delete obj.body;
$done({body: JSON.stringify(obj)});
