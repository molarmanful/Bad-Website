$(document).ready(function(){
  var x;
  var bcolor;
  var color
  function changecolors() {
      x = true;
      setInterval(change, 250);
  }
  function change() {
      if (x == true) {
          bcolor = "red";
          color = "blue";
          x = false;
      } else {
          bcolor = "black";
          bcolor = "red";
          x = true;
      }
      document.getElementbyId('flash').style.backgroundColor = bcolor;
      document.getElementbyId('flash').style.backgroundColor = color;
  }
});
