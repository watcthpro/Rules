
const path1 = "/vod/reqplay/";
const ad = 'getGlobalData';
var obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.retcode = "0";
	obj.data.lastplayindex = "1";
	if(obj.data.hasOwnProperty("httpurl_preview")){
		var playurl = obj.data["httpurl_preview"];
		obj.data["httpurl"] = playurl;
	};
}

if ($request.url.indexOf(ad) != -1) {
delete obj.data.adrows
delete obj.data.adgroups
delete obj.data.iOS_adgroups
delete obj.data.sdkrows_iOS
delete obj.data.sdkrows_Android
delete obj.data.Android_adgroups

}
$done({body: JSON.stringify(obj)});
