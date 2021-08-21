var obj = JSON.parse($response.body);
delete obj.body.model_list_two;
delete obj.body.adv_bottom;
delete obj.body.adv_middle;
delete obj.body.system_app_id;
$done({body: JSON.stringify(obj)});
