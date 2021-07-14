//

$(function () {
  $("#toggle").click(function (e) {
    $(CONTESTLIST).toggle();
    $(SETTINGS).toggle();

    if (HEADERTEXT.innerText == "Contests") {
      HEADERTEXT.innerText = "Settings";
    } else if (HEADERTEXT.innerText == "Settings") {
      HEADERTEXT.innerText = "Contests";
    }
  });
});
