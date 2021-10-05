
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

function overlay(v) {
  if (v == 0) {
    $(OVERLAYSPINNER).hide();
    $(HEADER).show();
    $(CONTESTLIST).show();
    $(SETTINGS).hide();
    $(FOOTER).show();
  } else {
    $(OVERLAYSPINNER).show();
    $(HEADER).hide();
    $(CONTESTLIST).hide();
    $(SETTINGS).hide();
    $(FOOTER).hide();
  }
}
