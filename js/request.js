const API = "https://randomuser.me/api/?results=9";

const overlay = document.getElementById("overlay");

const loaderToggle = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        loaderToggle(true);
      } else if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
        loaderToggle(false);
      } else if (request.readyState === 4) {
        reject("Error !!!");
        loaderToggle(false);
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getData(API)
  .then((data) => {
    console.log("Ma'lumot yuklandi:", data);
  })
  .catch((error) => {
    console.error("Xato:", error);
  });
