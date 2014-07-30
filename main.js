$(document).ready(function(){
  var x = 1;
  setInterval(change, 100);
  function change() {
      if (x == 1) {
          var bcolor = "red";
          var color = "blue";
          x = 2;
      } else if(x == 2){
          var bcolor = "pink";
          var color = "teal";
          x = 3;
      } else if(x == 3){
          var bcolor = "green";
          var color = "DarkGreen";
          x = 4;
      } else {
          var bcolor = "black";
          var color = "red";
          x = 1;
      }
      $('#flash').css('background-color', bcolor);
      $('#flash').css('color', color);
  }
  var len = 100,
    str = '';
  while(len--) {
      str += String.fromCharCode( 48 + ~~(Math.random() * 42) );
  }
  $('#randomtext').text(str);
  $('#submit').click(function(){
    $('#res').text('No results found.');
  });
});
