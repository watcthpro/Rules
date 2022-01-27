const ad = 'smkoperate/bid/1.0.0/getBidResource';
let obj = JSON.parse($response.body);

if ($request.url.indexOf(ad) != -1) {
delete obj.response.datas
}
$done({body: JSON.stringify(obj)});
