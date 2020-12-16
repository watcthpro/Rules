const ad = 'category';

let obj = JSON.parse($response.body);

if ($request.url.indexOf (ad)!= -1) {

delete obj.data.gap
delete obj.data.rolls

}
$done({body: JSON.stringify(obj)});
