var obj = JSON.parse($response.body);
delete obj.response.list.datas;
$done({body: JSON.stringify(obj)});
