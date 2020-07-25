/*
https:\/\/.*\/getGlobalData
*/
const ad = 'getGlobalData';
var obj = JSON.parse($response.body);
if ($request.url.indexOf(ad) != -1) {
delete obj.data.adrows
delete obj.data.adgroups
delete obj.data.popupactivity_iOS
delete obj.data.iOS_adgroups
delete obj.data.popuptext_iOS
}
$done({body: JSON.stringify(obj)});
