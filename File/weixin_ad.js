/*
^https?:\/\/mp\.weixin\.qq\.com\/mp\/(?>ad_|advertisement|getappmsgad)
*/
var obj = JSON.parse($response.body);
delete obj.advertisement_info;
delete obj.appid;
delete sessionid;
advertisement_num=;
$done({body: JSON.stringify(obj)});
