const ad = 'ssp-svr/ssp/list3';
const adold = 'getGlobalData';
let obj = JSON.parse($response.body);

if ($request.url.indexOf(ad) != -1) {
delete obj.data.pmap
}

if ($request.url.indexOf(adold) != -1) {
delete obj.data.adrows
delete obj.data.adgroups
delete obj.data.iOS_adgroups
delete obj.data.ad1
delete obj.data.ad2
delete obj.data.ad3

}

$done({body: JSON.stringify(obj)});
