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
          $('#dance').animate({top:'0px'}, 'slow');
      } else {
          var bcolor = "black";
          var bcolor = "red";
          x = true;
          $('#dance').animate({bottom:'0px'}, 'slow');
      }
      $('#flash').css('background-color', bcolor);
      $('#flash').css('color', color);
  }
});
