$(function () {
  // 画像の表示/非表示を切り替える
  $.subscribeToALMemoryEvent("timeViw", function (data) {
    var item = data;
    document.write(item);
  });
});