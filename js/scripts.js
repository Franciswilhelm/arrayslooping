function count(num) {
  var s = "";
  for(var i = 1; i <= num; i++) {
    s += i;

    if (i < (num)) {
      s += ', ';
    }
  }
  return s;
}







$(document).ready(function() {
  $("form#number").submit(function(event) {
    var numberInput = $("input#number").val();
    event.preventDefault();

     $("#output").show();
  });
});
