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
            if(!!window.localStorage.getItem("ContestList")) {
              let temp = JSON.parse(window.localStorage.getItem("ContestList"));
              temp.push(contestData);
              window.localStorage.setItem("ContestList",JSON.stringify(temp));
            }
            
            //WORK FROM HERE
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
