var obj = JSON.parse($response.body);

var id = obj.userid;

obj = {

  "code": 0,
  "message": "成功",
  "data": {
    "user_info": {
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
      "today_coin_amount": 0,
      "readTime": 0,
      "todayGoldCoin": 0,
      "nickname_data": {
        "msg": "",
        "status_name": "",
        "code": "0"
      },
      "welfare_task": "",
      "mobile": "",
      "audit_avatar": "",
      "avatar": "https://img.midukanshu.com/mdwz/icon/default.png",
      "login_status": "1",
      "todayGoldCoinMoney": 0
    },
    "audit_enable": "0",
    "my_list": [
      [
        {
          "action": "3",
          "target": "10",
          "id": "4",
          "title": "",
          "red": "-1",
          "needLogin": "2",
          "icon": "https://img.midukanshu.com/mdwz/icon/my_histroy@2x.png",
          "name": "<font color=\"#666666\">阅读记录</font>"
        }
     ]
    ],
    "my_vip": {
      "vip_end_time": "",
      "icon": {
        "vip": "https://img.midukanshu.com/browser/banner/684721e6ab85827fff2fbef8afcc7aea.png"
      },
      "is_vip": "1"
    },
    "inner_mail": {
      "mail_item_icon": "https://img.midukanshu.com/mdwz/icon/my_inner_mail.png",
      "mail_url": "http://message.qttfe.com/message/#/",
      "mail_num": "1",
      "mail_icon": "https://img.midukanshu.com/mdwz/icon/icon_message.png",
      "mail_open": "1"
    },
    "my_wallet": {
      "list": [
        {
          "action": "2",
          "isCoin": "1",
          "target": "",
          "id": "301",
          "title": 26281,
          "tips": "",
          "needLogin": "1",
          "name": "<font color=\"#666666\">金币余额</font>"
        },
        {
          "action": "2",
          "isCoin": "0",
          "target": "",
          "id": "302",
          "title": 2.63,
          "tips": "",
          "needLogin": "1",
          "name": "<font color=\"#666666\">现金余额</font>"
        },
        {
          "action": "2",
          "isCoin": "0",
          "target": "",
          "id": "303",
          "title": 0,
          "tips": "",
          "needLogin": "1",
          "name": "<font color=\"#666666\">今日金币</font>"
        }
      ]
    }
  },
  "currentTime": 1590589216
}
obj.userid = id;

$done({ body: JSON.stringify(obj) });
