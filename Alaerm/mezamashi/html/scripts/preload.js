$(function() {
  var delay = 0;

  var preloadCount = 0; // preLoadImageで作成する予定の画像数
  var loadedCount = 0;  // preLoadImageで作成されたimgタグの個数  
  
  function preLoadImage(imgUrl){
    imgUrl = imgUrl.toString();
    delay = 300;
    setTimeout(function(){
      var thisId = imgUrl.replace(".png","");
      thisId = thisId.replace(".jpg","");
      thisId = thisId.replace(".gif","");
      $(".preload-area").append("<div id='"+thisId+"' class='preload-imgs'><img src='images/"+imgUrl+"'/></div>");
      loadedCount = loadedCount + 1;
    },delay);
  };

  $.subscribeToALMemoryEvent("startPreload", function(data){
    var datas = data.split(",");
    preloadCount = datas.length;    // 作成する予定の画像数
    for(var i=0;i<datas.length;i++){
      preLoadImage(datas[i]);
    };
    $(".page").css("position", "static");
  });
  
  // preLoadImageで作成予定の画像数と作成済みの画像数を返す
  // ２つの画像数が一致していたら作成完了を意味する
  $.subscribeToALMemoryEvent("getPreLoadCount", function(data){
    var cntAry =[ ];
    cntAry.push(preloadCount);
    cntAry.push(loadedCount);
    $.raiseALMemoryEvent("Aheaho/PreLoadCount", cntAry);
  });

});
