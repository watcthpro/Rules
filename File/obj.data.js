var obj = JSON.parse($response.body);
delete obj.data;
console.log(obj);
$done({body: JSON.stringify(obj)});
