'use strict'

// adatok lekérése url és fetch segítségével, aszinkronitás, try...catch hibakezelés
// nem élő karakterek eltávolítása
// a karakterek abc sorrendbe rendezése

const getData = async (url='') => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result
      .filter((person) => !person.hasOwnProperty("dead"))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error(error);
  }
};

getData("./json/got.json");

// cellák létrehozása, (ötletek - template literal, appendChild, osztálylista hozzáadása, setAttribute, innerHTML)

const imgContainer = document.querySelector(".img_container");
let mainContainer;

const newPerson = (arr =[]) => {
  arr.forEach((person, i) => {
    const PersonDiv = document.createElement("div");
    const PersonImage = document.createElement("img");
    const PersonName = document.createElement("div");

    PersonDiv.appendChild(PersonImage);
    PersonDiv.appendChild(PersonName);

    imgContainer.appendChild(PersonDiv);

    PersonImage.setAttribute("src", person.portrait);
    PersonName.innerHTML = person.name;

    mainContainer = document.querySelectorAll(".charDiv");
  });
};

// Menjünk végig a karakterek listáján egy metódus segítségével, 
// és írassuk ki a szükséges adatokat a dinamikusan generált mezőkbe



// search

const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  const searchInput = document.querySelector('.search-input');
  const lowerCaseInput = searchInput.value.toLowerCase();
  const index = person.findIndex((person) => person.name.toLowerCase() === lowerCaseInput);
  if (index >= 0) {
    //
    inputSearch.value = '';
  } else {
    const error = document.querySelector('.notFound');
    error.innerHTML = 'Character not found!';
  };
});
