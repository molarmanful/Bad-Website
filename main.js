$(document).ready(function(){
  var x;
  function changecolors() {
      x = 1;
      setInterval(change, 250);
  }
  function change() {
      if (x === 1) {
          bcolor = "red";
          color = "blue";
          x = 2;
      } else {
          bcolor = "black";
          bcolor = "red"
          x = 1;
      }
      document.getElementbyId('flash').style.backgroundColor = bcolor;
      document.getElementbyId('flash').style.backgroundColor = color;
  }
});
