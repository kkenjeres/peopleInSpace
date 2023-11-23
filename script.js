const peopleInSpace = document.querySelector('[data-js="people-in-space"]')
const peopleNames = document.querySelector('[data-js="peopleNames"]')
const btnAll = document.querySelector('[data-js="btnAll"]')
const btnISS = document.querySelector('[data-js="btnISS"]')
const btnTiangong = document.querySelector('[data-js="btnTiangong"]')

let allPeopleInSpace = [];

const url = "http://api.open-notify.org/astros.json";
async function getPeopleInSpace() {
  const response = await fetch(url);
  const data = await response.json();
  console.log("data: ", data);
  allPeopleInSpace = data.people
  peopleInSpace.textContent = data.number
  peopleNames.innerHTML = data.people.map(item => `<li>${item.name}</li>`).join("");
}
getPeopleInSpace();


btnISS.addEventListener('click', () => {
  const peopleOnISS = allPeopleInSpace.filter(person => person.craft === "ISS");
  peopleNames.innerHTML = peopleOnISS.map(person => `<li>${person.name}</li>`).join("");

  console.log(peopleOnISS)
});

btnTiangong.addEventListener('click', () => {
  const peopleOnTiangong = allPeopleInSpace.filter(person => person.craft === "Tiangong");
  peopleNames.innerHTML = peopleOnTiangong.map(person => `<li>${person.name}</li>`).join("");

  console.log(peopleOnTiangong)
});
btnAll.addEventListener('click', () => {
  const allPeople = allPeopleInSpace
  peopleNames.innerHTML = allPeople.map(person => `<li>${person.name}</li>`).join("");

  console.log(allPeople)
})