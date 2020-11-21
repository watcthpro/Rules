/*
小小影视去广告
https:\/\/.*\/getGlobalData
*/


let obj = JSON.parse($response.body);

delete obj.data.adrows
delete obj.data.adgroups
delete obj.data.iOS_adgroups
delete obj.data.sdkrows_iOS
delete obj.data.sdkrows_Android
delete obj.data.Android_adgroups
delete obj.data.popuptext_iOS

$done({body: JSON.stringify(obj)});
