/*
小影视去ads
MITM = *.leyiapps.com
*/

const ad = 'getGlobalData';

let obj = JSON.parse($response.body);

if ($request.url.indexOf(ad) != -1) {
delete obj.data.adrows
delete obj.data.adshow
}
$done({body: JSON.stringify(obj)});
