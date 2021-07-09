let homepage = document.getElementById("HomePage");
let settings = document.getElementById("settings");
let contestlist = document.getElementById("ContestList");

$(settings).hide();
// $(contestlist).hide();
$(homepage).hide();

$(document).ready(function(){
    $("#toggleSwitch").click(function(){
      $(contestlist).toggle();
      $(settings).toggle();
    });
  });