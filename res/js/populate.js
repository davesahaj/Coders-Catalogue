function populate(N, D, T, L, S) {
  let R = "";

  let dateTime = splitTime(D);
  D = "";
  if (dateTime.Days > 0) {
    D += dateTime.Days + " Days ";
  }
  if (dateTime.Hours > 0) {
    D += dateTime.Hours + " Hours ";
  }
  if (dateTime.Minutes > 0) {
    D += dateTime.Minutes + " Minutes";
  }

  T = getDuration(T);
  T += " Hours";

  let siteinfo = `
          <!-- row -->
          <div class="d-flex flex-row flex-fill my-2">
            <!-- first column -->
            <div class="d-flex flex-column first-column">
              <!-- logo -->
              <img
                src="res/icons/${S}.png"
                width="48"
                height="48"
                class="contest-logo"
              />
            </div>

            <!-- middle column -->
            <div class="d-flex flex-column mid-column">
              <div class="d-flex flex-fill contest-heading">
                <span
                  class="
                    d-flex
                    justify-content-center
                    flex-nowrap flex-shrink-0
                    overflow-hidden
                  "
                  >${N}
                </span>
              </div>
              <div class="d-flex flex-row flex-fill">
                <div class="contest-duration d-flex flex-fill">
                  <span
                    class="d-flex flex-fill justify-content-start flex-nowrap"
                    >${T}</span
                  >
                </div>
                <div class="contest-datetime d-flex flex-fill">
                  <span
                    class="d-flex flex-fill justify-content-end flex-nowrap"
                  >
                    ${D}</span
                  >
                </div>
              </div>
            </div>

            <div class="d-flex flex-column flex-fill">
              <div
                class="
                  d-flex
                  flex-row
                  justify-content-end
                  flex-nowrap flex-fill
                "
              >
                <a href="${L}" target="_blank"
                  ><i class="fas fa-external-link-alt"></i
                ></a>
              </div>
              <div class="d-flex flex-row justify-content-end flex-nowrap">
                <i class="fas fa-bell"></i>
              </div>
            </div>
        </div>`;

  CONTESTLIST.innerHTML += siteinfo;
}
