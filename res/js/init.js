function updateData() {
  fetchData();
  
}

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

function initRun() {
  updateData();
}

initRun();
