$(document).ready(function(){
  var x = true;
  function changecolors() {
      setInterval(change, 1000);
  }
  function change() {
      if (x == true) {
          var bcolor = "red";
          var color = "blue";
          x = false;
      } else {
          var bcolor = "black";
          var bcolor = "red";
          x = true;
      }
      $('#flash').css('background-color', bcolor);
      $('#flash').css('color', color);
  }
});
