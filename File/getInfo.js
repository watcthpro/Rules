  
var obj = JSON.parse($response.body);

var id = obj.userid;

obj = {

  "code": 0,
  "message": "成功",
  "data": {
    "userId": "1051102355",
    "avatarAuditStatus": "",
    "invite_code": "A1051102355",
    "weixin": "",
    "nicknameAuditStatus": "0",
    "audit_nickname": "",
    "goldCoinMoney": 2.63,
    "avatar_data": {
      "msg": "",
      "status_name": "",
      "code": "0"
    },
    "nickname": "用户1051102355",
    "qutoutiao": "",
    "tuid_wallet": 0,
    "user_id": "1051102355",
    "goldCoin": 26281,
    "readTime": 0,
    "todayGoldCoin": 0,
    "nickname_data": {
      "msg": "",
      "status_name": "",
      "code": "0"
    },
    "welfare_task": "https://static-mdwz-app.1sapp.com/task/index.html",
    "mobile": "",
    "audit_avatar": "",
    "avatar": "https://img.midukanshu.com/mdwz/icon/default.png",
    "login_status": "1",
    "vip": {
      "cards": {
      },
      "equity": [
      ],
      "freeAd": {
        "ADCodeReadTopPop": "1",
        "ADCodeReadInsertVideo": "1",
        "ADCodeReadTopVideoButton": "1",
        "ADCodeNewInsert": "1",
        "ADCodeNewUnlock": "1",
        "ADChapterEndCoinVideo": "1",
        "ADCodeReadFullScreen": "1",
        "ADCodeSingleBookVideo": "1",
        "ADChapterEndFreeVideo": "1",
        "ADCodeReadStartIncentiveVideo": "1",
        "ADCodeReadBottomFloat": "1",
        "ADCodeReadEnd": "1",
        "ADCodeReadMiddlePop": "1",
        "ADCodeReadInsertFixed": "1",
        "ADCodeReadEndIncentiveVideo": "1",
        "ADCodeNewUnlockAuto": "1",
        "ADCodeNewInsertVideo": "1",
        "ADCodeBottomGuide": "1",
        "ADCodeReadInsert": "1",
        "ADCodeNewEndVideo": "1",
        "ADCodeReadEndShadow": "1"
      },
      "is_vip": "1",
      "vip_end_time": "",
      "special_desc": "听书权益全新上线",
      "icon": {
        "vip": "https://img.midukanshu.com/browser/banner/684721e6ab85827fff2fbef8afcc7aea.png"
      }
    },
    "todayGoldCoinMoney": 0
  },
  "currentTime": 1590587151
}
obj.userid = id;

$done({ body: JSON.stringify(obj) });
