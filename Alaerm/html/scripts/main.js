$(function () {
  $.subscribeToALMemoryEvent("timeViw", function (data) {
    var item = data;
    document.write(item);
  });

  $.subscribeToALMemoryEvent("setTime", function () {
    var item = document.timeset.timeset.value
  });

  $.subscribeToALMemoryEvent("buttonOn", function (data) {
    var item = data[0];
    var visFlag = data[1];
    if (visFlag) {
      $(item).css('visibility', 'visible');
    } else {
      $(item).css('visibility', 'hidden');
    }

    var item = document.timeset.timeset.value
    document.write(item)
  });
});