//create a function that accepts data and return a list item
function createPersonEl(title,firstname,lastname,email) {
  let nameEl = document.createElement('li')
  nameEl.innerHTML = `${title} ${firstname} ${lastname}, ${email}`
  return nameEl
}
fetch('data.json')
  .then(function (response) {
    return response.json(); 
   })
  .then(function (myJson) {
    let personList = document.querySelector('.person-list')
    //TODO iterate through json data, create list elements and append to the html list
    for (let person of myJson.persons) {
      personList.appendChild(createPersonEl(person.title, person.firstname, person.lastname, person.email))
    }
  });

  