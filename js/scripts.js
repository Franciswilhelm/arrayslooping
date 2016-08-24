<<<<<<< HEAD
var pingPong = function(userDigit) {
  var numbers = [];
  for (var i = 1; i <= userDigit; i++) {
    if (i % 15 === 0) {
      numbers.push("pingpong");
    } else if (i % 3 === 0) {
      numbers.push("ping");
    } else if (i % 5 === 0) {
      numbers.push("pong");
=======
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
>>>>>>> 4b4e8145e5446c14ddbc596b8ad57130f6cdc4ae
    } else {
      numbers.push(i);
    };
  };
<<<<<<< HEAD
  return numbers;
};

$(document).ready(function() {
  $("form#counter").submit(function(event) {
    var userDigit = parseInt($("input#number").val());
    var resultCount = pingPong(userDigit);
    resultCount.forEach(function(i) {
      $("#output").append("<li>" + i + "</li>");
    });
    $("#show-result").show();
=======
  result = parseInt(numbers.join(', '));
  return result;
};







$(document).ready(function() {
  $("form#counter").submit(function(event) {
    var userDigit = parseInt$("input#userDigit").val();

    $("#output").append(pingPong(userDigit));
>>>>>>> 4b4e8145e5446c14ddbc596b8ad57130f6cdc4ae
    event.preventDefault();
  });
});
