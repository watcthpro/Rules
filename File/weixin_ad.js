var obj = JSON.parse($response.body);
delete obj.advertisement_info;
$done({body: JSON.stringify(obj)});
