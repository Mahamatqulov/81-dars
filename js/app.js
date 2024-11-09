const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const clearBtn = document.getElementById("clear__button");

const fetchUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=9");
  const data = await response.json();
  updateUI(data.results);
};

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetchUsers();
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = "";
  clearBtn.classList.add("hidden");
});

form["form__input"].addEventListener("input", () => {
  const inputValue = form["form__input"].value.toLowerCase();
  const name = document.querySelectorAll(".user__name");
  name.forEach((item) => {
    if (item.lastElementChild.textContent.toLowerCase().includes(inputValue)) {
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
          <span>${name.title} ${name.first} ${name.last}</span>
        </div>
        <div class="user__year">
          <span class="material-symbols-outlined">cake</span>
          <span>${dob.age}</span>
        </div>
        <div class="user__location">
          <span class="material-symbols-outlined">person_pin_circle</span>
          <span>${location.city}, ${location.country}</span>
        </div>
        <div class="user__gender">
          <span class="material-symbols-outlined">man</span>
          <span>${gender.charAt(0).toUpperCase() + gender.slice(1)}</span>
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

  if (user.children.length) {
    clearBtn.classList.remove("hidden");
  } else {
    clearBtn.classList.add("hidden");
  }
};

fetchUsers();
