let content = document.getElementById("ContestList");

//Codeforces List of Contest
let urlCF = "https://kontests.net/api/v1/codeforces";
fetch(urlCF)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let x in data) {
      let str = `${data[x].name}`;
      if (str.includes("Codeforces Round"))
<<<<<<< HEAD
        content.innerHTML += `${data[x].name} <br><br>`
=======
        content.innerHTML += `${data[x].name} <br>`;
>>>>>>> b4de459516a675a1e28b2df945d35844d3870c6d
    }
  })
  .catch((error) => document.write("Unable to fetch Codeforces Rounds!"));

//Codechef List of Contest
let urlCC = "https://kontests.net/api/v1/code_chef";
fetch(urlCC)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let x in data) {
      let str = `${data[x].name}`;
<<<<<<< HEAD
      if (str.includes("2021"))
        content.innerHTML += `${data[x].name} <br><br>`
=======
      if (str.includes("2021")) content.innerHTML += `${data[x].name} <br>`;
>>>>>>> b4de459516a675a1e28b2df945d35844d3870c6d
    }
  })
  .catch((error) => document.write("Unable to fetch Codechef Contests!"));
