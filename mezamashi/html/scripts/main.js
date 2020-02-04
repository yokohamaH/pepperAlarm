$(function() {
  // 画像の表示/非表示を切り替える
  $.subscribeToALMemoryEvent("buttonOn", function (data) {
    var item = data[0];
    var visFlag = data[1];
    if (visFlag) {
        $(item).css('visibility','visible');
    } else {
        $(item).css('visibility','hidden');
    }
  });
  
  // 背景画像を切り替える
  $.subscribeToALMemoryEvent("changeBack", function (data) {
    var src = data;
    //$('.image_back').attr('src','images/sample.png');
    $('.image_back').attr('src','images/'+src);
  });

});