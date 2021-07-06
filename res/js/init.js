let homepage = document.getElementById("HomePage");
let settings = document.getElementById("Settings");
let contestlist = document.getElementById("ContestList");

$(settings).hide();
// $(contestlist).hide();
$(homepage).show();

$(document).ready(function(){
    $("#toggleSwitch").click(function(){
      $(contestlist).toggle();
    });
  });