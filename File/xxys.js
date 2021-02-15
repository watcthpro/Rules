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
delete obj.data.global_adgroup_ad4
delete obj.data.global_adgroup_ad8
delete obj.data.global_adgroup_ad16
delete obj.global_adgroup_ad1
  
}

$done({body: JSON.stringify(obj)});
