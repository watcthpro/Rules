var body = JSON.parse($response.body);
var obj = {
{
  "code" : "PY0000",
  "msg" : "成功",
  "serialSeq" : "125202201270704398266032",
  "response" : {
    "list" : [
      {
        "busCode" : "B201903111459463308",
        "mouldCode" : "",
        "cycleCode" : "",
        "datas" : [
          {
            "bidMode" : "",
            "dataCode" : "",
            "mouldKeys" : {
              "type" : "",
              "imgUrl" : ""
            },
            "dataName" : "",
            "dataType" : "",
            "dataUrl" : ""
          }
        ]
      }
    ]
  },
  "systemDate" : ""
}

};

$done({ body: JSON.stringify(obj) });

