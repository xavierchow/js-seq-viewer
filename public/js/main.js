// reverse the epoch to make it easy to distinguish
function reverseString(str) {
  str = '' + str;
  var splitString = str.split('');
  var reverseArray = splitString.reverse();
  return reverseArray.join('');
}

$(document).ready(function() {
  var options = {theme: $('.theme').text() || 'hand'};
  $("#diagram").sequenceDiagram(options);

  var svgsaver = new SvgSaver({attrs: true});
  var div = document.getElementById("diagram");
  $("#btnGroup").click(function (e) {
    if (e.target === document.getElementById("svg")) {
      svgsaver.asSvg(div.firstElementChild, "sequence_" + reverseString(Date.now()) + ".svg" );
    }
    if (e.target === document.getElementById("png")) {
      svgsaver.asPng(div.firstElementChild, "sequence_" + reverseString(Date.now()) + ".png");
    }
  });

  $("#themeGroup").click(function (e) {
    if (e.target === document.getElementById("hand")) {
      $("#diagram").text($("#orig").text());
      $("#diagram").sequenceDiagram({ theme: 'hand' });
    }
    if (e.target === document.getElementById("simple")) {
      $("#diagram").text($("#orig").text());
      $("#diagram").sequenceDiagram({ theme: 'simple' });
    }
  });
});
