function fetchData() {
  try {
    let contestDataAvailable = !!window.localStorage.getItem("LeetCode");
    if (contestDataAvailable) {
      let { N, D, T, L } = JSON.parse(
        window.localStorage.getItem("LeetCode")
      );
      populate(N, D, T, L);
      overlay(0);
    } else {
      overlay(1);
      // let LEETCODEA = [];
      fetch(URLAPI)
        .then((response) => response.json())
        .then((data) => {
          for (let x in data) {
            let contestData = {
              N: data[x].name,
              D: data[x].start_time,
              T: data[x].duration,
              L: data[x].url,
            };
            if(!!window.localStorage.getItem("LEETCODETESTKEY")) {
              let temp = JSON.parse(window.localStorage.getItem("LEETCODETESTKEY"));
              temp.push(contestData);
              window.localStorage.setItem("LEETCODETESTKEY",JSON.parse.stringify(temp));
              console.log("HELLO2");

            } else {
              window.localStorage.setItem("LEETCODETESTKEY",JSON.stringify(contestData));
              console.log("Hello");
            }
            // let { N, D, T, L } = JSON.parse(
            //   window.localStorage.getItem("LeetCode")
            // );
            // populate(N, D, T, L);
          }
          overlay(0);
        })
        .catch((error) => {
          console.err(err);
          overlay(0);
        });
    }
  } catch (err) {
    overlay(0);
    console.error(err.message);
  }
}
