let content = document.getElementById("contestlist");

//Codeforces List of Contest
let urlCF = "https://kontests.net/api/v1/codeforces";
fetch(urlCF)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    for (let x in data) {
      let str = `${data[x].name}`;
      if (str.includes("Codeforces Round"))
        content.innerHTML += `${data[x].name} <br>`;
    }
  })
  .catch((error) => document.write("Unable to fetch Codeforces Rounds!"));
//Codechef List of Contest
let urlCC = "https://kontests.net/api/v1/code_chef";
fetch(urlCC)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    for (let x in data) {
      let str = `${data[x].name}`;
      if (str.includes("2021")) content.innerHTML += `${data[x].name} <br>`;
    }
  })
  .catch((error) => document.write("Unable to fetch Codechef Contests!"));
