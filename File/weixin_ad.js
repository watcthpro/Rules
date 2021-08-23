/*
^https?:\/\/mp\.weixin\.qq\.com\/mp\/(?>ad_|advertisement|getappmsgad)
*/
var obj = JSON.parse($response.body);
delete obj.advertisement_info;
delete obj.appid;
advertisement_num=0;
$done({body: JSON.stringify(obj)});
