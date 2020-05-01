/*
^https:\/\/api\.rr\.tv\/watch\/v4\/priority_video_quality\/get_priority_video_quality_config\? url script-response-body https://raw.githubusercontent.com/watcthpro/Rules/master/QuantumultX/File/rrtv.js

*/

var obj = JSON.parse($response.body);

obj = {
  "code": "0000",
  "msg": "Success",
  "data": {
    "sortedItems": [
      {
        "qualityDescription": "高清",
        "qualityCode": "SD",
        "canPlay": true,
        "canShowVip": false,
        "initialQuality": true
      },
      {
        "qualityDescription": "超清",
        "qualityCode": "HD",
        "canPlay": true,
        "canShowVip": false,
        "initialQuality": false
      },
      {
        "qualityDescription": "原画",
        "qualityCode": "OD",
        "canPlay": true,
        "canShowVip": true,
        "initialQuality": true
      },
      {
        "qualityDescription": "AI原画",
        "qualityCode": "AI_OD",
        "canPlay": true,
        "canShowVip": true,
        "initialQuality": true
      }
    ]
  },
  "traceId": null
}


$done({ body: JSON.stringify(obj) });
