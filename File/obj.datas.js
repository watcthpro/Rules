var obj = JSON.parse($response.body);
delete obj.response.datas;
$done({body: JSON.stringify(obj)});
