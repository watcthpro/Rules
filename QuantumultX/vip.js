/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = 'https://apiwz.midukanshu.com/user/relation/equityInfo';
const method = 'POST';
const headers = {
'Accept-Encoding' : 'gzip',
'asVersion' : '3',
'Host' : 'apiwz.midukanshu.com',
'device' : '5E596C20-E39B-4CD9-A000-EEAA70851FED',
'idfa' : '20136365-D20A-614C-2F5F-A32649B9DF20',
'headerQueryTime' : '1588308864140',
'tk' : 'ACIgE2Nl0gphTC9foyZJud8g7FyQkM4l1IptZHd6',
'versionName' : '1.7.1.0430.1512',
'mobile-model' : 'iPhone X',
'lon' : '0',
'Connection' : 'keep-alive',
'mobile-brand' : 'iPhone',
'dtu' : 'iOS',
'Accept-Language' : 'zh-cn',
'version' : '10701',
'luid' : 'L4gYSUQG_WAmD_PByZePxqTIwMTM2MzY1LUQyMEEtNjE0Qy0yRjVGLUEzMjY0OUI5REYyMA==',
'User-Agent' : 'MRSpeedNovel/0430.1512 CFNetwork/1125.2 Darwin/19.4.0',
'tuid' : 'IBNjZdIKYUwvX6MmSbnfIA',
'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJNZHd6IiwiZGV2aWNlIjoiIiwiZ2VuVGltZSI6MTU4ODMwODAzNiwibm9uY2UiOiJicWxxZ2gyY3B1bmhtdHA4N2psZyIsInVpZCI6IjEwNTIwOTk4OTEifQ.gelzIxhPVnFHKuouwtSlYvjPlhfv32Bc94bfcKxpIiU',
'Accept' : 'application/json',
'network' : '',
'lat' : '0',
'os-version' : '13.4.1',
'app' : 'mdwz'
};
const body = 'dataEncStr=MzQ1M0RCRTIyMEI4Mzc3RDU2NDkzNzQ4OTM1NTFCMEUuY0dGeVlXMGZNREEwTlVRNVF6VXRPRVV4UVMwMFFUSTJMVUUwTURZdFEwTkNOakV4UkVFMk9ERkZIblpsY25OcGIyNGZNaDV3YkdGMFptOXliUjlwYjNNZVpXTWZNUT09Lnk2ZnH84n3XViOeH8ScKp10/VmcRYdXgf0KdDr8jCRlbbOJaGY3L/8Dze78zYh022wqS/0IWyDEDhMH/eecL4VZMrJQrwAKQ7EOvtMnsUXPVzRgSWzjBQyf8w%2BeESxJoL/RmXeOxSvf6qkq/BSP9SRdNEp2VKnj9Fq3PYinCnMK/8IKs3qd9E49D7UUDZV1kGkcYzwLs1WL/ApW84QA5ljpcSP3xCGh6Old0q4IJuHsGMoTtPzw8djdH5CbRBZ7q6tj25AbFJn9mfbm7tHzbZWRGpVmMPTEocSOTLQ%2ByNC3NJfXQU9EGUbGVPCZ28szr5E/74fiMFJc/04mtSycuIV1Y1DS5Lml1vkD9JIyiFBgTfExh5r9g0BiqjPcKS5yc9n1PwutRhprzenPkRAPmyT6tSAeVDYPUhxtxKEW1CEk4QPVtCDRcHXJSdUub8TbBoMhLFxleYN9bx2Mk%2Bj0nM%2BdU7DqT0x/9l94S6rxGaew60mife3agleVA58v%2BEu5ajUGzWR/GZCKQ7VFXB4ex2VjxPikOc563ye3dsSQ7cmBueF3OqYMwKryFYc9DSaCaG2NfckFF5pQgnAKvLe746r0aKlqgRcZDDg7Y2pxAzNxbeAaJlgJ1cxHgcWK8O1FWxjC17IUqiD3/4TLuHOfQOi6FU1lK5kqVHhtAtb52dCqNLywXW19jh/H3AGNkjZ7i3Ns0A%3D%3D';

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
}, reason => {
    console.log(reason.error);
});
