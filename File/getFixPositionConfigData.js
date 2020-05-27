var obj = JSON.parse($response.body);

var id = obj.userid;

obj = {

  "code": 0,
  "message": "成功",
  "data": {
    "bookshelf_broadcast": [
    ],
    "bookshelf_topicon1": {
    },
    "bookshelf_topicon2": {
    },
    "bookshelf_button": {
    }
  },
  "currentTime": 1590592293
}
obj.userid = id;

$done({ body: JSON.stringify(obj) });
