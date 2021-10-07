function fetchData() {
  try {
    let contestDataAvailable = JSON.parse(
      window.localStorage.getItem("ContestList")
    );
    if (contestDataAvailable != null) {
      for (let i = 0; i < contestDataAvailable.length; i++) {
        let { N, D, T, L, S } = JSON.parse(
          window.localStorage.getItem("ContestList")
        )[i];
        buttonCheck(N, D, T, L, S);
      }
      overlay(0);
    } else {
      window.localStorage.setItem("ContestList", JSON.stringify(ALLCONTESTS));
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
              S: data[x].site,
            };
            let { N, D, T, L, S } = contestData;
            buttonCheck(N, D, T, L, S);
            let temp = JSON.parse(window.localStorage.getItem("ContestList"));
            temp.push(contestData);
            window.localStorage.setItem("ContestList", JSON.stringify(temp));
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
  }
}
