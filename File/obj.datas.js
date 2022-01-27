var obj = JSON.parse($response.body);

delete obj.dataName;

$done({body: JSON.stringify(obj)}); 
