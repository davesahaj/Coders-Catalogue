let homepage = document.getElementById("homepage");
let settings = document.getElementById("settings");
let contestlist = document.getElementById("ContestList");

$(settings).hide();
// $(contestlist).hide();
$(homepage).show();

$(document).ready(function(){
    $("#toggleSwitch").click(function(){
      $(contestlist).toggle();
    });
  });