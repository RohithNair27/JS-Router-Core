const PORT = location.port;
const templateLocation = [
  "./templates/HomePage.html",
  "./templates/AboutPage.html",
  "./templates/SettingPage.html",
];

let root = document.getElementById("root");
let listItem = document.querySelectorAll(".list-item");

window.addEventListener("DOMContentLoaded", onClickNavigate);

function onClickNavigate(event) {
  if (event) event.preventDefault();
  // Target will return the whole element and href will only return the url.
  let pathName = "";
  if (event.type === "click") {
    pathName = event.target.href.split(PORT)[1];
  } else {
    pathName = location.href.split(PORT)[1];
  }
  // pushState adds a new entry in the current session's history stack
  window.history.pushState({}, "", event.target.href || location.href);
  pageData(pathName);
}

// This gets the data from the other html file without reloading
async function getPageDataFromTemplates(location) {
  return await fetch(templateLocation[location]).then((response) => {
    return response.text();
  });
}
async function pageData(pathName) {
  switch (pathName) {
    case "/":
      root.innerHTML = await getPageDataFromTemplates(0);
      setAchorTagActive(0);
      break;
    case "/about":
      root.innerHTML = await getPageDataFromTemplates(1);
      setAchorTagActive(1);
      break;
    case "/setting":
      root.innerHTML = await getPageDataFromTemplates(2);
      setAchorTagActive(2);
      break;
    default:
      root.innerHTML = "404 not found";
  }
}

// just to set the list items active and inactive
function setAchorTagActive(index) {
  listItem.forEach((item, currentIndex) => {
    if (currentIndex === index) item.classList.add("active");
    else item.classList.remove("active");
  });
}

// here popstate will call the function everytime we press on navigation icon in chrome
window.addEventListener("popstate", onClickNavigate);
