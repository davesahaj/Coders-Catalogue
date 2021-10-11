function fetchData() {
  try {
    let contestDataAvailable = JSON.parse(
      window.localStorage.getItem("ContestList")
    );

    if (contestDataAvailable == null) {
      refresh_data();
    }
    for (let i = 0; i < contestDataAvailable.length; i++) {
      let { N, D, T, L, S } = JSON.parse(
        window.localStorage.getItem("ContestList")
      )[i];
      populate(N, D, T, L, S);
    }
    overlay(0);
  } catch (err) {
    overlay(1);
  }
}
