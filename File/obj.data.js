var obj = JSON.parse($response.body);
delete obj.data;
$done({body: JSON.stringify(obj)});
console.log($response.body);
