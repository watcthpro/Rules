var obj = JSON.parse($response.body);

var id = obj.userid;

obj = {
  "code" : 0,
  "message" : "成功",
  "data" : {
    "cards" : {
      "vip" : {
        "name" : "极速会员卡",
        "start_time" : "2022-05-01 11:38:22",
        "end_time" : "2022-05-08 11:38:22"
      }
    },
    "equity" : [
      {
        "equityId" : "21",
        "endTime" : "2022-05-08 11:38:22",
        "equityType" : "1",
        "name" : "免广告"
      },
      {
        "equityId" : "22",
        "endTime" : "2022-05-08 11:38:22",
        "equityType" : "2",
        "name" : "音量键翻页"
      },
      {
        "equityId" : "23",
        "endTime" : "2022-05-08 11:38:22",
        "equityType" : "3",
        "name" : "听书"
      },
      {
        "equityId" : "24",
        "endTime" : "2022-05-08 11:38:22",
        "equityType" : "4",
        "name" : "缓存"
      },
      {
        "equityId" : "25",
        "endTime" : "2022-05-08 11:38:22",
        "equityType" : "7",
        "name" : "尊贵标识"
      }
    ],
    "freeAd" : {
      "ADCodeReadTopPop" : "1",
      "ADCodeReadInsertVideo" : "1",
      "ADCodeReadTopVideoButton" : "1",
      "ADCodeNewInsert" : "1",
      "ADCodeNewUnlock" : "1",
      "ADChapterEndCoinVideo" : "1",
      "ADCodeReadFullScreen" : "1",
      "ADCodeSingleBookVideo" : "1",
      "ADChapterEndFreeVideo" : "1",
      "ADCodeReadStartIncentiveVideo" : "1",
      "ADCodeReadBottomFloat" : "1",
      "ADCodeReadEnd" : "1",
      "ADCodeReadMiddlePop" : "1",
      "ADCodeReadInsertFixed" : "1",
      "ADCodeReadEndIncentiveVideo" : "1",
      "ADCodeNewUnlockAuto" : "1",
      "ADCodeNewInsertVideo" : "1",
      "ADCodeBottomGuide" : "1",
      "ADCodeReadInsert" : "1",
      "ADCodeNewEndVideo" : "1",
      "ADCodeReadEndShadow" : "1"
    },
    "is_vip" : "1",
    "userId" : "1052099891",
    "special_desc" : "听书权益全新上线",
    "card_id" : "1000001052099891",
    "packages" : "0",
    "vip_end_time" : "2022-05-08 11:38:22",
    "icon" : {
      "vip" : "https://img.midukanshu.com/browser/banner/2c52efc076f922d75d8bd6dc753c83c0.png"
    },
    "name" : "VIP会员"
  },
  "currentTime" : 1588308864
};

obj.userid = id;

$done({ body: JSON.stringify(obj) });
