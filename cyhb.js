var obj = JSON.parse($response.body);

var id = obj.userid;

obj = {
  "status" : 1,
  "info" : "ok",
  "body" : {
}
obj.userid = id;

$done({ body: JSON.stringify(obj) });
