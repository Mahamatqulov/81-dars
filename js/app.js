const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const clearBtn = document.getElementById("clear__button");

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  reload;
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = "";
  clearBtn.classList.add("hidden");
});

form["form__input"].addEventListener("input", () => {
  const inputValue = form["form__input"].value;
  const name = document.querySelectorAll(".user__name");
  name.forEach((item) => {
    if (
      item.lastElementChild.textContent.toLocaleLowerCase().includes(inputValue)
    ) {
      item.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.classList.add("hidden");
    }
  });
});
const updateUI = (data) => {
  user.innerHTML = "";
  data.forEach((item) => {
    const { gender, name, picture, location, dob } = item;

    user.innerHTML += `
      <li class="user__item">
              <button class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="${picture.large}"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>-${name.title} ${name.first} ${name.last}</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- ${dob.age}</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-${location.city}, ${location.country}</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- ${
                  gender.charAt(0).toUpperCase() + gender.slice(1)
                }</span>
              </div>
            </li>
    `;
  });

  const deleteButtons = document.querySelectorAll(".user__delete--btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.closest(".user__item").remove();
    });
  });
};

const sampleData = [
  {
    gender: "male",
    name: { title: "Mr", first: "Akhror", last: "Soliev" },
    picture: { large: "https://picsum.photos/id/338/400/400" },
    location: { city: "Fergana", country: "Uzbekistan" },
    dob: { age: 25 },
  },
];
updateUI(sampleData);

document.addEventListener("click", (e) => {
  if (e.target.classList[0] === "user__delete--btn") {
    e.target.parentElement.remove();
  }
  console.log(user.children.length);
  if (!user.children.length) {
    clearBtn.classList.add("hidden");
  }
});
