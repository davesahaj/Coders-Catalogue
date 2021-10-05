function populate(N, D, T, L) {
  let R = "Remind";
<<<<<<< HEAD
  //   let I = `icons/${N}.png`;
  let I = "../icons/HACKERRANK.png";
=======
    // let I = `icons/${N}.png`;
  let I = "icons/HACKERRANK.png";
>>>>>>> 1486bb687e0bcefe9b70b79d4b192d58ad7d3fd4

  let siteinfo = `<div class="row m-1">
            <div class="col-2 overflow-hidden"><img src="${I}" width=64px height=64px></div>
            <div class="col-8">
              <div class="row">
                <div class="col-12 overflow-hidden">${N}</div>
              </div>
              <div class="row">
                <div class="col-6 overflow-hidden">${D}</div>
                <div class="col-6 overflow-hidden">${T} Hours</div>
              </div>
            </div>
            <div class="col-2">
              <div class="col overflow-hidden"><a href="${L}" target="_blank">Link</a></div>
              <div class="col overflow-hidden">${R}</div>
            </div>
          </div>`;

  CONTESTLIST.innerHTML += siteinfo;
}

function buttonCheck(N, D, T, L, S) {
  if(S === 'CodeForces' && CFBUTTON != null) {
    populate(N, D, T, L);
  }
}
