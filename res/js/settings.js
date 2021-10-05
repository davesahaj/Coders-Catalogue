//Default State of Buttons
if(window.localStorage.getItem("CFBUTTON") == null) {
  window.localStorage.setItem("CFBUTTON", true);
}

//Events Triggering OnChange
$("#codeforcesBtn").on("change", function () {
  if (this.checked) {
    window.localStorage.setItem("CFBUTTON", true);
  } else {
    window.localStorage.setItem("CFBUTTON", false);
  }
});
