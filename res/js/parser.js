function fetchData() {
  overlay(1);

  fetch(URLAPI)
    .then((response) => response.json())
    .then((data) => {
      overlay(0);

      for (let x in data) {
        let N = `${data[x].name}`;
        let D = `${data[x].start_time}`;
        let T = `${data[x].duration}`;
        let L = `${data[x].url}`;

        T = sectohrs(T);

        populate(N, D, T, L);
      }
    })
    .catch((error) => overlay(1));
}
