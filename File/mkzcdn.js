var body = $response.body;
var  url = $request.url;
var obj = JSON.parse($response.body);

const vip = "/user/funds/info/";

if (url.indexOf(vip) != -1) {
  obj.data["gold"] = "8888";
	obj.data["vip_end_time"] = "1728654772";
  obj.data["is_vip"] = "3";
}
$done({body: JSON.stringify(obj)});
