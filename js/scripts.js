var numbers = [];
var count = function(numberInput) {
  for (var i = 1; i <= numbers; i++) {
    numbers.push(i);
};
  return numbers;
};







$(document).ready(function() {
  $("form#number").submit(function(event) {
    var numberInput = parseInt$("input#number").val();


     $("div#output").show();
     event.preventDefault();
  });
});
