document.addEventListener('DOMContentLoaded', function () {
   $("#clearTop").click(function(){
        chrome.tabs.executeScript(null, { code: 'bye.byeTop();' });
  });

  $("#clearSide").click(function(){
        chrome.tabs.executeScript(null, { code: 'bye.byeSide();' });
  });
});
