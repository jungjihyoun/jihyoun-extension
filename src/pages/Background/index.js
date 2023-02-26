console.log('백그라운드 파일 :::::::');

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log(message);
// });

/** 북마크 트리를 가져옵니다. **/
// chrome.bookmarks.getTree(() => {
//   console.log('북마크크크');
// });

// chrome.bookmarks.getChildren(1, function (children) {
//   children.forEach(function (bookmark) {
//     console.debug(bookmark.title);
//     console.log(bookmark.id);
//   });
// });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'get-bookmarks') {
    chrome.bookmarks.getTree(function (tree) {
      console.log('북마크 가져오기');
    });
  }
});

chrome.bookmarks.getTree(function (tree) {
  console.log('북마크 가져오기123123:::!!@@');
});
