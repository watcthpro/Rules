var obj = JSON.parse($response.body);

var id = obj.userid;

obj = {

  "code" : 0,
  "message" : "成功",
  "data" : [
    {
      "id" : "51",
      "name" : "精选",
      "nodesId" : "602",
      "isDefault" : "1",
      "bottomFloats" : {
        "buttonTitle" : "",
        "subTitle" : "",
        "showPage" : "",
        "title" : "",
        "targetUrl" : ""
      },
      "action" : "1",
      "color" : "",
      "image" : "",
      "target" : "602",
      "headImgTarget" : "",
      "headImg" : "",
      "icons" : [

      ]
    },
    {
      "id" : "52",
      "name" : "男频",
      "nodesId" : "6",
      "isDefault" : "0",
      "bottomFloats" : {
        "buttonTitle" : "",
        "subTitle" : "",
        "showPage" : "",
        "title" : "",
        "targetUrl" : ""
      },
      "action" : "1",
      "color" : "",
      "image" : "",
      "target" : "6",
      "headImgTarget" : "",
      "banners" : [

      ],
      "headImg" : "",
      "icons" : [

      ]
    },
    {
      "id" : "100",
      "name" : "女频",
      "nodesId" : "7",
      "isDefault" : "0",
      "bottomFloats" : {
        "buttonTitle" : "",
        "subTitle" : "",
        "showPage" : "",
        "title" : "",
        "targetUrl" : ""
      },
      "action" : "1",
      "color" : "",
      "image" : "",
      "target" : "7",
      "headImgTarget" : "",
      "banners" : [

      ],
      "headImg" : "",
      "icons" : [

      ]
    },
    {
      "id" : "75",
      "name" : "抢新书",
      "nodesId" : "612",
      "isDefault" : "0",
      "bottomFloats" : {
        "buttonTitle" : "",
        "subTitle" : "",
        "showPage" : "",
        "title" : "",
        "targetUrl" : ""
      },
      "action" : "1",
      "color" : "",
      "image" : "",
      "target" : "612",
      "headImgTarget" : "",
      "banners" : [

      ],
      "headImg" : "",
      "icons" : [

      ]
    },
    {
      "id" : "133",
      "name" : "独家专区",
      "nodesId" : "640",
      "isDefault" : "0",
      "bottomFloats" : {
        "buttonTitle" : "",
        "subTitle" : "",
        "showPage" : "",
        "title" : "",
        "targetUrl" : ""
      },
      "action" : "1",
      "color" : "",
      "image" : "",
      "target" : "640",
      "headImgTarget" : "",
      "banners" : [

      ],
      "headImg" : "",
      "icons" : [

      ]
    },
    {
      "id" : "54",
      "name" : "青少年专区",
      "nodesId" : "591",
      "isDefault" : "0",
      "bottomFloats" : {
        "buttonTitle" : "",
        "subTitle" : "",
        "showPage" : "",
        "title" : "",
        "targetUrl" : ""
      },
      "action" : "1",
      "color" : "",
      "image" : "",
      "target" : "591",
      "headImgTarget" : "",
      "banners" : [

      ],
      "headImg" : "",
      "icons" : [

      ]
    },
    {
      "id" : "56",
      "name" : "出版小说",
      "nodesId" : "588",
      "isDefault" : "0",
      "bottomFloats" : {
        "buttonTitle" : "",
        "subTitle" : "",
        "showPage" : "",
        "title" : "",
        "targetUrl" : ""
      },
      "action" : "1",
      "color" : "",
      "image" : "",
      "target" : "588",
      "headImgTarget" : "",
      "banners" : [

      ],
      "headImg" : "",
      "icons" : [

      ]
    }
  ],
  "currentTime" : 1588986982
}


obj.userid = id;

$done({ body: JSON.stringify(obj) });
