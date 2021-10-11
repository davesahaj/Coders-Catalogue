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

function toggleSite(site) {
  if (site.checked) {
    CCBSTORAGE[site.name] = true;
  } else {
    CCBSTORAGE[site.name] = false;
  }
  window.localStorage.setItem("CC_BUTTONS", JSON.stringify(CCBSTORAGE));
}

function setCheckBox() {
  for (let site in CCBSTORAGE) {
    if (CCBSTORAGE[site]) {
      document.getElementsByName(site)[0].checked = true;
    } else {
      document.getElementsByName(site)[0].checked = false;
    }
  }
}
