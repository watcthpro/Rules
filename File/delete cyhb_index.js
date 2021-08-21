/*
^https:\/\/api\.ngayet\.com\/Home\/cyhb_index.* url script-response-body delete_body.js
*/
var obj = JSON.parse($response.body);
delete obj.body.model_list_two;
delete obj.body.adv_bottom.param_img;
$done({body: JSON.stringify(obj)});
