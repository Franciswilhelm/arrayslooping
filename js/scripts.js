
var pingPong = function(userDigit) {
  var numbers = [];
  for (var i = 1; i <= userDigit; i++) {
    if (i % 15 === 0) {
      numbers.push("pingpong");
    } else if (i % 3 === 0) {
      numbers.push("ping");
    } else if (i % 5 === 0) {
      numbers.push("pong");
    } else {
      numbers.push(i);
      }
    }
      return numbers;
  };

$(document).ready(function() {
  $("form#counter").submit(function(event) {
    var userDigit = parseInt($("input#number").val());
    $("#output").empty();
    var resultCount = pingPong(userDigit);
    resultCount.forEach(function(i) {
      $("#output").append("<li>" + i + "</li>");
    });
    $("#show-result").show();
    event.preventDefault();
  });
});
