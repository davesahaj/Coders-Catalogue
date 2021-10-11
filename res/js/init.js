function updateData() {
  setCheckBox();

  fetchData(); //get latest data from API
}

function initRun() {
  // get button settings
  //Default State of Buttons
  if (window.localStorage.getItem("CC_BUTTONS") == null) {
    let tmp = {
      [HACKERRANK]: false,
      [TOPCODER]: false,
      [CODECHEF]: false,
      [HACKEREARTH]: false,
      [CODEFORCES]: false,
      [ATCODER]: false,
      [LEETCODE]: false,
      [KICKSTART]: false,
      [TOPH]: false,
    };
    window.localStorage.setItem("CC_BUTTONS", JSON.stringify(tmp));
  }

  CCBSTORAGE = JSON.parse(window.localStorage.getItem("CC_BUTTONS"));

  updateData();
}

initRun();
