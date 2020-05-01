/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

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

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
}, reason => {
    console.log(reason.error);
});
