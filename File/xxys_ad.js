/*
https:\/\/.*\/getGlobalData
*/
const ad = 'getGlobalData';
var obj = JSON.parse($response.body);
if ($request.url.indexOf(ad) != -1) {
delete obj.data.adrows
delete obj.data.adgroups
}
$done({body: JSON.stringify(obj)});
