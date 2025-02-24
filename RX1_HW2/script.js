import { createStore } from "https://cdn.jsdelivr.net/npm/redux@4.2.1/es/redux.mjs";
import profileReducer from "./profileReducer.js";
import { addProfile, removeProfile, calculateAge } from "./actions.js";

const store = createStore(profileReducer);

store.subscribe(() => {
  console.log(store.getState());
  updateAverageAge();
});

const showProfiles = document.querySelector("#showProfiles");
const profileList = document.querySelector("#profileList");

updateAverageAge();
const renderProfiles = () => {
  const state = store.getState();
  showProfiles.innerHTML = state.profiles.map((prof) => {
    return `<li>Id: ${prof.id}, Name: ${prof.name}, Age: ${prof.age}</li>`;
  });
};

renderProfiles();

function updateAverageAge() {
  const state = store.getState();
  profileList.innerHTML = state.profileItems
    .map((prod) => {
      return `<li>${prod.id}.${prod.name} (${prod.age} years old)</li>`;
    })
    .join("");
  const avgAgeElement = document.getElementById("averageAge");

  if (avgAgeElement) {
    avgAgeElement.textContent = `Average Age: ${state.avgAge.toFixed(2)}`;
  }
}

const addProfileHandler = () => {
  const profileId = parseInt(document.querySelector("#profileIdInput").value);
  const profileName = document.querySelector("#profileNameInput").value;
  const profileAge = parseInt(document.querySelector("#profileAgeInput").value);

  store.dispatch(
    addProfile({ id: profileId, name: profileName, age: profileAge })
  );
  store.dispatch(calculateAge());
};

const removeProfileHandler = () => {
  const id = parseInt(document.getElementById("removable").value);
  store.dispatch(removeProfile(id));
  store.dispatch(calculateAge());
};

window.addProfileHandler = addProfileHandler;
window.removeProfileHandler = removeProfileHandler;
