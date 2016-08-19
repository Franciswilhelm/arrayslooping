var numbers = [];
var result = "";
function pingPong (userDigit) {
  for (var i = 1; i <= userDigit; i++) {
    if (i % 15 === 0) {
      numbers.append("pingpong");
    } else if (i % 3 === 0) {
      numbers.append("ping");
    } else if (i % 5 === 0) {
      numbers.append("pong");
    } else {
      numbers.push(i);
    };
  };
  result = parseInt(numbers.join(', '));
  return result;
};







$(document).ready(function() {
  $("form#counter").submit(function(event) {
    var userDigit = parseInt$("input#userDigit").val();

    $("#output").append(pingPong(userDigit));
    event.preventDefault();
  });
});
