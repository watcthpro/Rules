var obj = JSON.parse($response.body);
delete obj.body.model_list_two;
$done({body: JSON.stringify(obj)});
