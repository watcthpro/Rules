obj = JSON.parse($response.body);

obj.date = true,

$done({body: JSON.stringify(obj)});
