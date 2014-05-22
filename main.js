$(document).ready(function(){
  var x = true;
  setInterval(change, 250);
  function change() {
      if (x == true) {
          var bcolor = "red";
          var color = "blue";
          x = false;
      } else {
          var bcolor = "black";
          var color = "red";
          x = true;
      }
      $('#flash').css('background-color', bcolor);
      $('#flash').css('color', color);
  }
});
