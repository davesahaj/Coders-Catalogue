function initRun() {
  $(OVERLAYSPINNER).show();
  $(HEADER).hide();
  $(CONTESTLIST).hide();
  $(SETTINGS).hide();
  $(FOOTER).hide();

  if (true) {
    $(OVERLAYSPINNER).hide();
    $(HEADER).show();
    $(CONTESTLIST).show();
    $(SETTINGS).hide();
    $(FOOTER).show();
  }
}

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

initRun();
