// destination variables
const destinationTabs = document.querySelectorAll(".tab-list");
const destinationArticle = document.querySelector(".destination-info");
const destinationImg = document.getElementById("destination-picture");

// crew variables
const crewTabs = document.querySelectorAll(".dot-indicators");
const crewArticle = document.querySelector(".crew-details");
const crewImg = document.getElementById("crew-picture");

// technology variables
const technologyTabs = document.querySelectorAll(".numbered-indicators");
const technologyArticle = document.querySelector(".technology-info");
const technologyImg = document.getElementById("technology-picture");

// Destination page data
destinationTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const currentTab = e.target.dataset.id;
    const currentTarget = e.target;
    console.log(currentTarget);
    // switch between tabs
    tab
      .querySelector('[aria-selected = "true"]')
      .setAttribute("aria-selected", false);
    currentTarget.setAttribute("aria-selected", true);

    // fetching destination data
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        const destination = data.destinations;
        for (let i = 0; i < destination.length; i++) {
          if (currentTab === destination[i].name) {
            //Display destination data for each tab
            destinationImg.innerHTML = `
             <source
          srcset="${destination[i].images.webp}"
          type="image/webp"
        />
        <img src="${destination[i].images.png}" alt="The ${currentTab}" />
            `;
            destinationArticle.innerHTML = `
           <h2 class="fs-800 ff-serif uppercase">${destination[i].name}</h2>
        <p class="text-accent">
          ${destination[i].description}
        </p>
        <div class="destination-meta flex">
          <div>
            <h3
              class="fs-200 uppercase ff-sans-cond letter-spacing-3 text-accent"
            >
             Avg. Distance
            </h3>
            <p class="ff-serif uppercase">${destination[i].distance}</p>
          </div>
          <div>
            <h3
              class="fs-200 uppercase ff-sans-cond letter-spacing-3 text-accent"
            >
              Est. travel time
            </h3>
            <p class="ff-serif uppercase">${destination[i].travel}
          </div>
        </div>
          `;
          }
        }
      });
  });
});

// crew page data

crewTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const currentTab = e.target.dataset.id;
    const currentTarget = e.target;
    // switch between tabs
    tab
      .querySelector('[aria-selected = "true"]')
      .setAttribute("aria-selected", false);
    currentTarget.setAttribute("aria-selected", true);

    // fetching crew data
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        const crew = data.crew;
        for (let i = 0; i < crew.length; i++) {
          if (currentTab === crew[i].name) {
            //Display crew data for each tab
            crewImg.innerHTML = `
            <source
          srcset="${crew[i].images.webp}"
          type="image/webp"
        />
        <img
          src="${crew[i].images.png}"
          alt="${currentTab}: ${crew[i].name}"
        />
          `;
            crewArticle.innerHTML = `
          <header class="flow flow--space-small">
          <h2 class="fs-600 ff-serif uppercase text-faded">${crew[i].role}</h2>
          <p class="fs-800 ff-serif uppercase">${crew[i].name}</p>
        </header>
        <p class="text-accent">
          ${crew[i].bio}
        </p>
        `;
          }
        }
      });
  });
});

// technology page data
technologyTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const currentTab = e.target.dataset.id;
    const currentTarget = e.target;

    // switch between tabs
    tab
      .querySelector('[aria-selected = "true"]')
      .setAttribute("aria-selected", false);
    currentTarget.setAttribute("aria-selected", true);

    // fetching crew data
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        const technology = data.technology;
        for (let i = 0; i < technology.length; i++) {
          if (currentTab === technology[i].name) {
            //Display crew data for each tab
            technologyImg.innerHTML = `
            <source  media="(min-width: 45em)"
          srcset="${technology[i].images.portrait}"
          type="image/jpg"
        />
        <source  media="(min-width: 35em)"
          srcset="${technology[i].images.landscape}"
          type="image/jpg"
        />
        <source
          srcset="${technology[i].images.landscape}"
          type="image/jpg"
        />
        <img
          src=${technology[i].images.landscape}"
          alt="${technology[i].name}"
        />
        `;

            technologyArticle.innerHTML = `
        <header class="flow flow--space-small">
          <p class="fs-600 ff-serif uppercase">The terminology...</p>
          <h2 class="fs-800 ff-serif uppercase">${technology[i].name}</h2>
        </header>
        <p class="text-accent">
          ${technology[i].description}
        </p>
        `;
          }
        }
      });
  });
});
