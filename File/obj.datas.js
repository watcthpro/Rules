var obj = JSON.parse($response.body);
delete obj.datas;
$done({body: JSON.stringify(obj)});
